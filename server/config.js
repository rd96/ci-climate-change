const {
    cleanEnv, port,
} = require('envalid');

require('dotenv').config();

module.exports = cleanEnv(process.env, {
    PORT: port({ default: 5000 }),
});
