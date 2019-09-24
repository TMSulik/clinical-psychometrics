// Set up https://cloud.mongodb.com access like this:

const dbuser = 'user';
const dbpassword = 'samplepassword';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-jhbyi.mongodb.net/test?retryWrites=true&w=majority`;


module.exports = MONGODB_URI;