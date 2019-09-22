//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accesibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
<template>
  <div class="nav">
    <div class="skipLink">
      <a href="#mainContent">Skip to Main Content</a>
    </div>
    <b-nav class="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
      <a class="navbar-brand" href="/">SlangBang</a>
      <div class="navbar-nav">
        <!-- <b-nav-item class="nav-item nav-link active" to="/Grid">Grid</b-nav-item> -->
        <!-- <b-nav-item class="nav-item nav-link active" to="/List">List</b-nav-item> -->
        <!-- <b-nav-item class="nav-item nav-link active" to="/Master_Detail">Master_Detail</b-nav-item> -->
        <!-- <b-nav-item class="nav-item nav-link active" to="/Blank">Blank</b-nav-item> -->
      </div>
    </b-nav>
  </div>
</template>

<script>

export default {
  name: "TheNavBar"
};
</script>

<style scoped>
.navbar-brand {
  font-family: 'Permanent Marker', cursive;
  font-size: 42px;
}
.skipLink a {
  position: absolute;
  left: -100px;
  top: -100px;
}

.skipLink a:focus {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 10px;
  color: #ffffff;
  background: #000000;
}
.nav {
  background-color: #e5ff00f1;
}

</style>
