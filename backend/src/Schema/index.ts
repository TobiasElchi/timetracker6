import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_LABELS } from "./Queries/LabelQueries";
import {CREATE_LABEL, DELETE_LABEL, UPDATE_NAME} from "./Mutations/LabelMutations";

//Main query for startup
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllLabels: GET_ALL_LABELS,
  },
});

//List of all available mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createLabel: CREATE_LABEL,
    deleteLabel: DELETE_LABEL,
    updateLabelName: UPDATE_NAME,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
