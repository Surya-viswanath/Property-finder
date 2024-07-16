import React from 'react';
import { IoSearch } from "react-icons/io5";

const Searchinput = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{ alignItems: 'center',textAlign:'center'}}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        style={{ height: '50px', borderRadius: '10px 0px 0px 10px' ,width:'500px',backgroundColor:'transparent',borderColor:'white'}}
      />
      <button type="submit" style={{ height: '50px', borderRadius: '0px 10px 10px 0px',width:'50px', backgroundColor: 'transparent' ,borderColor:'white',color:'white'}}><IoSearch /></button>
    </form>
  );
};
export default Searchinput;