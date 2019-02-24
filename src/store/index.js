import Vue from 'vue'
import Vuex from 'vuex'
import {request} from '../api/index'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:[],
        alllist:[],
    },
    getters:{
        getListById:(state)=>(id)=>{
            return state.alllist[id]
        }
    },
    mutations:{
        alllist(state,payload){
            state.alllist = [...state.alllist,...payload]
        },
        plus(state,payload){
            if(payload){
                let Has = state.count.filter((ele,ind)=>{
                    return ele.title === payload.title
                })
                
                if(Has.length <= 0){
                    state.count.push(payload)
                }else{
                    state.count.map((ele,ind)=>{
                        if(ele.title == payload.title){
                            ele.count++
                            ele.check=1
                        }
                        return {...ele}
                    })
                }
                return  state.count
            }
        }
    },
    actions:{
        add({commit},payload){
            commit('plus',payload)
        },
        asyncUpdateLists({commit}){
            request("/list").then(res => {
                console.log(res.list,'454');
                commit("alllist",res.list)
            })
        }
    }
})
export default store
