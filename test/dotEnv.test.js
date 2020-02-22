const dotenv = require('dotenv');
const buf = Buffer.from('hello world');
const opt = { debug: true };
const config = dotenv.parse(buf, opt);

console.log(JSON.stringify(config));