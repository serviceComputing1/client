<template>
  <div>
    <div class="detail-card">
      <span class="detail-text">All the Star Wars data you've ever wanted:</span>
      <span class="detail-text">Planets, Spaceships, Vehicles, People, Films and Species</span>
      <span class="detail-text">From all SEVEN Star Wars films</span>
      <span class="detail-text"><strong>Now with The Force Awakens data!</strong></span>
    </div>
    <div class="app-card">
      <div class="input-container">
        <div class="input-prefix">https://swapi.co/api/</div>
        <el-input class="input-content" v-model="input"></el-input>
        <el-button class="input-request" type="primary" @click="apiRequest">Request</el-button>
        <div class="input-hint">Need a hint? try people/1/ or planets/3/ or starships/9/</div>
      </div>
      <el-card class="result-container">
        <div slot="header" class="result-clearfix">
          <span>Result:</span>
        </div>
        <div class="result-content">
          <pre>{{result}}</pre>
        </div>
      </el-card>
    </div>
    <div class="intro-card">
      <div class="intro-container">
        <div class="intro-left">
          <div class="intro-title">What is this?</div>
          <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</p>
          <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
        </div>
        <div class="intro-right">
          <div class="intro-title">How can I use it?</div>
          <p>All the data is accessible through our HTTP web API. Consult our documentation if you'd like to get started.</p>
          <p>Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      input: null,
      result: null
    }
  },
  methods: {
    apiRequest: function() {
      axios
      .get('https://swapi.co/api/' + this.input)
      // pre标签会自动显示格式化文本，这里都不需要转成字符串
      //.then(response => (this.result = JSON.stringify(response.data)))
      .then(response => (this.result = response.data))
      .catch(() => this.result = "404 Not Found")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-card {
  height: 200px;
  margin: auto;
  text-align: center;
  color: white;
  background-color: var(--light-black);
  overflow:hidden;
}

.detail-text {
  display: block;
  margin-top: 24px;
}

.app-card {
  width: 800px;
  margin: auto;
  margin-top: 40px;
}

.input-container {
  height: 65px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

.input-prefix {
  display: inline-block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: var(--light-black);
}

.input-content {
  display: inline-block;
  width: 450px;
  height: 40px;
  font-size: 16px;
  color: black;
}

.input-request {
  width: 150px;
  height: 40px;
  font-size: 16px;
  color: white;
  background-color: var(--light-black);
  border: none;
}

.input-hint {
  margin-top: 5px;
  height: 18px;
  width: 800px;
  font-size: 13px;
  color: var(--gray-info);
}

.result-container {
  height: 400px;
  margin-top: 40px;
  overflow-y: auto;
}

.result-content {
  color: black;
  clear: both;
}

.intro-card {
  margin-top: 40px;
  height: 250px;
  color: white;
  overflow: hidden;
  background-color: var(--light-black);
}

.intro-container {
  width: 800px;
  margin: auto;
}

.intro-left, .intro-right {
  float: left;
  display: inline-block;
  width: 300px;
  margin-top: 20px;
  margin-left: 70px;
}

.intro-title {
  text-align: center;
  font-size: 18px;
}

.intro-left>p, .intro-right>p {
  font-size: 14px;
}

</style>
