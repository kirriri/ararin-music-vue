import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
// import axios from 'axios'

export function getSingerList () {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

    const data = Object.assign({}, commonParams, {
      channel: 'singer',
      page: 'list',
      key: 'all_all_all',
      pagesize: 100,
      pagenum: 1,
      hostUin: 0,
      needNewCode: 0,
      platform: 'yqq'
    })

    return jsonp(url, data, options)
  }

// export function getSingerList () {
//     // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
//     const url = '/api/getSingerList'
//     const data = Object.assign({}, commonParams, {
//         loginUin: 0,
//         hostUin: 0,
//         platform: 'yqq.json',
//         needNewCode: 0,
//         data: '%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D'
//     })

//     return axios.get(url, {
//       params: data
//     }).then((res) => {
//       return Promise.resolve(res.data)
//     })
//   }

export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}
