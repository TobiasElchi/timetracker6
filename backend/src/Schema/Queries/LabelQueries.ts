import { GraphQLList } from "graphql";
import { LabelType } from "../TypeDefs/types";
import { Labels } from "../../Entities/Labels";

//Queries => Read only

export const GET_ALL_LABELS = {
  type: new GraphQLList(LabelType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return Labels.find();
  },
};
