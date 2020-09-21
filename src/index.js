

import Vue from 'vue'
import index from './view/index.vue'

import router1 from './view/router1.vue'
import vueRouter from 'vue-router'
let routers=[{
    path:'/foo',component:router1
}]
let router= new vueRouter({
    routers
})

new Vue({
    el:"#app",
    router,
    render: (h) => h(index)

})
