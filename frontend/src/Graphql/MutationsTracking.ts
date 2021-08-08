import {gql} from "@apollo/client";

export const CREATE_TRACKING = gql`
  mutation createTracking($description: String! , $taskid: String!) {
    createTracking(description: $description , taskid: $taskid) {
      id
      description
      timestampCreated
      timestampUpdated
    }
  }
`;

export const UPDATE_TRACKING_TIMESPENT = gql`
  mutation updateTrackingTimeSpent(
    $id: ID!
    $timeSpent: String!
  ) {
    updateTrackingTimeSpent(
      id: $id
      timeSpent: $timeSpent
    ) {
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
      id: $id
      description: $description
    ) {
      message
    }
  }
`;


export const UPDATE_TRACKING_STARTTIME = gql`
  mutation updateTrackingStarttime($id: ID!) {
    updateTrackingStarttime(id: $id) {
      message
    }
  }
`;

export const UPDATE_TRACKING_ENDTIME = gql`
  mutation updateTrackingEndtime($id: ID!) {
    updateTrackingEndtime(id: $id) {
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
