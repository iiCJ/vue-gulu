<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-tabs-item",
        inject: ['eventBus'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
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
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        computed: {
            classes () {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        methods: {
            onClick () {
                if (this.disabled) { return }
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        }
    }
</script>

<style lang="scss" scoped>
        $blue: blue;
        $disabled-text-color: grey;
        .tabs-item {
            flex-shrink: 0;
            padding: 0 1em;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            &.active {
                color: $blue;
                font-weight: bold;
            }
            &.disabled {
                color: $disabled-text-color;
                cursor: not-allowed;
            }
        }
</style>