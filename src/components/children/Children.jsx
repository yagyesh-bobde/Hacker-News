import React from 'react'
import './children.css'



const Children = ( { item } ) => {

  const time = new Date(item.created_at).toDateString().split(' ')
  
  
  return (
    <div className='children my-2'>
      <header>
        <span>{item.author} on {`${time[0]} ${time[1]} ${time[2]},${time[3]}`} | [-]</span>
      </header>
      <main>
       {item.text}
       <div className='row'>
          {item.chilren?.map(i => {
            return (
              <Children item={i} />
            )
          })}
       </div>
      </main>
    </div>
  )
}
 
export default Children