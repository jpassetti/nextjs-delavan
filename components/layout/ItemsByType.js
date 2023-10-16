import { useState, useEffect, Fragment } from "react";
import { useLazyQuery } from "@apollo/client";
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router'

// queries
import { GET_CREATIVES_SEARCH_RESULTS } from "../queries/search/get-search-results";
import { PER_PAGE_FIRST } from '../utils/pagination';

// components
import Col from "./Col";
import Container from "./Container";
import DisplayPosts from "./DisplayPosts";
import Filters from "./Filters";
import Label from "./Label";
import Select from "./Select";

const ItemsByType = ({
    items,
    categories,
    categoriesWithItems,
    includeFilters = "false",
    includeSearch = "false",
    displayFormats
}) => {
    const router = useRouter()
    const [posts, setPosts] = useState(items);
    //const [filteredPosts, setFilteredPosts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [displayFormat, setDisplayFormat] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryParam, setSearchQueryParam] = useState("");
    const [searchError, setSearchError] = useState("");
    const [queryResultPosts, setQueryResultPosts] = useState({});
    const [showResultInfo, setShowResultInfo] = useState(false);

    useEffect(() => {
        //console.log("use effect for activeCategory");
        const filtered = items.filter(post => {
            if (activeCategory === 'all') {
                return post;
            }
            return post.node.creativeTypes.edges.some(type => type.node.slug === activeCategory);
        });
        //console.log({filtered});
        setPosts(filtered)
    }, [activeCategory]);

    const [fetchPosts, { loading, error, data }] = useLazyQuery(GET_CREATIVES_SEARCH_RESULTS, {
        notifyOnNetworkStatusChange: true,
        onCompleted: (data) => {
            setPosts(data?.creatives.edges ?? {});
            setShowResultInfo(true);
            setActiveCategory('all');
        },
        onError: (error) => {
            console.log({ error });
            setSearchError(error?.graphQLErrors ?? '');
        }
    });

    const handleSearchFormSubmit = async (event) => {
        // console.log("handleSearchFormSubmit");
        event.preventDefault();
        setShowResultInfo(false);

        if (isEmpty(searchQuery)) {
            setSearchError('Please enter text to search');
            setPosts(items);
            return null;
        }

        setSearchError('');

        fetchPosts({
            variables: {
                first: PER_PAGE_FIRST,
                after: null,
                query: searchQuery
            }
        });
    }
    useEffect(() => {
        /**
         * If the query params is set, set the searchQuery in the in
         * 1. Set the search input value to that query.
         * 2. Call fetchPosts to get the results as per the query string from query params.
         */
        if (searchQueryParam) {
            setSearchQuery(searchQueryParam);
            fetchPosts({
                variables: {
                    first: PER_PAGE_FIRST,
                    after: null,
                    query: searchQueryParam
                }
            });
        }

    }, [searchQueryParam]);

    useEffect(() => {
        if (isEmpty(searchQuery)) {
            setPosts(items);
        }
    }, [searchQuery]);

    const categorySelectValues = categories.map(function(category) { 
        const {name, slug} = category.node;
        return {
            label: name,
            value: slug
        }
    });

    const handleSelectChange = (e) => {
        e.preventDefault();
        const href = e.target.value;
        router.push(`/creatives/${href}`);
    }

    return <Fragment>
        {includeFilters &&
            <Filters.Bar>
                <Col xs={12} sm={4}>
                    <Label>Filter by category</Label>
                    <Select
                        //filteredCategories
                        //options={[{label: "All", value: "all"}, ...categorySelectValues]} 
                        options={[{ label: "All", value: "all" }, ...categorySelectValues]}
                        //changeHandler={handleChange} 
                        value={activeCategory}
                        changeHandler={handleSelectChange}
                    />
                </Col>
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
            {filteredCategories.length > 0 && filteredCategories.map((category, index) => {
                const { posts, name, slug, creativeTypeInformation } = category;
                return posts.length > 0 && <DisplayPosts
                    key={index}
                    sectionTitle={name}
                    displayFormat={displayFormat}
                    posts={posts}
                    parentSlug="creatives/details"
                    displayCategory={false}
                    categorySlug={slug}
                    categoryIcon={creativeTypeInformation?.svgIcon}
                />
            })
            }
        </Container>
    </Fragment>
}
export default ItemsByType;
