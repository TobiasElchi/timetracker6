import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const LabelType = new GraphQLObjectType({
  name: "Label",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },
  }),
});
