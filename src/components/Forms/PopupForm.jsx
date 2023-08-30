import React from 'react'

const PopupForm = ({formName,formTitle,typeOfForm}) => {
  return (
    <>
        <label htmlFor={formName} className="block text-sm font-medium leading-6 text-gray-900">
                {formTitle}
              </label>
              <div className="mt-2">
                <input
                  id={formName}
                  name={formName}
                  type={typeOfForm}
                  autoComplete={formName}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
    </>
  )
}

export default PopupForm