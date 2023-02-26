import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IdContext } from './Contexts/Id_context'
function Haircut() {
  const [hairData, setHairData] = useState([]);
  const  { id, setId } = useContext(IdContext)
  useEffect(() => {
    axios
      .get("http://localhost:8080/men/haircut/")
      //   .then(res=> console.log(res.data))
      .then((res) => setHairData(res.data));
      
  }, [id]);

  const handleClick = (e)=>{
    setId( { ...id , hairId: e.target.id})
    
  }
  return (
    <div className="main"  style={{display:'flex',gap:'2rem',flexWrap:'wrap',flexBasis:"200px",margin:'2rem',justifyContent:'center' }} >
      {hairData.length > 0
        ? hairData.map((item) => {
            return (
              <>
               <div key={item._id}  className="haircut-container" style={{maxWidth:'200px'}}>
                <img src={item.poster} style={{width:"10rem"}} alt="" />
                <p> {item.name}</p>
                <p style={{display:'none'}}>{item._id}</p>
                <p>{item.price}</p>
                <button onClick={(e)=>handleClick(e)}  id={item._id}>Add to cart</button>
               </div>
              </>
            );
          })
        : null}
    </div>
  );
}

export default Haircut;
