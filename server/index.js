import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Compression from 'compression';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
  const { elements = 1 } = req.query;
  const app = ReactDOMServer.renderToString(<App data={{elements}} />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.set('etag', false);
app.use(Compression());
app.use(express.static('./build'));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});