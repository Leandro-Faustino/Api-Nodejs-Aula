import express from 'express';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'Hello my friends' }),
);

app.listen(3333, () => console.log('Server esta rodando!'));
