// function uploadQiniuNormal(obj) {
//       /* 七牛*/
//         var uploader = Qiniu.uploader({
//           runtimes: 'html5,flash,html4',      // 上传模式，依次退化
//           browse_button: obj.clickID,         // 上传选择的点选按钮，必需
//           // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
//           // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
//           // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
//           // uptoken : token, // uptoken是上传凭证，由其他程序生成
//           // uptoken_url: '/libomo-web/web/upload/uploadtest.do?',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
//           uptoken_func: function(){    // 在需要获取uptoken时，该方法会被调用
//              // do something
//              var uptoken;
//                $.ajax({
//                   type:'POST',
//                   async:false,
//                   // url:httpC+'/libomo-web/web/upload/'+obj.checkVideoOrPicture+'.do',
//                   url:'http://ss.classicalmusician.com.cn/libomo-web/web/upload/uploadimg.do',
//                   // url:'http://182.92.225.80:9090/zr//upload/uploadtest.do',
//                   success:function(resultvalue) {
//                     console.log(resultvalue);
//                     // var resultvalue = eval('('+resultvalue+')');
//                     console.log(resultvalue);
//                     uptoken = resultvalue.token;
//                     // if (resultvalue.code == 0) {
//                     //     console.log('获取token成功',resultvalue.data);
//                     //     uptoken = resultvalue.data;
//                     //
//                     // }else {
//                     //   console.log('获取token失败');
//                     // }
//                   },
//                   error:function () {
//                     console.error();
//                   }
//                 });
//              return uptoken;
//           },
//           get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
//           // downtoken_url: '/downtoken',
//           // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
//           unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
//           // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
//           domain: 'http://otqmd5q2x.bkt.clouddn.com',     // bucket域名，下载资源时用到，必需
//           container: obj.conID,             // 上传区域DOM ID，默认是browser_button的父元素
//           max_file_size: obj.size,             // 最大文件体积限制
//           flash_swf_url: 'Moxie.swf',  //引入flash，相对路径
//           max_retries: 1,                     // 上传失败最大重试次数
//           dragdrop: true,                     // 开启可拖曳上传
//           drop_element: obj.conID,          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
//           chunk_size: '4mb',                  // 分块上传时，每块的体积
//           auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
//           filters : {
//           mime_types : [ //只允许上传图片和zip文件
//               obj.check
//             // {
//             //   title : "Image files",
//             //   extensions : "jpg,gif,png"
//             // },{
//             //   title:'Video',
//             //   extensions:'mp4'
//             // }
//             ]
//            },
//
//           //x_vars : {
//           //    查看自定义变量
//           //    'time' : function(up,file) {
//           //        var time = (new Date()).getTime();
//                     // do something with 'time'
//           //        return time;
//           //    },
//           //    'size' : function(up,file) {
//           //        var size = file.size;
//                     // do something with 'size'
//           //        return size;
//           //    }
//           //},
//           init: {
//               'FilesAdded': function(up, files) {
//                   plupload.each(files, function(file) {
//                       // 文件添加进队列后，处理相关的事情
//                   });
//               },
//               'BeforeUpload': function(up, file) {
//                 console.log('up',up);
//                 console.log('file',file);   // 每个文件上传前，处理相关的事情
//               },
//               'UploadProgress': function(up, file) {
//                      // 每个文件上传时，处理相关的事情
//                    var t =$('.groupUpVideo').length;
//                    var x = parseInt((file.loaded/file.size)*100);
//                    if (obj.conID == 'upDivVideo1') {
//                      $('.mengShow1').show();
//                      $('.mengShow1').html(x+'%');
//                    }else{
//                      $('.mengShow2').show();
//                      $('.mengShow2').html(x+'%');
//                    }
//                    if (x == 100) {
//                      $('.mengProgress').hide();
//                    }
//               },
//               'FileUploaded': function(up, file, info) {
//               var infoStr =  eval('('+info.response+')');
//
//                      // 每个文件上传成功后，处理相关的事情
//                      // 其中info是文件上传成功后，服务端返回的json，形式如：
//                      // {
//                      //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
//                      //    "key": "gogopher.jpg"
//                      //  }
//                      // 查看简单反馈
//                      var domain = up.getOption('domain');
//                     //  var sourceLink = domain +"/"+ infoStr.key;
//                      var sourceLink ='http://imagecdn.yinyuewujie.com/'+ infoStr.key;
//                     //  var sourceLinkVideo ='http://cdn.yinyuewujie.com/'+ infoStr.key;
//                       if (obj.clickID.indexOf('upLoadImg')!='-1') {
//                         pictureManage(obj,infoStr,sourceLink,file);
//                       }else {
//                         console.log(obj.clickID.indexOf('upImageVideo'));
//                         callBack(obj,infoStr,sourceLink,file);
//                      }
//               },
//               'Error': function(up, err, errTip) {
//                      //上传出错时，处理相关的事情
//                     //  console.log(up,err,errTip);
//                      console.log('up====',up);
//                      console.log('err =====',err);
//                      console.log('errTips====',errTip);
//                      alert(errTip);
//                      console.log('上传失败');
//               },
//               'UploadComplete': function() {
//                      //队列文件处理完毕后，处理相关的事情
//               },
//               'Key': function(up, file) {
//                   // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
//                   // 该配置必须要在unique_names: false，save_key: false时才生效
//                   var key = obj.filename;
//                   // do something with key here
//                   return key
//               }
//           }
//       });
//   }
//   function callBack(obj,infoStr,sourceLink,file) {
//     $('#'+obj.conID).find('.moxie-shim').remove();
//     $('#'+obj.conID).find('.againUp').html('<video abc="/'+infoStr.key+'" controls="" src="'+sourceLink+'" width="100%" height="292px;"></video>');
//     // $('#'+obj.clickID).attr('abc','/'+infoStr.key);
//     // $('#'+obj.clickID).html('<video controls="" src="'+sourceLink+'" width="100%" height="292px;"></video>');
//     $('#'+obj.conID ).find('.editShow').show();
//     var num = $('#'+obj.conID).attr('abc');
//     console.log(num);
//     $('#'+obj.conID).find('.editShow').attr('id',obj.clickID);
//     uploadQiniuNormal(upObjFun(num));
//   //   console.log('上传成功',sourceLink);
//   //   if (file.type.indexOf('video')!='-1') {
//   //    $('#'+obj.clickID).attr('src',sourceLink+'?vframe/jpg/offset/15');
//   //    console.log(sourceLink+'?vframe/jpg/offset/15');
//   //  }else{
//   //    $('#'+obj.clickID).attr('src',sourceLink);
//   //  }
//   }
//   function pictureManage(obj,infoStr,sourceLink,file){
//     console.log('sourceLink',sourceLink);
//     console.log('infoStr',infoStr);
//     $('#'+obj.conID).find('.upL').attr('abc','/'+infoStr.key);
//     console.log('上传成功',sourceLink);
//      $('#'+obj.conID).find('.upL').attr('src',sourceLink);
//   }
function uploadQiniuNormal(obj) {
      /* 七牛*/
        var uploader = Qiniu.uploader({
          runtimes: 'html5,flash,html4',      // 上传模式，依次退化
          browse_button: obj.clickID,         // 上传选择的点选按钮，必需
          // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
          // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
          // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
          // uptoken : token, // uptoken是上传凭证，由其他程序生成
          // uptoken_url: '/libomo-web/web/upload/uploadtest.do?',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
          uptoken_func: function(){    // 在需要获取uptoken时，该方法会被调用
             // do something
             var uptoken;
               $.ajax({
                  type:'POST',
                  async:false,
                  // url:baseurl+'web/upload/'+obj.checkVideoOrPicture+'.do',
                  url:'http://ss.classicalmusician.com.cn/zr/upload/uploadimgs.do',
                  success:function(resultvalue) {
                    if (resultvalue.code == 0) {
                        console.log('获取token成功',resultvalue.data);
                        uptoken = resultvalue.data;

                    }else {
                      console.log('获取token失败');
                    }
                  },
                  error:function () {
                    console.error();
                  }
                });
             return uptoken;
          },
          get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
          unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
          // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
          domain: 'http://otqmd5q2x.bkt.clouddn.com',     // bucket域名，下载资源时用到，必需
          container: obj.conID,             // 上传区域DOM ID，默认是browser_button的父元素
          max_file_size: obj.size,             // 最大文件体积限制
          flash_swf_url: '../js/plupload/Moxie.swf',  //引入flash，相对路径
          max_retries: 1,                     // 上传失败最大重试次数
          dragdrop: true,                     // 开启可拖曳上传
          drop_element: obj.conID,          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                  // 分块上传时，每块的体积
          auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
          filters : {
          mime_types : [ //只允许上传图片和zip文件
              obj.check
            // {
            //   title : "Image files",
            //   extensions : "jpg,gif,png"
            // },{
            //   title:'Video',
            //   extensions:'mp4'
            // }
            ]
           },

          //x_vars : {
          //    查看自定义变量
          //    'time' : function(up,file) {
          //        var time = (new Date()).getTime();
                    // do something with 'time'
          //        return time;
          //    },
          //    'size' : function(up,file) {
          //        var size = file.size;
                    // do something with 'size'
          //        return size;
          //    }
          //},
          init: {
              'FilesAdded': function(up, files) {
                  plupload.each(files, function(file) {
                      // 文件添加进队列后，处理相关的事情
                  });
              },
              'BeforeUpload': function(up, file) {
                console.log('up',up);
                console.log('file',file);   // 每个文件上传前，处理相关的事情
              },
              'UploadProgress': function(up, file) {
                     // 每个文件上传时，处理相关的事情

              },
              'FileUploaded': function(up, file, info) {
              var infoStr =  eval('('+info.response+')');

                     // 每个文件上传成功后，处理相关的事情
                     // 其中info是文件上传成功后，服务端返回的json，形式如：
                     // {
                     //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                     //    "key": "gogopher.jpg"
                     //  }
                     // 查看简单反馈
                     var domain = up.getOption('domain');
                    //  var sourceLink = domain +"/"+ infoStr.key;
                     var sourceLink ='http://imagecdn.yinyuewujie.com/'+ infoStr.key;
                      pictureManage(obj,infoStr,sourceLink,file);
              },
              'Error': function(up, err, errTip) {
                     //上传出错时，处理相关的事情
                    //  console.log(up,err,errTip);
                     console.log('up====',up);
                     console.log('err =====',err);
                     console.log('errTips====',errTip);
                     alert(errTip);
                     console.log('上传失败');
              },
              'UploadComplete': function() {
                     //队列文件处理完毕后，处理相关的事情
              },
              'Key': function(up, file) {
                  // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                  // 该配置必须要在unique_names: false，save_key: false时才生效
                  var key = obj.filename;
                  // do something with key here
                  return key
              }
          }
      });
  }
  function pictureManage(obj,infoStr,sourceLink,file){
    console.log('sourceLink',sourceLink);
    console.log('infoStr',infoStr);
    $('#'+obj.conID).find('.upL').attr('abc','/'+infoStr.key);
    console.log('上传成功',sourceLink);
     $('#'+obj.conID).find('.upL').attr('src',sourceLink);
  }
