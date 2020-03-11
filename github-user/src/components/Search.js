import React from 'react';

const Search = (props) => {
    return (
       <form onSubmit={props.handleSubmit}>
           <div>Search Github Users</div>
           <input onChange={props.handleChange} type='text' value={props.name}></input>
           <button type='submit'>Submit</button>
       </form>
    );
};

export default Search;