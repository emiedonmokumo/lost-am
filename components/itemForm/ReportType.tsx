import React from 'react'

const ReportType = ({ setStep }: any) => {
  return (
    <div className='flex space-x-5'>
      <button onClick={()=> setStep((prev: number) => prev + 1)} className='font-bold text-lg text-fuchsia-800 cursor-pointer rounded-xl border border-fuchsia-500 hover:border-fuchsia-600 hover:bg-fuchsia-50 h-60 w-60'>Lost an Item</button>
      <button onClick={()=> setStep((prev: number) => prev + 1)} className='font-bold text-lg text-fuchsia-800 cursor-pointer rounded-xl border border-fuchsia-500 hover:border-fuchsia-600 hover:bg-fuchsia-50 h-60 w-60'>Found an Item</button>
    </div>
  )
}

export default ReportType
