import { gql } from "apollo-boost";

export const POST_PHONE_NUMBER = gql`
  mutation Post_phone_number($numb: String!) {
    post(numb: $numb) {
      number
    }
  }
`;
