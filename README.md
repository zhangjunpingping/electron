# 项目运行

npm install

npm install electron-packager -g  

npm run packager



# 打包后操作

用 NSIS 把打包内容 生成exe安装包
[步骤](https://blog.csdn.net/yu17310133443/article/details/79496499)


# 在packager.json可以设置不同系统的打包

win系统   electron-packager . '名称' --platform=win32 --arch=ia32,x64 --out=./dist --icon=img/favicon.png --asar --app-version=1.0.0；

linux系统  "electron-packager '名称' --platform=linux --arch=x64 --out=./app  --electron-version=2.0.5 --overwrite "


electron-packager <应用目录> <应用名称> <打包平台> --out <输出目录> <架构> <应用版本>



[官网地址](https://electronjs.org/docs/api/browser-window)



