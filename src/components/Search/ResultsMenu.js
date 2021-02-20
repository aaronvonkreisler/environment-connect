import React, { useState } from 'react';
import { Dropdown, DropdownItem } from 'components/common/Dropdown';
import { FlexRow } from 'components/common/StyledUtils';
import { layers, sunOptions } from 'constants/options';
import ResultItem from './ResultItem';

function ResultsMenu({ userId, results, searchByLayer, searchBySun }) {
   const [layerOpen, setLayerOpen] = useState(false);
   const [sunOpen, setSunOpen] = useState(false);

   const handleDropdownSearch = (params) => {
      const { type, option } = params;
      if (type === 'layer') {
         return searchByLayer(option);
      }
      if (type === 'desiredSun') {
         return searchBySun(option);
      }
   };

   return (
      <div style={{ padding: '8px', width: '100%' }}>
         <FlexRow fullWidth justify="flex-end">
            {/* Layer DropDown */}
            <Dropdown
               open={layerOpen}
               setOpen={setLayerOpen}
               labeledBy="Layer"
               id="layer-dropdown"
               margin="0 8px"
            >
               {layers.map((layer, index) => (
                  <DropdownItem
                     onClick={() =>
                        handleDropdownSearch({
                           type: 'layer',
                           option: layer.label,
                        })
                     }
                     key={layer.label}
                  >
                     {layer.label}
                  </DropdownItem>
               ))}
            </Dropdown>

            {/* Sun DropDown */}
            <Dropdown
               open={sunOpen}
               setOpen={setSunOpen}
               labeledBy="Desired sun"
               id="desired-sun-dropdown"
            >
               {sunOptions.map((option, index) => (
                  <DropdownItem
                     onClick={() =>
                        handleDropdownSearch({
                           type: 'desiredSun',
                           option: option.label,
                        })
                     }
                     key={option.label}
                  >
                     {option.label}
                  </DropdownItem>
               ))}
            </Dropdown>
         </FlexRow>
         <FlexRow fullWidth justify="flex-start">
            {results.map((plant) => (
               <ResultItem plant={plant} key={plant.id} />
            ))}
         </FlexRow>
      </div>
   );
}

export default ResultsMenu;
