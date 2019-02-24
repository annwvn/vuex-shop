<template>
  <header>
      <p @click="cart">购物车</p>
      <p >景点详情</p>
      <p @click="home">首页</p>
    </header>
</template>
<script>
export default {
  methods: {
    cart(){
      this.$router.push('/cart')
    },
    home(){
      this.$router.push('/home')

    }
  },
};
</script>
<style scoped lang="scss">
//头
@mixin num($w, $h) {
  width: $w;
  height: $h;
}
@mixin flex($j:space-between) {
  display: flex;
  display: -webkit-flex;
  justify-content: $j;
  -webkit-justify-content: $j;
  align-items: center;
  -webkit-align-items: center;
}

header {
  @include num(100%, 1rem);
  @include flex();
  background: #53ab3a;
  padding: 0 0.4rem;
  p {
    color: #fff;
    font-size: 0.34rem;
    i.icon {
      color: #fff;
    }
  }
  .he_p {
    flex-basis: 0.437rem;
  }
}
</style>