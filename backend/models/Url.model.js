const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    tagIdList: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'Tag',
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    }
});

const Url = mongoose.model('Url', UrlSchema); 
module.exports = Url;