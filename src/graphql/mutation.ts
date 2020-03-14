import { gql } from 'apollo-boost';

// Add phone number
export const POST_PHONE_NUMBER = gql`
  mutation submit($projectId: String!, $phoneNumber: String!){
    submit(projectId: $projectId, phoneNumber: $phoneNumber) {
      alreadyExists
    }
  }
`;
