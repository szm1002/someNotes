<template>
  <div class="child">
    <h2>firstSibling 组件</h2>
    <button @click="sendMsg">向兄弟组件传值</button>
  </div>
</template>

<script>
import bus from '../assets/eventBus';

export default {
  methods: {
    sendMsg: function () {
      bus.$emit('siblingEvent', 'A message from firstSibling!');
    }
  }
}
</script>
