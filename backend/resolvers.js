const Url = require('./models/Url.model');
const { PrimaryTopic, SubTopic, Tag } = require('./models/Tags.model');
const metaFetcher = require('meta-fetcher');

const resolvers = {
    Query: {
        getAllUrls: async () => {
            return await Url.find();
        },
        getAllPrimaryTopics: async () => {
            return await PrimaryTopic.find();
        },
        getAllSubTopicsOfPrimaryTopic: async (parent, args, context, info) => {
            return await SubTopic.find({ 'primaryID': args.primaryId });
        },
        getPrimaryTopicDetails: async (parent, args, context, info) => {
            const subTopics = await SubTopic.find({ 'primaryID': args.id });
            for (let index = 0; index < subTopics.length; index++) {
                const element = await Tag.find({ 'subTopicID': subTopics[index]._id });
                subTopics[index].tags = element;
            }
            return { subTopics };
        },
        getAllUrlsWithTags: async (parent, args, context, info) => {
            const urlList = await Url.find({ 'tagIdList': { $in: args.tags } });
            return urlList;
        }
    },
    Mutation: {
        createPrimaryTopic: async (parent, args, context, info) => {
            const primaryTopic = new PrimaryTopic({ name: args.name });
            await primaryTopic.save();
            return primaryTopic;
        },
        createSubTopic: async (parent, args, context, info) => {
            const { name, primaryID } = args;
            const subTopic = new SubTopic({ name, primaryID });
            await subTopic.save();
            return subTopic;
        },
        createTag: async (parent, args, context, info) => {
            const { name, subTopicID } = args.tag;
            const currTag = new Tag({ name, subTopicID });
            await currTag.save();
            return currTag;
        },
        createUrl: async (parent, args, context, info) => {
            const { url, tagIdList } = args.urlInput;
            const metaResult = await metaFetcher(url);
            const currUrl = new Url({ 
                url, 
                tagIdList,
                title : metaResult.metadata.title,
                description : metaResult.metadata.description,
                banner: metaResult.metadata.banner
            });
            await currUrl.save();
            return currUrl;
        },
        deleteUrl: async (parent, args, context, info) => {
            const removeUrl = await Url.deleteOne({"_id": args.id});
            return removeUrl;
        }
    }

}

module.exports = resolvers;