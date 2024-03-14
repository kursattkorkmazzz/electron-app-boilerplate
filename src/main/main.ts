import { app, BrowserWindow } from "electron";
import path from "path";
import electronReloader = require("electron-reloader");

// Use hot reloder just in development mode.
if (process.env.NODE_ENV === "development") {
  try {
    module.path = __dirname;
    module.filename = __filename;
    electronReloader(module, { watchRenderer: true });
  } catch (error: any) {
    console.log("The error happned while loading HOT reload module.");
    console.log(error);
  }
}

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
