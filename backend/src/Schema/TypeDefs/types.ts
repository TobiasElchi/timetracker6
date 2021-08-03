import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

export const LabelType = new GraphQLObjectType({
  name: "Label",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },
  }),
});

export const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },
  }),
});

export const TrackingType = new GraphQLObjectType({
  name: "Tracking",
  fields: () => ({
    id: { type: GraphQLID },
    starttime: {type: GraphQLInt},
    endtime: { type: GraphQLInt},
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },
  }),
});
