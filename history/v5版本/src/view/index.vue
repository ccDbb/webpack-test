<template>
    <div >
        <p class="font24-red">
           name: {{name}}
        </p>
        <p class="font24-blue">年龄：{{age}}</p>
        <p>name 长度：{{nameLength}}</p>
        <p>外部图片</p>
        <img src="http://x.lenovo.com.cn/static/img/m_home_bottom1.png" alt="">
        <p>内部图片</p>
        <img src="../static/img/test2.jpg" alt="">

        <p class="less1">
            <span class="less2">
                test vue less
            </span>
            <span class="less3">
                test vue less3
            </span>
        </p>

    </div>
</template>

<script>
    import util from "../common/util.js"
    import srcurl from "../static/img/test2.jpg"
    export default{
        data(){

            return {
                name:"hell word",
                age:util.age,
                nameLength:util.getlength("hell word"),
                srcurl:srcurl
            }
        }
    }
</script>
<style  lang="less">
    @import "../static/css/common.less";
    .font24-blue{
        font-size: 26px;
        color: blue;
    }
    .less1{
        .less2{
            font-size: 26px;
            color: red;
        }
    }
</style>