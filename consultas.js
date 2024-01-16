import pg from 'pg'

const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    password: "Amara01.",
    database: "likeme",
    allowExitOnIdle: true
})

const getDate = async () => {
    const result = await pool.query("SELECT NOW()")
    Console.log(result)
}
getDate()