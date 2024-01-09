import { defineStore } from 'pinia';
import { useSongUrl, useDetail } from '@/utils/api';

export const usePlayerStore = defineStore('player',{
  state:()=>{
    return  {
      audio: new Audio(),
      id:0,
      isPlaying: false,
      song: {},
      playList: [] //播放列表
    }
  },

  getters: {

  },

  actions: {
    async play(id:number) {
      if (id == this.id) return
      this.isPlaying = false
      const data = await useSongUrl(id)
      console.log(data, '播放--data')
      this.audio.src = data.url
      this.audio.play().then(result =>{
        this.id = id
        this.songDetail()
      })
    },

    async songDetail() {
      this.song = await useDetail(this.id)
      this.pushPlayList(false, this.song)
    },

    // 播放列表里面添加音乐
    pushPlayList(replace:boolean, ...list:any) {
      list.forEach(song => {
        if (this.playList.filter(s => s.id == song.id).length == 0) {
          this.playList.push(song)
        }
      });
    }

  }

})