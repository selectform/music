import axios from 'axios';
var urls = 'http://39.108.80.64:3000';//http://39.108.80.64:3000/playlist/detail?id=2698499027

export function plist(data) {
	return axios.get(urls + '/top/playlist',{
		params: data
	})
}

export function pdetail(data) {//跳转详情
	return axios.get(urls + '/playlist/detail', {
		params: data
	})
}

export function songs(data) {//歌曲信息
	return axios.get(urls + '/song/url', {
		params: data
	})
}