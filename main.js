const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var window = null;

app.on('ready', function() {
  window = new BrowserWindow({width: 1080, height:1080});
  window.loadURL('https://www.toolv.top');
});