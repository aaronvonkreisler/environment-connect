import React, { useState, useEffect, useReducer, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarContainer, Searchbar, Input, Icon } from './style';
import { Menu } from 'components/common/Menu';
import ResultsMenu from './ResultsMenu';
import Progressbar from 'components/common/Progressbar';
import useAuth from 'hooks/useAuth';
import searchReducer from 'reducers/searchReducer';
import PlantContext from 'context/plants/plantContext';
import { searchByDesiredSun, searchPlantByLayer } from 'firebaseConfig/queries';
import { searchByLayer, searchBySun } from 'reducers/searchReducerActions';

const initialState = {
   fetching: false,
   error: null,
   results: [],
   menuOpen: false,
};

function Search() {
   const { id } = useAuth();
   const [textValue, setTextValue] = useState('');
   const [state, dispatch] = useReducer(searchReducer, initialState);
   const { plants } = useContext(PlantContext);

   const searchByQuery = (query) => {
      const searchResults = plants.filter((plant) =>
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
                  onClose={() => dispatch({ type: 'CLOSE_MENU' })}
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
                     userId={id}
                     results={state.results}
                     searchByLayer={queryByLayer}
                     searchBySun={queryBySun}
                  />
               </Menu>
            </Searchbar>
         </div>
      </SearchBarContainer>
   );
}

export default Search;
