import React, { Fragment } from 'react';
import '../styles/searchBar.css'

const SearchBar = () => {
    return (
        <Fragment>
<div className="wrap">
  <form className="form-1" action="" autocomplete="on">
  <input className="input-1" id="search" name="search" type="text" placeholder="Buscar"/><input className="input-1" id="search_submit" value="Rechercher" type="submit"/>
  </form>
</div>
  </Fragment>
    )
}
export default SearchBar;