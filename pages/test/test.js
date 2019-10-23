page({
  scroll:function(e) {
  console.log(e.detail)
},
onReady:function(){
  var audioCtx=wx.createInnerAudioContext()
  audioCtx.src ='/mus/WYZG.mp3'
  audioCtx.onPlay(function() {
    console.log('开始播放')
  })
  audioCtx.onError(function(res){
    console.log(res.errMsg)
    console.log(res.errCode)
  })
  audioCtx.play()
},
sliderChanging:function(e){
  console.log(e.detail.value)
},
})