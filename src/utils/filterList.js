/**
 * 
 * @param {array} list The list to be filtered
 * @param {string} key list item param on the basis of which filtering will happen
 * @param {string} filterText 
 * @return {array} filtered list
 */
const filterList = ({list, key, filterText}) => {
   if (!filterText) {
      return [];
   }
   return list.filter((item) => item[key].toLowerCase().includes(filterText.toLowerCase()))
}

export default filterList


