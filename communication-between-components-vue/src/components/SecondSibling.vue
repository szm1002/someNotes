<template>
  <div class="child">
    <h2>secondSibling 组件</h2>
    <p>从兄弟组件获取到的数据为 {{ siblingMsg }}</p>
  </div>
</template>

<script>
import bus from '../assets/eventBus';

export default {
  data() {
    return {
      siblingMsg: 'Initial message.'
    }
  },

  mounted() {
    const self = this;
    bus.$on('siblingEvent', function (data) {
      self.siblingMsg = data;
    })
  }
}
</script>
