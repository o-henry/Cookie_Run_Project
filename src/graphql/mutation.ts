import { gql } from 'apollo-boost';

export const POST_PHONE_NUMBER = gql`
  mutation Post_phone_number($phoneNumber: String!, $projectId: String!) {
    post(phoneNumber: $phoneNumber, projectId: $projectId) {
      phoneNumber
      projectId
    }
  }
`;
