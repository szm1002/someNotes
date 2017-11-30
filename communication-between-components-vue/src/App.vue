<template>
  <div id="app">
    <h1>父组件 Parent</h1>
    <p>从子组件获取的数据为 {{ childMsg }}</p>
    <Child :message="parentMsg" @childEvent="handleMsgFromChild"></Child>
    <firstSibling></firstSibling>
    <secondSibling></secondSibling>
  </div>
</template>

<script>
import Child from './components/Child';
import FirstSibling from './components/FirstSibling';
import SecondSibling from './components/SecondSibling';

export default {
  name: 'app',
  data () {
    return {
      parentMsg: 'Hello, Mr.Song!',
      childMsg: 'Initial message.'
    }
  },
  methods: {
    handleMsgFromChild: function(data) {
      this.childMsg = data;
    }
  },
  components: {
    Child,
    FirstSibling,
    SecondSibling
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #000;
  width: 600px;
}

.child {
  border: 1px solid #000;
  width: 400px;
  margin: 10px auto;
  padding: 10px;
}
</style>
