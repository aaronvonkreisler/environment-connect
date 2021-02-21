import React, { useState, useReducer, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarContainer, Searchbar, Input, Icon } from './style';
import { Menu } from 'components/common/Menu';
import ResultsMenu from './ResultsMenu';
import Progressbar from 'components/common/Progressbar';
import useAuth from 'hooks/useAuth';
import searchReducer from 'reducers/searchReducer';
import PlantContext from 'context/plants/plantContext';
import { searchByLayer, searchBySun } from 'reducers/searchReducerActions';

const initialState = {
   fetching: false,
   error: null,
   results: [],
   menuOpen: false,
};

function Search() {
   const { id, isAuthenticated } = useAuth();
   const [textValue, setTextValue] = useState('');
   const [state, dispatch] = useReducer(searchReducer, initialState);
   const { plants, fetching, fetchPlants } = useContext(PlantContext);

   // If plants are null it would suggest that the page has been refreshed and
   // trying to filter through a null value will cause an error. If there aren't any plants in
   // the context reload them
   useEffect(() => {
      if (!plants && !fetching && isAuthenticated) {
         fetchPlants();
      }
   }, [plants, fetching, isAuthenticated, fetchPlants]);

   const searchByQuery = (query) => {
      const searchResults = plants?.filter((plant) =>
         plant.plantName.toLowerCase().includes(query.toLowerCase())
      );
      dispatch({
         type: 'FETCH_SUCCESS',
         payload: searchResults,
      });
   };

   const queryByLayer = (layer) => {
      searchByLayer(layer, id, dispatch);
   };

   const queryBySun = (sun) => {
      searchBySun(sun, id, dispatch);
   };

   const closeMenu = () => {
      dispatch({ type: 'CLOSE_MENU' });
   };

   return (
      <SearchBarContainer>
         <div>
            <Icon>
               <FiSearch />
            </Icon>
            <Searchbar>
               <Input
                  type="text"
                  placeholder="Search..."
                  onClick={() => dispatch({ type: 'OPEN_MENU' })}
                  value={textValue}
                  onChange={(e) => {
                     setTextValue(e.target.value);
                     searchByQuery(e.target.value);
                  }}
               />
               <Menu
                  open={state.menuOpen}
                  id="search-results"
                  onClose={closeMenu}
                  style={{
                     top: '101%',
                     left: '0',
                     width: '100%',
                     minHeight: '100px',
                     padding: '0',
                  }}
               >
                  {state.fetching && <Progressbar />}
                  <ResultsMenu
                     results={state.results}
                     searchByLayer={queryByLayer}
                     searchBySun={queryBySun}
                     closeMenu={closeMenu}
                  />
               </Menu>
            </Searchbar>
         </div>
      </SearchBarContainer>
   );
}

export default Search;
