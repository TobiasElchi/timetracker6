import { GraphQLList } from "graphql";
import { LabelType } from "../TypeDefs/types";
import { LabelEntity } from "../../Entities/LabelEntity";

//Queries => Read only

export const GET_ALL_LABELS = {
  type: new GraphQLList(LabelType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return LabelEntity.find();
  },
};
