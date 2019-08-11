<template>
    <div>
        歌手页面
    </div>
</template>

<script>
    import { getSingerList } from 'api/singer'
    import { ERR_OK } from 'api/config'
    import Singer from 'common/js/singer'

    const HOT_NAME = '热门数组'
    const HOT_SINGER_LEN = 10

    export default {
        data () {
            return {

            }
        },
        created () {
            setTimeout(() => {
                this._getSingerList()
            }, 20)
        },
        methods: {
            _getSingerList () {
                getSingerList().then(res => {
                    if (res.code === ERR_OK) {
                        console.log(this._normalizeSinger(res.data.list))
                    }
                })
            },
            _normalizeSinger (list) {
                let map = {
                    hot: {
                        title: HOT_NAME,
                        items: []
                    }
                }
                list.forEach((item, index) => {
                    if (index < HOT_SINGER_LEN) {
                        map.hot.items.push(new Singer({
                            id: item.Fsinger_mid,
                            name: item.Fsinger_name
                        }))
                    }
                    const key = item.Findex
                    if (!map[key]) {
                        map[key] = {
                            title: key,
                            items: []
                        }
                    }
                    map[key].items.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                })
                console.log(map)
            }
        }
    }
</script>

<style>

</style>
