<template>
  <div class="hello">
    <button @click="doMessage">点击Message</button>
    <owk-page-helper></owk-page-helper>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    doMessage(){
      this.$Message({
        text:'成功',
        type:'success',
        duration:'10000'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
