
npm install electron-packager -g   
官网地址https://electronjs.org/docs/api/browser-window


在packager.json可以设置不同系统的打包：
win系统   electron-packager . '考试系统考生端-测试版本' --platform=win32 --arch=ia32,x64 --out=./dist --icon=img/favicon.png --asar --app-version=1.0.0；
linux系统  "electron-packager '考试系统考生端-测试版本' --platform=linux --arch=x64 --out=./app  --electron-version=2.0.5 --overwrite "





打包命令 npm run packager
