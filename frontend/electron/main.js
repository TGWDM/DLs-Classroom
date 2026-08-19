import { app, BrowserWindow, Menu } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import { nativeTheme } from 'electron/main';

const __dirname = path.dirname(fileURLToPath(import.meta.url));



function createWindow() {
  nativeTheme.themeSource = 'dark'; // sets the theme to dark as theme isn't passed with wsl2
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    titleBarOverlay:{
      color:'#16171d',
      symbolColor: '#000000',  // ← White window controls (min/max/close)
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);  // the menu options from the window
  createWindow();
});