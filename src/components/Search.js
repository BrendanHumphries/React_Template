import React from "react";

function Search({onFormSubmit, searchInput, setSearchInput}) {
    function handleFormChange(event) {
        setSearchInput(event.target.value)
    }
    
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' name='search' value={searchInput} onChange={handleFormChange}></input>
            <input type='submit' value='Search!'></input>
        </form>
    )
}

export default Search;