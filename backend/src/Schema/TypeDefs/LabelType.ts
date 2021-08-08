import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} from "graphql";
import {TaskType} from "./TaskType";

export const LabelType = new GraphQLObjectType({
    name: "Label",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        timestampCreated: {type: GraphQLString},
        timestampUpdated: {type: GraphQLString},
        taskid: {type: GraphQLString}
    }),
});