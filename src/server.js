const app = require('./app')
const routers = require('../routes/index')

app.use('/', routers)


app.listen(3333)