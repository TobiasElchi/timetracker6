import { gql } from "@apollo/client";

export const GET_ALL_LABELS = gql`
  query getAllLabels {
    getAllLabels {
      id
      name
      timestampCreated
      timestampUpdated
    }
  }
`;

export const GET_ALL_TASKS = gql`
  query getAllTasks {
    getAllTasks {
      id
      name
      description
      timestampCreated
      timestampUpdated
    }
  }
`;
export const GET_ALL_TRACKINGS_BY_TASKID = gql`
  query getAllTrackingsByTaskID($taskid: String!) {
    getAllTrackingsByTaskID(taskid: $taskid) {
      id
      description
      timestampCreated
      timestampUpdated
      starttime
      endtime
    }
  }
`;

export const GET_ALL_TRACKINGS = gql`
  query getAllTrackings {
    getAllTrackings {
      id
      description
      timestampCreated
      timestampUpdated
      starttime
      endtime
      taskid
    }
  }
`;


