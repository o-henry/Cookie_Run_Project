import { gql } from 'apollo-boost';

export const POST_PHONE_NUMBER = gql`
  mutation submit($projectId: String!, $phoneNumber: String!){
    submit(projectId: $projectId, phoneNumber: $phoneNumber) {
      alreadyExists
    }
  }
`;
