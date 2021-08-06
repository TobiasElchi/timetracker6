import {gql} from "@apollo/client";

//TODO: Prüfen ob Name vergeben->im backend
export const CREATE_LABEL = gql`
  mutation createLabel($name: String!) {
    createLabel(name: $name) {
      id
      name
      timestampCreated
      timestampUpdated
    }
  }
`;

export const UPDATE_LABELNAME = gql`
  mutation updateLabelName(
    $id: ID!
    $name: String!
  ) {
    updateLabelName(
      id: id
      name: $name
    ) {
      message
    }
  }
`;

export const DELETE_LABEL = gql`
  mutation deleteLabel($id: ID!) {
    deleteLabel(id: $id) {
      message
    }
  }
`;

//TODO: Prüfen ob Name vergeben->im backend
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

export const UPDATE_TRACKING_DESCRIPTION = gql`
  mutation updateTrackingDescription(
    $id: ID!
    $description: String!
  ) {
    updateTrackingDescription(
      id: id
      description: $description
    ) {
      message
    }
  }
`;

export const DELETE_TRACKING = gql`
  mutation deleteTracking($id: ID!) {
    deleteTracking(id: $id) {
      message
    }
  }
`;
