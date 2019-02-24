<template>
<div class="header">
    <div>
        <dl v-for="(ele,ind) in count" :key="ind">
            <dt><img :src="ele.url"/></dt>
            <dd>
                <p>{{ele.title}}</p>
                <div class="dl_p">
                    <p class="minus" v-show="ele.check" @click="minus(ele)">-</p>
                    <p v-show="ele.check">{{ele.count}}</p>
                    <p class="plus" @click="plus(ele)">+</p>
                </div>
                <p class="dl_pp">{{ele.price}}</p>
            </dd>
            <!-- <p>{{shopList(0)}}</p> -->
        </dl>
    </div>
    
    <div class="fot">
        <span>总价：{{total}}</span>
        <span>总数：{{aLLcount}}</span>
    </div>
</div>
    
</template>
<script>
import {mapState,mapMutations,mapGetters } from 'vuex'
export default {
    props:{
        
    }, 
    components:{

    },
    data(){
        return {
            list:[]
        }
    },
    computed:{
        a(){

        },
        total(){
            return this.count.reduce((element,ele) => {
                return element + ele.price * ele.count
            },0);
        },
        aLLcount(){
            return this.count.reduce((element,ele) => {
                return element + ele.count 
            },0);
        },
        ...mapState({
            count:state => state.count
        }),
        ...mapGetters(["getListById"])
        
    },
    methods:{
        ...mapMutations({
            plus:"plus",
        }),
        //加
        plus(ele){
            ele.count++
            ele.check = 1
            let a= this.$store.getters.getListById(ele.id)
            // this.shopList(ele.id)
            console.log(a)
        },
        //减
        minus(ele){
            ele.count--
            if(ele.count <= 0){
                ele.check = 0
                let ind = this.count.findIndex((elem,ind)=>{
                    return elem.url === ele.url
                })
                
                this.count.splice(ind,1)
            }
        }
    },
    created(){

    },
    mounted(){
        // this.$store.dispatch('add',0)
        
    }
}
</script>
<style scoped lang="scss">

</style>