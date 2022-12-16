import { gql } from '@apollo/client';
import CreativeFragment from "../fragments/creative";

export const GET_ALL_CREATIVES = gql`
query NewQuery {
    creatives {
      edges {
        node {
          ...CreativeFragment
        }
      }
    }
  }
  ${CreativeFragment}
`