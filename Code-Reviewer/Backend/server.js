require('dotenv').config() // accessing the key from .env

const app = require('./src/app');
app.listen(3000 , () => {    // Starting the server. Callback works when the server
    console.log(`Server is running on http://localhost:3000`);
}) 