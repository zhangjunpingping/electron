const {app, BrowserWindow} = require('electron');
const electron = require('electron')
const ipc = electron.ipcMain
let win;
let windowConfig = {
    width:1920,
    height:1200,
    alwaysOnTop:true, // 窗口置顶
    fullscreen:false,// 全屏
    autoHideMenuBar: true,// 隐藏菜单
    resizable: true, //禁止改变窗口
    minimizable:false,//禁止最小化
   // fullscreenable:false // 全屏化按钮是否可用,这个不用使用
    icon: 'img/favicon.ico'
};
function createWindow(){
    win = new BrowserWindow(windowConfig);
    win.maximize();
  win.loadURL(`file://${__dirname}/src/index.html`);//加载本地地址
   //  win.loadURL(`http://210.28.216.105/#/login`);//测试
   // win.loadURL(`http://kaoshiuc.jsou.cn/#/login`);//生产url
    // win.loadURL(`http://localhost:8081/`); // 嵌套vue页面关闭窗口,如何关闭 
    
    win.on('close',() => {
        //回收BrowserWindow对象
        win = null;
    });
}
app.commandLine.appendSwitch("--disable-http-cache") //禁止页面缓存
app.on('ready',createWindow);
app.on('window-all-closed',() => {
    app.quit();
});
app.on('activate',() => {
    if(win == null){
        createWindow();
    }
})
ipc.on('window-close',function(){ 
   app.quit();
})
ipc.on('open-full-screen',function(){
   win.setFullScreen(true);
   win.setResizable(false);
})
ipc.on('close-full-screen',function(){
   win.setFullScreen(false);
   win.setResizable(true);
   win.maximize();
})




