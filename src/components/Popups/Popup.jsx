import React from 'react'

const Popup = ({isVisible,onClose, children}) => {
    if (!isVisible) return null;

    const handleClose = (e)=>{
        if (e.target.id === 'wrapper') onClose();
    }
  return (
    <>
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-40' onClick={handleClose} id='wrapper'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>X</button>
                <div className='bg-white p-10 rounded-xl'>
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup