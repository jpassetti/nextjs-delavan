import '../sass/global.scss';

import { useState } from 'react';

import { 
	AllCreativesContext,
	FilteredCreativesContext,
	ActiveCreativesContext,
	AllCreativeTypesContext,  
	FilteredCreativeTypesContext,
	ActiveCreativeTypesContext,
	AllTagsContext,
	FilteredTagsContext,
	ActiveTagsContext,
	AllCategoriesContext,
	FilteredCategoriesContext,
	ActiveCategoriesContext
} from '../lib/context';

function MyApp( { Component, pageProps } ) {
	// creatives
	const [allCreativesState, setAllCreativesState] = useState([]);
	const [filteredCreativesState, setFilteredCreativesState] = useState([]);
	const [activeCreativesState, setActiveCreativesState] = useState([]);

	// creative types taxonomy state
	const [allCreativeTypesState, setAllCreativeTypesState] = useState([]);
	const [filteredCreativeTypesState, setFilteredCreativeTypesState] = useState([]);
	const [activeCreativeTypesState, setActiveCreativeTypesState] = useState([{
		node: {
			name: "All", slug: "all"
		}
	}]);

	// tags taxonomy
	const [allTagsState, setAllTagsState] = useState([]);
	const [filteredTagsState, setFilteredTagsState] = useState([]);
	const [activeTagsState, setActiveTagsState] = useState([]);

	// categories taxonomy
	const [allCategoriesState, setAllCategoriesState] = useState([]);
	const [filteredCategoriesState, setFilteredCategoriesState] = useState([]);
	const [activeCategoriesState, setActiveCategoriesState] = useState([]);
    
	return <AllCreativesContext.Provider value={[allCreativesState, setAllCreativesState]}>
		<FilteredCreativesContext.Provider value={[filteredCreativesState, setFilteredCreativesState]}>
			<ActiveCreativesContext.Provider value={[activeCreativesState, setActiveCreativesState]}>
	<AllCreativeTypesContext.Provider value={[allCreativeTypesState, setAllCreativeTypesState]}>
		<FilteredCreativeTypesContext.Provider value={[filteredCreativeTypesState, setFilteredCreativeTypesState]}>
			<ActiveCreativeTypesContext.Provider value={[activeCreativeTypesState, setActiveCreativeTypesState]}>
				<AllTagsContext.Provider value={[allTagsState, setAllTagsState]}>
					<FilteredTagsContext.Provider value={[filteredTagsState, setFilteredTagsState]}>
						<ActiveTagsContext.Provider value={[activeTagsState, setActiveTagsState]}>
							<AllCategoriesContext.Provider value={[allCategoriesState, setAllCategoriesState]}>
								<FilteredCategoriesContext.Provider value={[filteredCategoriesState, setFilteredCategoriesState]}>
									<ActiveCategoriesContext.Provider value={[activeCategoriesState, setActiveCategoriesState]}>
										<Component {...pageProps} />
									</ActiveCategoriesContext.Provider>
								</FilteredCategoriesContext.Provider>
							</AllCategoriesContext.Provider>
						</ActiveTagsContext.Provider>
					</FilteredTagsContext.Provider>
				</AllTagsContext.Provider>
			</ActiveCreativeTypesContext.Provider>
		</FilteredCreativeTypesContext.Provider>
  </AllCreativeTypesContext.Provider>
			</ActiveCreativesContext.Provider>
		</FilteredCreativesContext.Provider>
  </AllCreativesContext.Provider>
}

export default MyApp;