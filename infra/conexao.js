// arquivo que fará a conexão com a base de dados do mysql
import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'pedro1994',
    database: 'bdcopa'
})

// permite que eu use em outros arquivos o arquivo conexao
export default conexao