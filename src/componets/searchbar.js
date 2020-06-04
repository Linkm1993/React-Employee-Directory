import React from 'react'

function SearchBar(props){
    return (
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    )
}

export default SearchBar