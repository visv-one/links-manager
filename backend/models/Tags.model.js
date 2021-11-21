const mongoose = require('mongoose');

const PrimaryTopic = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const SubTopic = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    primaryID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PrimaryTopic',
        require:true
    }
});

const Tag = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subTopicID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'SubTopic',
        require:true
    }
});

module.exports = {
    PrimaryTopic: mongoose.model('PrimaryTopic', PrimaryTopic),
    SubTopic: mongoose.model('SubTopic', SubTopic),
    Tag: mongoose.model('Tag', Tag)
}