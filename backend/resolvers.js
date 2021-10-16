const Url = require('./models/Url.model');
const { PrimaryTag, SubTag, Tag } = require('./models/Tags.model');
const metaFetcher = require('meta-fetcher');

const resolvers = {
    Query: {
        getAllUrls: async () => {
            return await Url.find();
        },
        getAllPrimaryTopics: async () => {
            return await PrimaryTag.find();
        },
        getPrimaryTopicDetails: async (parent, args, context, info) => {
            const subTags = await SubTag.find({ 'primaryID': args.id });
            for (let index = 0; index < subTags.length; index++) {
                const element = await Tag.find({ 'subTagID': subTags[index]._id });
                subTags[index].tags = element;
            }
            return { subTags };
        },
        getAllUrlsWithTags: async (parent, args, context, info) => {
            const urlList = await Url.find({ 'tagIdList': { $all: args.tags } });
            return urlList;
        }
    },
    Mutation: {
        createPrimaryTopic: async (parent, args, context, info) => {
            const primaryTag = new PrimaryTag({ name: args.name });
            await primaryTag.save();
            return primaryTag;
        },
        createSubTopic: async (parent, args, context, info) => {
            const { name, primaryID } = args.sub;
            const subTag = new SubTag({ name, primaryID });
            await subTag.save();
            return subTag;
        },
        createTag: async (parent, args, context, info) => {
            const { name, subTagID } = args.tag;
            const currTag = new Tag({ name, subTagID });
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