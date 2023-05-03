// Import the HTTP module
const http = require('http');

// Define the port to listen on
const PORT = 3000;

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.write('Hello World!');

  // End the response
  res.end();
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

