import { GraphQLList } from "graphql";
import {TrackingType} from "../TypeDefs/types";
import {Trackings} from "../../Entities/Trackings";

//Queries => Read only

export const GET_ALL_TRACKINGS = {
  type: new GraphQLList(TrackingType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return Trackings.find();
  },
};
