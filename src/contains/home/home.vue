<template>
  <div class="hello">
      <div class="dl">
          <dl v-for="(ele,ind) in alllist" :key="ind">
            <dt><img :src="ele.url"/></dt>
            <dd>
              <p>{{ele.title}}</p>
              <div class="dl_p">
                <p>{{ele.price}}</p>
                <p class="plus" @click="plus(ele)">+</p>
                </div>
            </dd>
          </dl>
      </div>

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import {request} from 'api/index'

export default {
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState({
        alllist : state => state.alllist
    })
  },
  methods:{
    plus(ele){
      this.$store.dispatch('add',ele)
    }
    // ...mapMutations({
    //   alllists:"alllists"
    // }),
  },
  mounted() {
      this.$store.dispatch('asyncUpdateLists')
  }
  
}
</script>
