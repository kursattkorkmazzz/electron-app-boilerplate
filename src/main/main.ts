import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: "Title bar",
  });
  mainWindow.loadFile(path.join(__dirname, "/index.html"));
}

app.whenReady().then(() => {
  createWindow();
});
