import { GraphQLID, GraphQLString } from "graphql";
import { LabelType } from "../TypeDefs/Label";
import { MessageType } from "../TypeDefs/Messages";
import { Labels } from "../../Entities/Labels";

//Mutations => Create,Update,Delete

export const CREATE_LABEL = {
  type: LabelType,
  args: {
    //TODO: Import Scalar: https://www.graphql-scalars.dev/docs/scalars/date-time/
    name: { type: GraphQLString },
    timestampCreated: { type: GraphQLString },
    timestampUpdated: { type: GraphQLString },
  },
  //TODO: types -> Interfaces
  async resolve(parent: any, args: any) {
    const { name, timestampCreated: timestampCreated, timestampUpdated: timestampUpdated } = args;
    await Labels.insert({ name, timestampCreated: timestampCreated, timestampUpdated: timestampUpdated });
    return args;
  },
};

export const UPDATE_NAME = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { name, id } = args;
    const label = await Labels.findOne({id: id});

    if (!label) {
      throw new Error("LABEL NOT FOUND");
    }
    const labelID = label?.id;
    await Labels.update({ id: id }, { name: name });
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
    await Labels.delete(id);
    return { successful: true, message: "LABEL DELETED" };
  },
};
