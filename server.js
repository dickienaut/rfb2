const express = require('express')
const connectDB = require('./config/db.js')
const app = express()
const PORT = process.env.PORT || 5000

connectDB()

// Define routes
app.use('/api/users', require('./routes/users.js'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/contacts', require('./routes/auth'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
