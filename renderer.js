const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

console.log('test->lgoggdgs2') // 打印 'pong'

const func = async () => {
    console.log('test->lgoggdgs') // 打印 'pong'
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
}

func()