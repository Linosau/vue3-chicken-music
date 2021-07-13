/*
 * @Author: Linosau
 * @Date: 2021-07-04 17:17:10
 * @LastEditTime: 2021-07-04 17:18:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-music/src/api/recommend.js
 */
import { get } from './index'

export const getRecommend = () => get('/api/getRecommend')

export const getAlbum = (album) => get('/api/getAlbum', { id: album.id })
