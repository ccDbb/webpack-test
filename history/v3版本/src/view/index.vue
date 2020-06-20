<template>
    <div >
        <p>
           name: {{name}}
        </p>
        <p>年龄：{{age}}</p>
        <p>name 长度：{{nameLength}}</p>

    </div>
</template>

<script>
    import util from "../common/util.js"
    export default{
        data(){

            return {
                name:"hell word",
                age:util.age,
                nameLength:util.getlength("hell word")
            }
        }
    }
</script>