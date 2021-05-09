import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ message: 'Dia duit!' });
});

app.get('/eat', (req, res) => {
  res.send({ message: 'Ithim' });
});

app.listen(PORT, () => {
  console.log(`🚀 [Server] Listening on port ${PORT}!`);
});

