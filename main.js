const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // // 为了在渲染进程中使用 require，我们需要启用 nodeIntegration
            // nodeIntegration: true,
            // // 为了在渲染进程中使用 require，我们需要启用 contextIsolation
            // contextIsolation: false,
            // // 为了在渲染进程中使用 require，我们需要启用 enableRemoteModule
            // enableRemoteModule: true,
            // __dirname 字符串指向当前正在执行的脚本的路径(在本例中，它指向你的项目的根文件夹)。
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')

    createWindow()
    // 如果没有创建创建，则创建一个新的窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})