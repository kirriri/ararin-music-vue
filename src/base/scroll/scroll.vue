<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
import BSroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        },
        listenScroll: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        _initScroll () {
            if (!this.$refs.wrapper) {
                return
            }
            this.scroll = new BSroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click
            })
            if (this.listenScroll) {
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos)
                })
            }
        },
        enable () {
            this.scroll && this.scroll.enable()
        },
        disable () {
            this.scroll && this.scroll.disable()
        },
        refresh () {
            this.scroll && this.scroll.refresh()
        },
        scrollTo () {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement () {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    mounted () {
        setTimeout(() => {
            this._initScroll()
        }, 20)
    },
    watch: {
        data () {
            setTimeout(() => {
                this.refresh()
            }, 20)
        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>