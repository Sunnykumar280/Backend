import React from 'react'
import { useState } from 'react'
import axios from "axios"

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


const App = () => {
  //alway have to create anything inside the app function and need to use useState for creating 
  //it is a dummmy one which storing the 4 object in an array 

  const [notes, setNotes] = useState([{
    title: "test title",
    description: "test description" 
},
{
title: "test title 2", 
description: "test description 2",

},
{
  title: "test title 3", 
  description: "test description 3",

},
{
  title: "test title 4",
  desctiption: "test description 4"
}])
axios.get('http://localhost:3000/notes')
.then((res)=>{
  setNotes(res.data.notes)
})
  return (
  <> 
  <div className = 'notes'>
    {
      notes.map(note => {
        return <div className='note'>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
           </div>
      })
    }

  </div>
  
  </>
  )
}

export default App
