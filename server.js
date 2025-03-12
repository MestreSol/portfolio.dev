import express from 'express'
import cors from 'cors'

const app = express()

app.use(
  cors({
    origin: '*', // Altere para um domínio específico em produção
    methods: 'GET,POST,OPTIONS',
    allowedHeaders: 'Content-Type'
  })
)

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3001, () => console.log('Servidor rodando na porta 3001'))
