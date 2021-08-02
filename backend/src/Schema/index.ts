import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import {CREATE_USER, DELETE_USER, UPDATE_PASSWORD, DELETE_USER_BY_NAME, UPDATE_USERNAME} from "./Mutations/User";

//Main query for startup
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

//List of all available mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    deleteUserByName: DELETE_USER_BY_NAME,
    updatePassword: UPDATE_PASSWORD,
    updateUsername: UPDATE_USERNAME,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
