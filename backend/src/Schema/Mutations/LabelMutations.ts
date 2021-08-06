import { GraphQLID, GraphQLString } from "graphql";
import { LabelType } from "../TypeDefs/types";
import { MessageType } from "../TypeDefs/Messages";
import { LabelEntity } from "../../Entities/LabelEntity";
import {DateUtils} from "typeorm/util/DateUtils";

//Mutations => Create,Update,Delete
export const CREATE_LABEL = {
  type: LabelType,
  args: {
    name: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name } = args;
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await LabelEntity.insert({ name, timestampCreated: currentTime, timestampUpdated: currentTime });
    return args;
  },
};

export const UPDATE_LABELNAME = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    id: { type: GraphQLID },
    timestampUpdated: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, id} = args;
    const label = await LabelEntity.findOne({id: id});
    if (!label) {
      throw new Error("LABEL NOT FOUND");
    }
    const labelID = label?.id;
    await LabelEntity.update({ id: id }, { name: name });
    //Automatically update the timestamp
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await LabelEntity.update({ id: id }, {timestampUpdated: currentTime});
    return { successful: true, message: "LABELNAME UPDATED" };
  },
};

export const DELETE_LABEL = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await LabelEntity.delete(id);
    return { successful: true, message: "LABEL DELETED" };
  },
};