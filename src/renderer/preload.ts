const { contextBridge, ipcRenderer } = require("electron");

export const API = {
  saveFile() {
    ipcRenderer.send("save-file", 
        document.querySelector("textarea").value,
        (<HTMLInputElement>document.getElementById('file-name')).value,
        (<HTMLInputElement>document.querySelector(".save-as select")).value);
  },
};

contextBridge.exposeInMainWorld("api", API)

console.log('preloaded')
