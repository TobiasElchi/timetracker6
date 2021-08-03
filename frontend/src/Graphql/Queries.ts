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
