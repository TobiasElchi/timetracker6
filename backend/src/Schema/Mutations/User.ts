import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";

//Mutations => Create,Update,Delete

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  //TODO: types -> Interfaces
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({ name, username, password });
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOne({ username: username });

    if (!user) {
      throw new Error("USERNAME DOESNT EXIST");
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update({ username: username }, { password: newPassword });

      return { successful: true, message: "PASSWORD UPDATED" };
    } else {
      throw new Error("PASSWORDS DO NOT MATCH!");
    }
  },
};

export const UPDATE_USERNAME = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { username, id } = args;
    const user = await Users.findOne({id: id});

    if (!user) {
      throw new Error("USERID DOES NOT EXIST");
    }
    const userID = user?.id;
    await Users.update({ id: id }, { username: username });
    return { successful: true, message: "USERNAME UPDATED" };
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Users.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};

export const DELETE_USER_BY_NAME = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
  },
  async resolve(parent: any, args: any) {
    const name = args.name;
    await Users.delete(name);

    return {successful: true, message: "DELETE WORKED"};
  },
};
