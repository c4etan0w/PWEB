var sql = require ('mssql/msnodesqlv8');
var connSQLServer = function(){
 console.log('Conexao com o banco de dados estabelecida!');
 const sqlConfig = {
    user: 'BD2211022',
    password: 'Cyv64330.',
    database: 'LP2', //Na FATEC, utilizar o database BD ou LP8
    server: 'Apolo', //Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
    driver: 'msnodesqlv8',
 options:{
 //trustedConnection: true,
 },
 }

// retornando a conexão realizada
 return sql.connect(sqlConfig);
}
// exportando a função e quando chamar a página ele conecta
module.exports = function(){
 console.log('O autoload carregou o módulo de conexão com o bd');
 return connSQLServer;
} 
