import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

//Queries => Read only

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return Users.find();
  },
};
