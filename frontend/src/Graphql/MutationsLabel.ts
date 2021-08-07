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
