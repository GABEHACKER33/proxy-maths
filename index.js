import express from 'express';
import { createBareServer } from '@tomphttp/bare-server-node';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const bareServer = createBareServer('/bare/');

// Serve static files from public directory
app.use(express.static(join(__dirname, 'public')));

// Serve Ultraviolet scripts
app.use('/uv/', express.static(uvPath));

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

const server = createServer();

server.on('request', (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Ultraviolet proxy running on port ${PORT}`);
});
