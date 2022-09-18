import React from "react";


const Heading = ({variant,text}) =>{
   const variants = {
       "h1":txt=><h1>{txt}</h1>,
       "h2":txt=><h2>{txt}</h2>,
       "h3":txt=><h3>{txt}</h3>,
       "h4":txt=><h4>{txt}</h4>,
       "h5":txt=><h5>{txt}</h5>,
       "h6":txt=><h6>{txt}</h6>
   }

   return variants[variant](text)
}

export default Heading