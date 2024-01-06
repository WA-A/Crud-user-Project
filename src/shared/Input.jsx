import React from 'react'

function Input( {id,title,type,name,handlData,customClasses}) {
    
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
      <input type={type} name={name} className={`form-control ${customClasses}`} 
    id={id}  onChange={handlData}  />
     {errors[name]&& <p className='text-danger'>{errors[name]} </p>}
     
     
     {/* let user {
        name:  --> name is key 
     } 
     && if there is value 
     
     */}
     
</div>
  )
}

export default Input