import { useState, useEffect, Fragment } from "react";
import { useLazyQuery } from "@apollo/client";
import { isEmpty } from 'lodash';

// queries
import { GET_CREATIVES_SEARCH_RESULTS } from "../queries/search/get-search-results";
import { PER_PAGE_FIRST } from '../utils/pagination';

import Container from "./Container";
import DisplayPosts from "./DisplayPosts";
import Filters from "./Filters";
import Grid from "./Grid";
import Heading from './Heading';
import List from "./List";
import Paragraph from "./Paragraph";

const ItemsByType = ({ 
    items, 
    categories, 
    includeFilters="false", 
    includeSearch="false", 
    displayFormats 
}) => {
    const [posts, setPosts] = useState(items);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [displayFormat, setDisplayFormat] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryParam, setSearchQueryParam] = useState("");
    const [searchError, setSearchError] = useState("");
    const [queryResultPosts, setQueryResultPosts] = useState({});
    const [showResultInfo, setShowResultInfo] = useState(false);

    useEffect( () => {
        console.log("use effect for activeCategory");
        const filtered = items.filter(post => {
            if (activeCategory === 'all') {
                return post;
            }
            return post.node.creativeTypes.edges.some(type => type.node.slug === activeCategory);
        });
        console.log({filtered});
        setPosts(filtered)
    }, [ activeCategory ] );

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
       // console.log("handleSearchFormSubmit");
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

    useEffect( () => {
       //console.log("use effect categoriesWithPosts");
        const categoriesWithPosts = categories.map((category) => {
            const { name, slug } = category.node;
            const matchingPosts = posts.filter((post) => {
                const { creativeTypes } = post.node;
                //console.log({creativeTypes});
                return creativeTypes.edges.some((edge) => edge.node.slug === slug);
            });
            const alphabetizedPosts = matchingPosts.sort((a, b) => {
                const getTitle = (item) => {
                    const {title, creativeInformation } = item.node;
                    if (creativeInformation.name.lastName) {
                        return creativeInformation.name.lastName.toLowerCase();
                    }
                    if (creativeInformation.name.businessName) {
                        return creativeInformation.name.businessName.toLowerCase();
                    }
                    return title.toLowerCase();
                };
                const aTitle = getTitle(a);
                const bTitle = getTitle(b);
                if (aTitle < bTitle) {
                    return -1;
                }
                if (aTitle > bTitle) {
                    return 1;
                }
                return 0;
            });
            return {
                name,
                slug,
                posts: matchingPosts,
            };
        }); 
        setFilteredCategories(categoriesWithPosts);
    }, [posts]);

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
            {filteredCategories && filteredCategories.map((category, index) => {
                const { posts, name, slug } = category;
                console.log({posts});
                return posts.length > 0 && <DisplayPosts 
                        key={index}
                        sectionTitle={name}
                        displayFormat={displayFormat}
                        posts={posts}
                        parentSlug="creatives"
                        displayCategory={false}
                        categorySlug={slug}
                 />
            })}
        </Container>
    </Fragment>
}
export default ItemsByType






