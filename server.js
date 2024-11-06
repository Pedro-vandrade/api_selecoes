import app from './src/app.js'

// esse server chama a conexao.js

import conexao from './infra/conexao.js'

const port = 3000

// fazer a conexao
conexao.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('conexão realizada com sucesso!')

        app.listen(port, () => {
            console.log(`Servidor rodando no endereço http://localhost:${port}`)
        })
    }
})

