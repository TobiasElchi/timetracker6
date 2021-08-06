import { GraphQLList } from "graphql";
import {TrackingType} from "../TypeDefs/types";
import {TrackingEntity} from "../../Entities/TrackingEntity";

//Queries => Read only

export const GET_ALL_TRACKINGS = {
  type: new GraphQLList(TrackingType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return TrackingEntity.find();
  },
};
