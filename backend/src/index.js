// backend/src/index.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Blockchain API is running');
});

const PORT = process.env.BACKEND_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
