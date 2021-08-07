import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const TrackingType = new GraphQLObjectType({
    name: "Tracking",
    fields: () => ({
        id: {type: GraphQLID},
        starttime: {type: GraphQLString},
        endtime: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        timestampCreated: {type: GraphQLString},
        timestampUpdated: {type: GraphQLString},
        taskid: {type: GraphQLString}
    }),
});
