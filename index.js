const autoCompleteConfig = {
    renderOption(itemResult) {
        const imgSrc = itemResult.imgSrc === 'N/A' ? '' : itemResult.imgSrc; /* img to bi displayed with the result */
        return `
        <img src="${imgSrc}" />
        // ${itemResult.someInfo} (${itemResult.someInfo})
        `; /* results to be displayed in handle */
    },
    inputValue(SearchResult) {
        return Searchresult.wantedresult; /*we choose from the object given by APIwhat we want to forward to input field */
    },
    async fetchData(searchTerm) {
        const response = await axios.get(/*API adress*/, {
            params: {
                apikey: /*''*/,
                s: searchTerm
            }
        });
    
        if (response.data.Error) {
            return [];
        }
        return response.data.Search;
    }
};

createAutocomplete({
    ...autoCompleteConfig,
    root: document.querySelector('div'), /*__1__Here you choose a DOM element upon which a search handle will be added */ 
});