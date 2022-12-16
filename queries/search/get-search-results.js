import { gql } from '@apollo/client';
import CreativeFragment from '../fragments/creative';

export const GET_CREATIVES_SEARCH_RESULTS = gql`
query GET_CREATIVES_SEARCH_RESULTS($first: Int, $after: String, $query: String) {
    creatives(first: $first, after: $after, where: {search: $query}) {
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
`;

export const GET_CREATIVES_SEARCH_RESULTS_WITH_TOTAL_PAGES = gql`
query GET_CREATIVES_SEARCH_RESULTS_WITH_TOTAL_PAGES($first: Int, $after: String, $query: String) {
    creatives(first: $first, after: $after, where: {search: $query}) {
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
`;