import React from 'react'

const Filter = ({filterData, category, setCategory}) => {


  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {
            filterData.map((data) => {

                return <button key={data.id} onClick={() => filterHandler(data.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
                ${category === data.title ? "bg-opacity-60 border-white"
                                          : "bg-opacity-40 border-transparent"}
                                            transition-all duration-300`}
             
>{data.title}</button>
            
           })
        }
      
    </div>
  )
}

export default Filter




