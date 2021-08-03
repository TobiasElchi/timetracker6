import {GraphQLID, GraphQLInt, GraphQLString} from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {Trackings} from "../../Entities/Trackings";
import {TrackingType} from "../TypeDefs/types";

//Mutations => Create,Update,Delete
export const CREATE_TRACKING = {
  type: TrackingType,
  args: {
    description: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { description } = args;
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await Trackings.insert({description, timestampCreated: currentTime, timestampUpdated: currentTime , starttime:0,endtime:0});
    return args;
  },
};

export const UPDATE_TRACKING_DESCRIPTION = {
  type: MessageType,
  args: {
    description: { type: GraphQLString },
    id: { type: GraphQLID },
    timestampUpdated: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { description, id} = args;
    const tracking = await Trackings.findOne({id: id});
    if (!tracking) {
      throw new Error("TRACKING NOT FOUND");
    }
    const trackingID = tracking?.id;
    await Trackings.update({ id: id }, { description: description });
    //Automatically update the timestamp
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await Trackings.update({ id: id }, {timestampUpdated: currentTime});
    await Trackings.update({ id: id }, {description: description});
    return { successful: true, message: "TRACKINGNAME UPDATED" };
  },
};

export const UPDATE_TRACKING_STARTTIME = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    timestampUpdated: { type: GraphQLString },
    starttime: {type: GraphQLInt}
  },
  async resolve(parent: any, args: any) {
    const {id} = args;
    const tracking = await Trackings.findOne({id: id});
    if (!tracking) {
      throw new Error("TRACKING NOT FOUND");
    }
    const trackingID = tracking?.id;
    //Automatically update the timestamp
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await Trackings.update({ id: id }, {timestampUpdated: currentTime});
    await Trackings.update({ id: id }, {starttime: timeElapsed});
    return { successful: true, message: "TRACKING STARTTIME UPDATED" };
  },
};

export const UPDATE_TRACKING_EDNDTIME = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    timestampUpdated: { type: GraphQLString },
    endtime: {type: GraphQLInt}
  },
  async resolve(parent: any, args: any) {
    const {id} = args;
    const tracking = await Trackings.findOne({id: id});
    if (!tracking) {
      throw new Error("TRACKING NOT FOUND");
    }
    const trackingID = tracking?.id;
    //Automatically update the timestamp
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await Trackings.update({ id: id }, {timestampUpdated: currentTime});
    await Trackings.update({ id: id }, {endtime: timeElapsed});
    return { successful: true, message: "TRACKING STARTTIME UPDATED" };
  },
};

export const DELETE_TRACKING = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Trackings.delete(id);
    return { successful: true, message: "TRACKING DELETED" };
  },
};
