<template>
  <div class="">
    {{test | toUpperCase}}
  </div>
</template>

<script>
export default {
  name: 'TestRouter',
  filters: {
      toUpperCase(val) {
          return val.toUpperCase();
      }
  },    
  data() {
      return {
          test: 'test'
      }
  }
}
</script>