import { GET_BUSINESS_DATA, SET_DATA, SET_CHECKED_DATA } from '../constants/ActionTypes'

const initialState = {}

export default function businesses(state = initialState, action) {
  switch (action.type) {
    case GET_BUSINESS_DATA:
      let sectors = {};
      let sectorizedData = {};
      const cleanedData = action.data.map(d => {
        // take out all the other data we don't need
        const cleanedD = {
          name: d['Name'],
          sector: d['Sector'],
          marketCap: d['Market Cap']
        };
        //make a list of sectors for checkboxes
        if (!sectors[d['Sector']]) {
          sectors[d['Sector']] = true;
        }
        //group data by sector clusters
        //the most optimal way to filter out the data by sector is to group them in these clusters
        //however, this would not work with multiple sets of filters
        if (sectorizedData[d['Sector']]) {
          sectorizedData[d['Sector']].push(cleanedD);
        } else {
          sectorizedData[d['Sector']] = [];
          sectorizedData[d['Sector']].push(cleanedD);
        }
        return cleanedD;
      });
      return Object.assign({}, state, {
        data: cleanedData,
        initialData: cleanedData,
        sortedByName: action.sortedByName,
        sortedDirection: action.sortedDirection,
        sectors,
        sectorizedData,
      });
      break;
    case SET_DATA:
      return Object.assign({}, state, {
        data: action.data,
        sortedByName: action.sortedByName,
        sortedDirection: action.sortedDirection,
      });
      break;
    case SET_CHECKED_DATA:
      //there are one of two ways to do this.
      //1. Go through the data (all 504 rows) to check if that sector's checked status is true
      //2. Take the groupings and check if that sector's checked status is true.
      //Option 1 is slower, since we have to run through all of the data individually, however,
      //we do get to keep the sorted order of the array if and only if we're falsifying a checkmark.
      //To truthify a checkmark, we would have to go to the initial data to get it. Thus ruining the sort.
      //Option 2 is faster, but if the user has decided to sort, that gets cleared.
      const newSectors = Object.assign({}, state.sectors);
      newSectors[action.checkedSector] = (state.sectors[action.checkedSector]) ? false : true;
      let newData = [];
      for (var key in newSectors) {
        if (newSectors[key]) {
          newData = newData.concat(state.sectorizedData[key]);
        }
      }
      return Object.assign({}, state, {
        sectors: newSectors,
        data: newData,
        sortedByName: null,
        sortedDirection: null,
      });
      break;
    default:
      return state
  }
}
