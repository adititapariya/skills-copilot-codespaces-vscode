// Create web server
const express = require('express')
const app = express()
const port = 3000

// Set view engine
app.set('view engine', 'ejs')

// Set static folder
app.use(express.static('public'))

// Set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/comments', (req, res) => {
  res.render('comments')
})

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})