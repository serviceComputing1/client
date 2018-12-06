<template>
  <div>
    <header class="app-main-header">
      <el-button type="primary">HOME</el-button>
      <el-button type="primary">ABOUT</el-button>
      <el-button type="primary">DOCUMENTATION</el-button>
    </header>
    <div class="app-banner">
      <div class="text-large-title">GO-SWAPI</div>
      <div class="text-small-title">The Star Wars API Built With Go-Lang</div>
    </div>
    <div class="app-content">
      <Home></Home>
    </div>
    <div class="app-bottom"></div>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: {
    Home: Home
  }
}
</script>

<style>
:root {
  --black: black;
  --light-black: #222222;
  --gray: #B6B3B4;
  --gray-info: #d1d1d1;
  --yellow: #FFE300;
  --red: #B53124;
  --blue: #2686C2;
  --green: #01AB78;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-main-header {
  height: 60px;
  padding-right: 10px;
  text-align: right;
  background-color: var(--light-black);
  border-bottom: 1px solid var(--red);
}

.app-main-header button {
  margin-top: 10px;
}

.app-banner {
  height: 200px;
  text-align: center;
  color: var(--yellow);
  overflow:hidden;
}

.text-large-title {
  margin-top: 50px;
  font-size: 50px;
  font-weight: normal;
}

.text-small-title {
  margin-top: 20px;
  font-size: 25px;
  font-weight: lighter;
}

.app-content {
 /* min-height: calc(100%-320px);*/
  overflow: hidden;
}

.app-bottom {
  height: 60px;
  margin-top: 40px;
  background-color: var(--light-black);
  border-top: 1px solid var(--blue);
}
</style>
