const mongoose = require('mongoose');

const PrimaryTag = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const SubTag = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    primaryID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PrimaryTag',
        require:true
    }
});

const Tag = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subTagID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'SubTag',
        require:true
    }
});

module.exports = {
    PrimaryTag: mongoose.model('PrimaryTag', PrimaryTag),
    SubTag: mongoose.model('SubTag', SubTag),
    Tag: mongoose.model('Tag', Tag)
}