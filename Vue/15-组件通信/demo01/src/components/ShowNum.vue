<template>
  <div>计算和: {{count}}</div>
</template>

<script>
import { EventBus } from './event-bus.js'
export default {
  data() {
    return {
      count: 0
    }
  },

  mounted() {
    EventBus.$on('addition', param => {
      
      this.count = this.count + param.num;
      console.log('param.num---',param.num)
      console.log('this.count---',this.count)
    })
  }
}
</script>