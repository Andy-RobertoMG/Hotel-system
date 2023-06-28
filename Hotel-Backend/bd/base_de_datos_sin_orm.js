import pkg from 'pg'
const {Pool} = pkg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Hotel',
  password: '2002',
  port: 5432,
})
const getBooks = async ()=>{
    await pool.query('SELECT * FROM libreria', (err, res) => {
        console.log(err, res)
        //pool.end()
      })
}
const setlibros = async()=>{
  const values = [1,'Andy']
  await pool.query('insert into books(seccion,titulo) values ($1,$2)')
}
//setlibros();
//getBooks();

export default pool;

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'Base_de_Datos',
//     password: '2002',
//     port: 5432,
//   })

// client.connect()
// client.query('SELECT * from libreria', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
