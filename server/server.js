// Arif branch 

const app = require('./app')

const dotnev = require('dotenv')




//setting up config file 
dotenv.config({path: 'server/config/config.env'})







app.listen(process.env.PORT, () => console.log(`Server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode `)) 
const server = app.listen(process.env.PORT, () => console.log(`Server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode `))