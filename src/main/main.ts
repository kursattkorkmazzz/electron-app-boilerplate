import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: "Title bar",
  });
  // TODO Load HTML file. => mainWindow.webContents.loadFile("../renderer/index.html");
}

app.whenReady().then(() => {
  createWindow();
});
