const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = app.listen(process.env.PORT, () => {
    console.log('Server started on port', process.env.PORT);
});

// Enable CORS
app.use(cors());

// Basic routing for different programming languages
app.get('/languages/javascript', (req, res) => {
    res.send('This is JavaScript');
});

app.get('/languages/python', (req, res) => {
    res.send('This is Python');
});

// WebSocket setup
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Handle WebSocket message
        if (message === 'javascript') {
            ws.send('This is JavaScript');
        } else if (message === 'python') {
            ws.send('This is Python');
        } else {
            ws.send('Unknown language');
        }
    });
});
