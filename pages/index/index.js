// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isPlayingMusic:true
  },

  bgm:null,
  music_url:'http://music.163.com.song/media/outer/url?id=5254811.mp3',
  music_coverImgUrl:'http://p1.music.126.net/r0UceF4WIOTm10SgfAFP_Q==/109951165838714109.jpg',
  onReady:function(){
    // 创建getBackgroundAudioManager实例对象
    this.bgm=wx.getBackgroundAudioManager()
    //音频标题
    this.bgm.title='merry me'
    //专辑名称
    this.bgm.epname='wedding'
    //歌手名
    this.bgm.singer='singer'
    //专辑封面
    this.bgm.coverImgUrl=this.music_coverImgUrl
    var that=this 
    this.bgm.onCanplay(()=>{
      if(that.data.isPlayingMusic){
        that.bgm.play()
      }else{
        that.bgm.pause()
      }
    })
    //指定音频的数据源
    this.bgm.src=this.music_url
  }
})
