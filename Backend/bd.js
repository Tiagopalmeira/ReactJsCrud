import mysql from 'mysql';

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'root',
    database:'pessoas'
});

connection.connect((err) => {

    if (err){
        console.error('não conectado ao bd', err);
        throw err;

    }
    console.log('Conexão estabelecida');
});

export default connection;