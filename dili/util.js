var fs = require('fs');var path = require('path');var _path = path.resolve('./images')fileDisplay(_path);//读取图片文件列表将输出的内容复制到预加载数组里function fileDisplay(filePath){	//根据文件路径读取文件，返回文件列表	fs.readdir(filePath,function(err,files){		if(err){			console.warn(err)		}else{			//遍历读取到的文件列表			files.forEach(function(filename){				//获取当前文件的绝对路径				var filedir = path.join(filePath,filename);				// var filedir2 = path.				//根据文件路径获取文件信息，返回一个fs.Stats对象				fs.stat(filedir,function(eror,stats){					if(eror){						console.warn('获取文件stats失败');					}else{						var isFile = stats.isFile();//是文件						var isDir = stats.isDirectory();//是文件夹						if(isFile){							if(filedir.indexOf('DS_Store')<0)console.log('"images'+filedir.replace(_path, '')+'",');						}						if(isDir){							fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件						}					}				})			});		}	});}