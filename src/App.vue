<template>
  <div class="background">
    <TheNavBar />
    <div class="main">
      <router-view></router-view>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'app',
  components: {
    TheNavBar,
    TheFooter,
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 160px !important; /* Height of the footer */
  padding: 0;
}
/* .background {
  position: relative;
} */
.background {
  /* position: relative; */
  content: '';
  /* width: 100%; */
  min-height: 87vh;
  /* background-color: rgba(88, 26, 26, 0.692); */
  /* background: #9e5d0c url("https://www.kwhl.com/wp-content/uploads/2019/04/GettyImages-1134509276-1-640x400.jpg"); */
  /* color: #fff;  */
  background-image: url('https://www.kwhl.com/wp-content/uploads/2019/04/GettyImages-1134509276-1-640x400.jpg');
  background-repeat: no-repeat ;
  background-size: 100%;
  /* opacity: 0.7; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* position: absolute; */
  z-index: -1;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px; /* Set the fixed height of the footer here */
}

/* Override Bootstrap Styling */

.btn-primary {
  background-color: #025fce !important;
}

.main {
  
  background-color: rgba(237, 230, 128, 0.884);

  /* background-color: rgba(47, 82, 224, 0.925); */
}

button:focus,
button:active {
  outline: none !important;
  box-shadow: none !important;
}
</style>
