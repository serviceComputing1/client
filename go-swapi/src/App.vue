<template>
  <div @click="showSaber">
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
    <transition name="fade1">
      <div v-if="ifSaber&&saberDir" class="lightsaber" :class="{rightsaber:saberDir}" :style="{left: saberX + 'px', top: saberY + 'px'}">
        <div class="plasma" :class="{yoda: saberColor==0, vader: saberColor==1, windu:saberColor==2, obiwan:saberColor==3}"></div>
        <div class="handle"></div>
      </div>
    </transition>
    <transition name="fade2">
      <div v-if="ifSaber&&!saberDir" class="lightsaber" :class="{leftsaber:!saberDir}" :style="{left: saberX + 'px', top: saberY + 'px'}">
        <div class="plasma" :class="{yoda: saberColor==0, vader: saberColor==1, windu:saberColor==2, obiwan:saberColor==3}"></div>
        <div class="handle"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: {
    Home: Home
  },
  data: function() {
    return {
      ifSaber: false,
      saberX: 0,
      saberY: 0,
      saberDir: false,
      saberColor: 0
    }
  },
  methods: {
    showSaber: function(event) {
      this.ifSaber = true
      this.saberColor = Math.floor(Math.random()*4)
      if(this.saberDir) {
        this.saberX = event.pageX + 18
        this.saberY = event.pageY - 55
      } else {
        this.saberX = event.pageX - 22
      this.saberY = event.pageY - 55
      }
      this.saberDir = !this.saberDir
      setTimeout(()=>{
        this.ifSaber = false
      }, 250)
    }
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

/* LIGHTSABER */

.lightsaber {
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  z-index: 999;
  transform-origin: 50% 100%;
}

.rightsaber {
  transform:rotate(45deg);
  -ms-transform:rotate(45deg);   /* IE 9 */
  -moz-transform:rotate(45deg);  /* Firefox */
  -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
  -o-transform:rotate(45deg);  /* Opera */
}

.leftsaber {
  transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);   /* IE 9 */
  -moz-transform:rotate(-45deg);  /* Firefox */
  -webkit-transform:rotate(-45deg); /* Safari 和 Chrome */
  -o-transform:rotate(-45deg);  /* Opera */
}

.plasma {
  /* position */
  width: 5px;
  height: 50px;
  border-radius: 12px 12px 0 0;
  /* blur */
  filter: blur(1px);
  -moz-filter: blur(1px);
  -webkit-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
}

.yoda {
  /* gradient background color */
  background: rgb(135,220,90); /* Old browsers */
  background: linear-gradient(to right, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* W3C */
  background: -moz-linear-gradient(left, rgb(135,220,90) 0%, rgb(254,254,254) 30%, rgb(254,254,254) 50%, rgb(254,254,254) 70%, rgb(135,220,90) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgb(135,220,90)), color-stop(30%,rgb(254,254,254)), color-stop(50%,rgb(254,254,254)), color-stop(70%,rgb(254,254,254)), color-stop(100%,rgb(135,220,90))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87dc5a', endColorstr='#87dc5a',GradientType=1 ); /* IE6-9 */
  /* shadow */
  box-shadow: 0 0 15px #7EC855;
}


.vader {
  background: rgb(229,17,21); /* Old browsers */
  background: linear-gradient(to right, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* W3C */
  background: -moz-linear-gradient(left, rgba(229,17,21,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(229,17,21,1) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(229,17,21,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(229,17,21,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e51115', endColorstr='#e51115',GradientType=1 ); /* IE6-9 */
  box-shadow: 0 0 10px #e51115;
}

.windu {
  background: rgb(202,116,221); /* Old browsers */
  background: linear-gradient(to right, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* W3C */
  background: -moz-linear-gradient(left, rgba(202,116,221,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(202,116,221,1) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(202,116,221,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(202,116,221,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ca74dd', endColorstr='#ca74dd',GradientType=1 ); /* IE6-9 */
  box-shadow: 0 0 10px #ca74dd;
}

.obiwan {
  background: rgb(55,132,214); /* Old browsers */
  background: linear-gradient(to right, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* W3C */
  background: -moz-linear-gradient(left, rgba(55,132,214,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(55,132,214,1) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(55,132,214,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(55,132,214,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3784d6', endColorstr='#3784d6',GradientType=1 ); /* IE6-9 */
  box-shadow: 0 0 10px #3784d6;
}

.handle {
  /* position and border */
  width: 5px;
  height: 15px;
  border-bottom: solid 2px grey;
  border-top: solid 2px grey;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  /* gradient background color */
  background: rgb(226,226,226); /* Old browsers */
  background: linear-gradient(to right, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */
  background: -moz-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(226,226,226,1)), color-stop(50%,rgba(219,219,219,1)), color-stop(51%,rgba(209,209,209,1)), color-stop(100%,rgba(254,254,254,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 */
}

.fade1-enter {
  opacity: 0;
  transform:rotate(0deg);
  -ms-transform:rotate(0deg);   /* IE 9 */
  -moz-transform:rotate(0deg);  /* Firefox */
  -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
  -o-transform:rotate(0deg);  /* Opera */
}

.fade1-leave-to {
  opacity: 0;
  transform:rotate(45deg);
  -ms-transform:rotate(45deg);   /* IE 9 */
  -moz-transform:rotate(45deg);  /* Firefox */
  -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
  -o-transform:rotate(45deg);  /* Opera */
}

.fade1-enter-active, .fade1-leave-active {
  transition: .3s;
}

.fade2-enter {
  opacity: 0;
  transform:rotate(0deg);
  -ms-transform:rotate(0deg);   /* IE 9 */
  -moz-transform:rotate(0deg);  /* Firefox */
  -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
  -o-transform:rotate(0deg);  /* Opera */
}

.fade2-leave-to {
  opacity: 0;
  transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);   /* IE 9 */
  -moz-transform:rotate(-45deg);  /* Firefox */
  -webkit-transform:rotate(-45deg); /* Safari 和 Chrome */
  -o-transform:rotate(-45deg);  /* Opera */
}

.fade2-enter-active, .fade2-leave-active {
  transition: .3s;
}
</style>
