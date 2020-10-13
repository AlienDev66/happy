import express from 'express';

const app = express();



app.get('/users', (request, response)=>{
 return response.json({nome: 'Domingos Capitango'})
})

app.listen(3333)