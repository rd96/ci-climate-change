const express = require('express');
const path = require('path');

const config = require('./config');

const app = express();

app.use(require('./middleware'));

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`);
});
