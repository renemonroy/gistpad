const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win = null;

const createWindow = () => {
  win = new BrowserWindow({ width: 900, height: 700 });

  win.loadURL(url.format({
    pathname: path.join(__dirname, './editor/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
