<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-tabs-pane",
        inject:['eventBus'],
        props:{
            name: {
                type: String | Number,
                require: true
            }
        },
        data(){
            return{
                active:false
            }
        },
        computed: {
            classes () {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>