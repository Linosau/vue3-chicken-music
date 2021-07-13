/*
 * @Author: Linosau
 * @Date: 2021-07-04 17:12:27
 * @LastEditTime: 2021-07-04 17:15:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/api/index.js
 */
import axios from 'axios'

const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? 'http://ustbhuangyi.com/music-next/' : '/'

axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then(res => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    console.log(e)
  })
}
