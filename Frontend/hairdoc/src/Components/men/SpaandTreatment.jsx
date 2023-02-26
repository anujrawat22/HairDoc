import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IdContext } from './Contexts/Id_context'
function SpaandTreatment() {
  const [spaData, setspaData] = useState([]);
  const [spaId,setspaId]= useState({
    id:''
  })
  const  { id, setId } = useContext(IdContext)
  useEffect(() => {
    axios
      .get("http://localhost:8080/men/spa/")
      //   .then(res=> console.log(res.data))
      .then((res) => setspaData(res.data));
      
  }, [id]);

  const handleClick = (e)=>{
    setId( { ...id , spaId: e.target.id})
    
  }
  return (
    <div className="main"  style={{display:'flex',gap:'2rem',flexWrap:'wrap',flexBasis:"200px",margin:'2rem',justifyContent:'center' }} >
      {spaData.length > 0
        ? spaData.map((item) => {
            return (
              <>
               <div key={item._id}  className="haircolor-container" style={{maxWidth:'200px'}}>
               
                <p> {item.name}</p>
                <p style={{display:'none'}}>{item._id}</p>
                <p>Member Price : {item.memberprice}</p>
                <p>Non Member Price : {item.nonmemberprice}</p>
                <button onClick={(e)=>handleClick(e)}  id={item._id}>Add to cart</button>
               </div>
              </>
            );
          })
        : null}
    </div>
  );
}

export default SpaandTreatment;
