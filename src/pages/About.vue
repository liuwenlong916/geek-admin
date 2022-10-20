<template>
  <div>关于页面 {{ a }}</div>
</template>

<script>
export default {
  data() {
    return {
      a: '1'
    }
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>
