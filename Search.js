 import React, {useState}from 'react'
 import PropTypes from 'prop-types'
 
 const Search = props => {
    const data = [
        "test",
        "american",
        "bar",
        "lilly",
        "apple",
        "phantom",
        "Yao",
        "fortinet",
        "google",
        "dropbox",
        "facebook",
        "airbnb",
        "what",
        "ttttttt",
        "tesla",
        "t",
        "ttt",
        "ttttt",
        "ttttttt",
        "ttttttttt"
      ];
      const [inputSearch, setInputSearch]=useState();
      console.log(inputSearch);
     return (
         <div >
           <input type="text" placeholder="Search.." onChange={e=>{setInputSearch(e.target.value)}} />
           {data.filter((val)=>{
               if(inputSearch==""){
                   return val;
               }else if(val.includes(inputSearch)){
                   return val

               }
           }).map((val, key)=>{
               return <div key={key}><p>{val}</p></div>
           })}
         </div>
     )
 }
 

 
 export default Search
 
 