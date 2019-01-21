import React from 'react'

const SearchBox = ({value,onChange}) => {
  return (
    <div className="input-group mb-3">
        <input 
        type="text" 
        value= {value}
        onChange={onChange}
        placeholder="Search..." 
        className="form-control" 
        />
    </div>
  )
}

export default SearchBox
