
import React, { useState } from 'react'


const Controlled = () => {

const [FormData, setFormData] = useState({
    task:"",
    description:"",
});

const handleChange = (field,e) => {
    setFormData((formData)=>{
        return{
            ...formData,
            [field]:e.target.value,
        };
    });
};                

  return (
            <>
               <form action="">
                  <input type="text" placeholder="task" value={FormData.task} onChange={(e)=>handleChange("task",e)}/>
                  <br />
                  <br />
                  <input type="text" placeholder="description" value={FormData.description} onChange={(e)=>handleChange("description",e)}/>
               </form>
            </>
  )
}

export default Controlled;