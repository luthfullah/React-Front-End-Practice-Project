import React from 'react'
import { useState } from 'react';


const Form = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The name you entered was: ${firstname} ${lastname}`);
    setfirstName("");
    setlastName('')
  }
  return (
   
    
      
    <main className="pa4 black-80">
    <form onSubmit={handleSubmit} className="measure center">
      <h1>Form</h1>
      <fieldset id="sign_up" className="ba  ph1 mh1 ">
        
        <div className="mt3">
          <label className="db fw6 lh-copy f3" >name</label>
          <input onChange={(e) => setfirstName(e.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstname"  id="name" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f3" >Password</label>
          <input onChange={(e) => setlastName(e.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastname"  id="name" />
        </div>
      </fieldset>
      <input type='submit' value='submit'/>
    </form>
  </main>
      
    
  
  )
}

export default Form