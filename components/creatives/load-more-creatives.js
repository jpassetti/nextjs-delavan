import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {isEmpty} from 'lodash';

import Creatives from './index';
import { PER_PAGE_FIRST } from '../../utils/pagination';
import { GET_LOAD_MORE_CREATIVES } from '../../queries/creatives/get-load-more-creatives';

const LoadMorePosts = ( { posts, graphQLQuery, searchQuery } ) => {

  /**
   * First set the posts data and pageInfo received from server side,
   * as initial postsData and pageInfo, so that
   * it sever side posts can be fetched, and the new endcursor( contained in pageInfo )
   * can be sent to get the next set of posts.
   */
  const [ postsData, setPostsData ] = useState( posts?.edges ?? [] );
  const [ pageInfo, setPageInfo ] = useState( posts?.pageInfo );

  const [ error, setError ] = useState( null );

  /**
   * If value of 'posts' passed to this component changes, set new post data and page info.
   */
  useEffect( () => {
    setPostsData( posts?.edges );
    setPageInfo( posts?.pageInfo );
  }, [ posts?.edges ] );

  /**
   * Set posts.
   *
   * @param {Object} posts Posts.
   *
   * @return {void}
   */
  const setPosts = ( posts ) => {
    if ( ! posts || ! posts?.edges || ! posts?.pageInfo ) {
      return;
    }

    /**
     * Concat the newly received post from client request to the existing posts, using setPostsData()
     * and also set the new pageInfo that contains the new endcursor, so that
     * when user clicks on loadmore again, next set of posts can be fetched again.
     * Same process if repeated to it gets concatenated everytime to the existing posts array.
     */
    const newPosts = postsData.concat( posts?.edges );
    setPostsData( newPosts );
    setPageInfo( { ...posts?.pageInfo } );
  };

  const [ fetchPosts, { loading } ] = useLazyQuery( graphQLQuery, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ( data ) => {

      /**
       * Call setPosts to concat the new set of posts to existing one and update pageInfo
       * that contains the cursor and the information about whether we have the next page.
       */
      setPosts( data?.posts ?? [] );
    },
    onError: ( error ) => {
      setError( error?.graphQLErrors ?? '' );
    },
  } );

  /**
   * Calls fetchPosts
   *
   * fetchPosts() makes a client side request with the new endcursor info,
   * to get next set of posts.
   *
   * @param {String} endCursor Endcursor used to fetch the next set of posts.
   */
  const loadMoreItems = ( endCursor = null ) => {

    let queryVariables = {
      first: PER_PAGE_FIRST,
      after: endCursor,
    };

    // If its a search query then add the query in the query variables.
    if ( ! isEmpty( searchQuery ) ) {
      queryVariables.query = searchQuery;
    }

    fetchPosts( {
      variables: queryVariables,
    } );
  };

  /**
   * Pull the endcursor and hasNextPage values from pageInfo
   *
   * Please note that pageInfo gets updated with new endCursor and hasNextPage
   * values everytime a new client side request is made using setPageInfo()
   */
  const { endCursor, hasNextPage } = pageInfo || {};

  return (
    <div>
      <Creatives edges={ postsData }/>
      { hasNextPage ? (
        <div>
          { loading ? (
            <p>
              Loading...
            </p>
          ) : (
            <button
              onClick={ () => loadMoreItems( endCursor ) }
            >
              Load more
            </button>
          ) }
        </div>
      ) : null }
      { error && <p>No articles available</p> }
    </div>
  );
};

export default LoadMorePosts;