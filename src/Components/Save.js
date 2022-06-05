import React from 'react'

function Submits(props) {
   const{saveData}=props;
  return (
    <div className='submit__container'>
        {saveData.map((v) => {
            return (
              <div className="submit___item" key={v.id}>
                <div className="item__data">
                  <p>Name: {v.name} </p>
                  <p>Department: {v.department} </p>
                  <p>Rating: {v.rating} </p>
                </div>
              </div>
            );
          })}
    </div>
  )
}

export default Submits