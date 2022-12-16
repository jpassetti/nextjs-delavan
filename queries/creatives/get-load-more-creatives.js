import { gql } from '@apollo/client';
import CreativeFragment from "../fragments/creative";

/**
 * Get GET_LOAD_MORE_NEWS
 *
 */
export const GET_LOAD_MORE_CREATIVES = gql`
 query GET_LOAD_MORE_CREATIVES( $first: Int, $after: String ) {
  creatives(first: $first, after: $after) {
    edges {
      node {
        ...CreativeFragment
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
 }
 ${CreativeFragment}
 `