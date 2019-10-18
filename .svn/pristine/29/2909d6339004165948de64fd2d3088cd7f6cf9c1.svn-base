var zShare = {};
zShare.dialog = function(title,text,url,img){
   var shareItems = [
           {text:'微信',icon:'widget://image/wechat.png'},
           {text:'QQ',icon:'widget://image/qq.png'},
           {text:'微博',icon:'widget://image/weibo.png'},
           {text:'商品二维码',icon:'widget://image/erweima.png'},
           {text:'复制链接',icon:'widget://image/copylink.png'}
       ]
   var shareColumn = 5;
   var dialogBox = api.require('dialogBox');
   dialogBox.actionMenu ({
       rect:{h:150},
       texts:{cancel:'取消'},
       items:shareItems,
       styles:{
           bg:'#FFF',
           column:shareColumn,
           itemText: {color:'#000',size: 12,marginT:8},
           itemIcon: {size:50},
           cancel: {color:'#000',h: 40,size: 14}
       }
   }, function(ret){
       if(ret.eventType=='cancel'){
           dialogBox.close({dialogName:'actionMenu'});
       } else if(ret.eventType=='click'){
           if(ret.index==0){
               zShare.wxNews('session',title,text,url,img);
           } else if(ret.index==1){
               zShare.wxNews('timeline',title,text,url,img);
           } else if(ret.index==2){
               zShare.weiboNews('sinaWb',title,text,url,img);
           } else if(ret.index==3){
               zShare.qqNews('QFriend',title,text,url,img);
           } else if(ret.index==4){
               zShare.qqNews('QZone',title,text,url,img);
           }
       }
   });
}
zShare.wxNews = function(tar,title,text,url,img){
   filename = (new Date()).valueOf()+'.'+zShare.ext(img);
   api.download({
       url: img,
       savePath: 'fs://'+filename,
       report: false,
       cache: true,
       allowResume: true
   }, function(ret, err) {
       var wx = api.require('wx');
       wx.isInstalled(function(ret){
           if(ret.installed) {
               api.toast({msg:'分享中，请稍候',duration:2000,location:"middle"});
           } else {
               api.toast({msg:'没有安装微信，无法进行分享',duration:2000,location:"middle"});
           }
       });
       wx.shareWebpage({
           apiKey: '',
           scene: tar,
           title: title,
           description: text,
           thumb: 'fs://'+filename,
           contentUrl: url
       }, function(ret, err) {
           if (ret.status) {
               api.toast({msg: '分享成功',duration:2000, location: "middle"});
           }
       });
   });
}
zShare.qqNews = function(tar,title,text,url,img){
   var qq = api.require('QQPlus');
   qq.installed(function(ret){
       if(ret.status) {
           api.toast({msg:'分享中，请稍候',duration:2000,location:"middle"});
       } else {
           api.toast({msg:'没有安装QQ，无法进行分享',duration:2000,location:"middle"});
       }
   });
   qq.shareNews({
       url: url,
       title: title,
       description: text,
       imgUrl: img,
       type: tar
   },function(ret,err){
       if (ret.status){
           api.toast({msg: '分享成功',duration:2000, location: "botoom"});
       }
   });
}
zShare.weiboNews = function(tar,title,text,url,img){
   filename = (new Date()).valueOf()+'.'+zShare.ext(img);
   api.download({
       url: img,
       savePath: 'fs://'+filename,
       report: false,
       cache: true,
       allowResume: true
   }, function(ret, err) {
       var weibo = api.require('weibo');
       weibo.shareImage({
           text: title+text+url,
           imageUrl: 'fs://'+filename
       }, function(ret, err) {
           if (ret.status) {
               api.toast({msg:'分享成功',duration:2000,location:"middle"});
           }
       });
   });
}
zShare.ext = function(fileName) {
   return fileName.substring(fileName.lastIndexOf('.') + 1);
}