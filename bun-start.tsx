import { renderToReadableStream } from "react-dom/server";
import App from './src/App';
import React from 'react';

export default {
  port: 3000,
  async fetch(request: Request) {
    const {url} = request;
    const elements = url.split('=').at(1) ?? '1';

    return new Response(
      await renderToReadableStream(
        <App data={{elements: parseInt(elements)}} />
      ),
    );
  },
};