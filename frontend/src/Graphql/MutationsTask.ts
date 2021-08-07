import {gql} from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($name: String!, $description: String!) {
    createTask(name: $name, description: $description) {
    description
    name
    }
  }
`;

export const UPDATE_TASK_DESCRIPTION = gql`
  mutation updateTaskDescription(
    $id: ID!
    $description: String!
  ) {
    updateTaskDescription(
      id: id
      description: $description
    ) {
      message
    }
  }
`;


export const UPDATE_TASKNAME = gql`
  mutation updateTaskName(
    $id: ID!
    $name: String!
  ) {
    updateTaskName(
      id: id
      name: $name
    ) {
      message
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      message
    }
  }
`;
