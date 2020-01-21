const express = require('express')
const app = express()

// Define routes
app.use('/api/users', require('./routes/users.js'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/contacts', require('./routes/auth'))

const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
