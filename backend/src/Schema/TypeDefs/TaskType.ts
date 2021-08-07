import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} from "graphql";
import {LabelType} from "./LabelType";
import {TrackingType} from "./TrackingType";

export const TaskType = new GraphQLObjectType({
    name: "Task",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        timestampCreated: {type: GraphQLString},
        timestampUpdated: {type: GraphQLString},
        trackings: {type: GraphQLList(TrackingType)},
        labels: {
            type: new GraphQLList(LabelType),
        }
    }),

});