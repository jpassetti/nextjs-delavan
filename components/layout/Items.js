import { useState, useEffect, Fragment } from "react";
import { useLazyQuery } from "@apollo/client";
import { isEmpty } from 'lodash';

// queries
import { GET_CREATIVES_SEARCH_RESULTS } from "../../queries/search/get-search-results";
import { PER_PAGE_FIRST } from '../../utils/pagination';

import Container from "./Container";
import Filters from "./Filters";
import Grid from "./Grid";
import List from "./List";

const Items = ({ 
    items, 
    categories, 
    includeFilters="false", 
    includeSearch="false", 
    displayFormats 
}) => {
    const [posts, setPosts] = useState(items);
    const [activeCategory, setActiveCategory] = useState('all');
    const [displayFormat, setDisplayFormat] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryParam, setSearchQueryParam] = useState("");
    const [searchError, setSearchError] = useState("");
    const [queryResultPosts, setQueryResultPosts] = useState({});
    const [showResultInfo, setShowResultInfo] = useState(false);

    const filteredItems = posts.filter(item => {
        if (activeCategory === 'all') {
            return item;
        }
        const {creativeTypes} = item.node;
        const matches = creativeTypes.edges.filter(creativeType => {
            if(creativeType.node.name.toLowerCase() === activeCategory) {
                return true;
            }
        });
        if (matches.length > 0) {
            return item;
        }       
    });

    const [ fetchPosts, { loading, error, data } ] = useLazyQuery(GET_CREATIVES_SEARCH_RESULTS, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ( data ) => {
          setPosts( data?.creatives.edges ?? {} );
          setShowResultInfo( true );
          setActiveCategory( 'all' );
        },
        onError: ( error ) => {
            console.log({error});
          setSearchError( error?.graphQLErrors ?? '' );
        }
      } );
    
    const handleSearchFormSubmit = async( event ) => {
        event.preventDefault();
        setShowResultInfo( false );
    
        if ( isEmpty( searchQuery ) ) {
          setSearchError( 'Please enter text to search' );
          setPosts(items);
          return null;
        }
    
        setSearchError( '' );
    
        fetchPosts( {
          variables: {
            first: PER_PAGE_FIRST,
            after: null,
            query: searchQuery
          }
        } );
    }
    useEffect( () => {
        /**
         * If the query params is set, set the searchQuery in the in
         * 1. Set the search input value to that query.
         * 2. Call fetchPosts to get the results as per the query string from query params.
         */
        if ( searchQueryParam ) {
          setSearchQuery( searchQueryParam );
          fetchPosts( {
            variables: {
              first: PER_PAGE_FIRST,
              after: null,
              query: searchQueryParam
            }
          } );
        }
    
    }, [ searchQueryParam ] );
  
    useEffect( () => {
        if ( isEmpty( searchQuery ) ) {
            setPosts(items);
        }
    }, [ searchQuery ] );


    return <Fragment>
        {includeFilters && <Filters.Bar>
            <Filters.ByCategories 
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            {includeSearch && 
                <Filters.BySearch 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearchFormSubmit={handleSearchFormSubmit}
                />
            }
            {displayFormats && 
                <Filters.ByDisplayFormat 
                    displayFormat={displayFormat}
                    setDisplayFormat={setDisplayFormat}
                />
            }
        </Filters.Bar>
        }
        <Container>
        {displayFormat === 'grid' ? 
            <Grid data={filteredItems} parentSlug="creatives" />
        : displayFormat === 'list' ?
            <List data={filteredItems} parentSlug="creatives" />
        : 'No format'
        }
        </Container>
    </Fragment>
}
export default Items






