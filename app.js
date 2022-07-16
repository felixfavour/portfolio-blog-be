import express, { json, urlencoded } from 'express'
import cors from 'cors'
import initialRoute from './routes/server.js'
import stories from './routes/stories.js'

const app = express()

// Set CORS
app.use(cors())

// Parse JSON requests
app.use(json())

// Parse FormData requests
app.use(urlencoded({ extended: true }))

// Initial route
app.use('', initialRoute)

// Stories route
app.use('/stories', stories)

export default app
