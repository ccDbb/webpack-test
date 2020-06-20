// let word="hello word testcc"
// let href="./static/img/test1.png"
// let element=document.body;
// element.innerHTML=`<div>${word}</div><img src="${href}">`
//

import Vue from 'vue'
import index from './view/index.vue'

new Vue({
    el:"#app",

    render: (h) => h(index)

})