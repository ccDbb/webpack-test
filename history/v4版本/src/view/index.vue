<template>
    <div >
        <p>
           name: {{name}}
        </p>
        <p>年龄：{{age}}</p>
        <p>name 长度：{{nameLength}}</p>
        <p>外部图片</p>
        <img src="http://x.lenovo.com.cn/static/img/m_home_bottom1.png" alt="">
        <p>内部图片</p>
        <img :src="srcurl" alt="">

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