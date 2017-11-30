<template>
  <div class="child">
    <h2>子组件Child</h2>
    <p>从父组件获取的数据为 {{ message }}</p>
    <button @click="sendMsgToParent">向父组件传值</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    sendMsgToParent: function () {
      this.$emit('childEvent', 'Wow, this is a message from child!');
    }
  }
}
</script>
