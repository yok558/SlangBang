const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleData");
const unirest = require('unirest');


const router = express.Router();
// LIST ENDPOINTS
router.get(CONSTANTS.ENDPOINT.LIST, function(req, res) {
  // res.json(sampleData.listTextAssets);
});

router.post(CONSTANTS.ENDPOINT.LIST, function(req, res) {
  let listItem = {
    text: req.body.text,
    link: '',
    _id: sampleData.listID,
  };

  const urbanReq = unirest('GET', 'https://mashape-community-urban-dictionary.p.rapidapi.com/define');

  urbanReq.query({
    term: listItem.text,
  });

  urbanReq.headers({
    'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
    'x-rapidapi-key': '9fe911529cmsh0ca0029ff12296fp1e21c0jsn8b76ead88f13',
  });

  urbanReq.end(function(urbanRes) {
    if (res.error) throw new Error(urbanRes.error);

    // console.log(urbanRes.body.list[0].definition);

    const deezerReq = unirest('GET', 'https://deezerdevs-deezer.p.rapidapi.com/search');

    deezerReq.query({
      q: listItem.text,
    });

    deezerReq.headers({
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '57bd0f548cmsh5eba061f28d43d3p1b8a9ajsn0e99d213d149',
    });

    deezerReq.end(function(deezerRes) {
      if (deezerRes.error) throw new Error(deezerRes.error);

      // console.log(deezerRes.body.data[0].link);

      sampleData.listTextAssets.unshift(listItem);
      const { definition: def, example } =
        urbanRes.body.list[0]
          ? urbanRes.body.list[0]
          : { definition: 'not found', example: 'not found' };
      listItem.text = `Definition: ${def}                       
                      Example: ${example}`;
      
      console.log(def);
      
      if (def !== 'not found') {
        const { link } = deezerRes.body.data[0] ? deezerRes.body.data[0] : { link: 'not found'};
        listItem.link = link;
      } 
      res.json(listItem);
      sampleData.listID++;
    });
  });
});

router.delete(CONSTANTS.ENDPOINT.LIST + "/:_id", function(req, res) {
  const { _id } = req.params;
  var index = sampleData.listTextAssets.findIndex(
    listItem => listItem._id === Number(_id)
  );
  if (index > -1) {
    sampleData.listTextAssets.splice(index, 1);
    res.json({ _id: Number(_id), text: "This commented was deleted" });
  } else {
    res.status(404).send("Could not find item with id:" + _id);
  }
});


module.exports = router;
