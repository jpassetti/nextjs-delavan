
            <ResultInfo showResultInfo={showResultInfo} />
            <ErrorMessage text={searchError} />
            <Loading showSpinner visible={loading} />
            <LoadMorePosts
                posts={queryResultPosts}
                graphQLQuery={GET_CREATIVES_SEARCH_RESULTS}
                searchQuery={searchQuery}
            />
       