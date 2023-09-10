import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const schema = yup.object().shape({
  name : yup.string().required('Name is Mandatory'),
  address1 : yup.string().required('address is Mandatory'),
  address2 : yup.string().required('address is Mandatory'),
  phoneNum : yup.number('num').integer('Give Only numbers').positive('Give Only numbers').required('phone Num is Mandatory'),
  email : yup.string().email().required('email is Mandatory'),

})


const PopupForm = (props) => {

  const {register,handleSubmit,formState:{errors,isValid,isDirty}} = useForm({
    resolver:yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    console.log(data);
    // Call the parent component's onSubmit function
    if (props.onSubmit) {
      props.onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* <div>
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
    </div> */}
    <label>Enter Your Name:</label>
    <input {...register('name')} placeholder='Name' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"/>
    <p className='text-xs font-medium text-red-600 my-2 text-center'>{errors.name?.message}</p>
    <label>Enter Your Address Line 1:</label>
    <input {...register('address1')} placeholder='Address Line 1' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"/>
    <p className='text-xs font-medium text-red-600 my-2 text-center'>{errors.address1?.message}</p>
    <label>Enter Your Address Line 2:</label>
    <input {...register('address2')} placeholder='Adress line 2' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"/>
    <p className='text-xs font-medium text-red-600 my-2 text-center'>{errors.address2?.message}</p>
    <label>Enter Your Phone Number:</label>
    <input {...register('phoneNum')} placeholder='Phone Number' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"/>
    <p className='text-xs font-medium text-red-600 my-2 text-center'>{errors.phoneNum?.message}</p>
    <label>Enter Your Email:</label>
    <input {...register('email')} placeholder='Email' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"/>
    <p className='text-xs font-medium text-red-600 my-2 text-center'>{errors.email?.message}</p>
    <label>Enter Any Additional Comments:</label>
    <input  placeholder='Additional' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"/>
    <input  type='submit' disabled={isDirty && !isValid} className="mt-4 bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded place-self-end"/>


    </form>
  )
}

export default PopupForm