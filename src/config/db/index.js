const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_example_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected !!!')
    } catch (error) {
        console.log('Not Connected !!!')
    }
}

module.exports = { connect };