const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index');

app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api', router);

const port = 5100;
app.listen(port, () => {
  console.log('Server run on', { port });
});
