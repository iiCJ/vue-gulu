<template>
    <transition  v-on:enter="enter" v-on:leave="leave" name="fade">
    <div class="sider" v-if="visibile">
        <button @click="visibile=false">close</button>
        <slot></slot>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "g-sider",
        data(){
            return{
                visibile:true
            }
        },
        methods:{
            enter: function (el, done) {
                el.marginLeft= '-100px';
                done()
            },
            leave: function (el, done) {
                // ...
                done()
            },
        }
    }
</script>

<style lang="scss" scoped>
.sider{
    position: relative;
    >button{
        position: absolute;
        top:0;
        right: 0;
    }
}
.fade-enter-active, .fade-leave-active{
    transition: all .5s;
}
</style>