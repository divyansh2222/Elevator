import React from 'react'
const floors = [9,8,7,6,5,4,3,2,1,0]

const Floor = () => {
  return (
    <div>
         <div className=' flex-row flex-wrap gap-1 mt-20'>
            { floors.map((floor, index)=>{
                return(
                    <div key={index} className='mt-2'>
                        <div className=' text-center mt-2 w-20 h-10 bg-blue-500'>
                            {floor}
                        </div>
                    </div>
                )
             })
            }
         </div>
     

    </div>
  )
}

export default Floor

