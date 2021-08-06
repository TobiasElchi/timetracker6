import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} from "graphql";
import {TrackingEntity} from "../../Entities/TrackingEntity";

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
    trackings: { type: GraphQLList(TrackingType)}
  }),
});

export const TrackingType = new GraphQLObjectType({
  name: "Tracking",
  fields: () => ({
    id: { type: GraphQLID },
    starttime: {type: GraphQLString},
    endtime: { type: GraphQLString},
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },

  }),
});
