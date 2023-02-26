import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IdContext } from './Contexts/Id_context'

function Cart() {
    const [data,setData] = useState({
        hairCut : {},
        beard : {},
        spa : {},
        hairColor : {}
    })
    const [ hair , sethair] = useState({})
    const [ beard , setBeard ] = useState({})
    const [color , setColor] = useState({})
    const [ spa, setSpa] = useState({})
    const  { id, setId } = useContext(IdContext)
    useEffect(()=>{
        
      if(id.hairId!== ''){
          axios.get(`http://localhost:8080/men/haircut/search/${id.hairId}`)
          // .then(res => console.log(res.data[0],"res"))
          .then(res=>{
            
            sethair({...res.data[0]})
          })
      }
    

    if(id.beardId!== ''){
      axios.get(`http://localhost:8080/men/beard/search/${id.beardId}`)
    //   .then(res => console.log(res.data[0],"res"))
      .then(res=>{
        setBeard({...res.data[0]})
      })
  }

  if(id.colorId!== ''){
    axios.get(`http://localhost:8080/men/haircolor/search/${id.colorId}`)
  //   .then(res => console.log(res.data[0],"res"))
    .then(res=>{
      setColor({...res.data[0]})
    })
}

if(id.spaId!== ''){
  axios.get(`http://localhost:8080/men/spa/search/${id.spaId}`)
//   .then(res => console.log(res.data[0],"res"))
  .then(res=>{
    setSpa({...res.data[0]})
  })
}


    },[id])

    
  return (
    <div>
      <div>
        <h1>Cart</h1>
        { Object.keys(hair).length > 0?
       
        <div>
          <h1>{hair.name}</h1>
          <img src={hair.poster} alt="" />
          </div>
    : null }
</div>

<div>
{ Object.keys(beard).length > 0?
       
       <div>
         <h1>{beard.name}</h1>
         <img src={beard.poster} alt="" />
         </div>
   : null }
</div>

<div>
{ Object.keys(color).length > 0?
       
       <div>
         <h1>{color.name}</h1>
         <img src={color.poster} alt="" />
         </div>
   : null }
</div>

<div>
{ Object.keys(spa).length > 0?
       
       <div>
         <h1>{spa.name}</h1>
         </div>
   : null }
</div>



    </div>

  )
}

export default Cart