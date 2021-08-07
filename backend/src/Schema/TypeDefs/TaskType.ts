import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} from "graphql";
import {TrackingEntity} from "../../Entities/TrackingEntity";
import {resolve} from "dns/promises";
import {TaskEntity} from "../../Entities/TaskEntity";
import {LabelType} from "./LabelType";
import {TrackingType} from "./TrackingType";

export const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },
    trackings: { type: GraphQLList(TrackingType)},
    labels: { type: new GraphQLList(LabelType),
    }

  }),

});