import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, TextArea, Select } from './elements'

const Enquiry = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    // push form somewhere
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="name"
          placeholder="Jane Doe"
          width="w-full"
          register={register({ required: true })}
          error={errors.name}
        />
        <Input
          label="email"
          placeholder="janedoe@webmail.com"
          width="w-full"
          register={register({ required: true })}
          error={errors.email}
        />
        <Input
          label="current website"
          placeholder="www.company.com"
          width="w-1/2"
          register={register}
          error={errors.currentWebsite}
        />
        <Select
          label="budget"
          placeholder="Select a budget"
          width="w-1/2"
          items={['£1500', '£2500', '£3500', '£4500+']}
          register={register}
          error={errors.budget}
        />
        <TextArea
          label="message"
          placeholder="Tell me what you're looking for"
          register={register({ required: true })}
          error={errors.message}
        />
      </div>

      <div className="w-full flex justify-center">
        <button className="w-auto h-auto bg-green-400 px-6 py-3 text-lg">
          Submit
        </button>
      </div>
    </form>
  )

  // return (
  // <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
  //     {!submitted ? (
  //       <div className="flex flex-wrap -mx-3 mb-6">
  //         <InputText
  //           label="Name"
  //           placeholder="Jane Doe"
  //           width="w-full"
  //           error={errors.name}
  //           register={register}
  //         />
  //         <InputText
  //           label="Email"
  //           placeholder="janedoe@webmail.com"
  //           width="w-full"
  //           error={errors.email}
  //           register={register}
  //         />
  //         <InputText
  //           label="Current website"
  //           placeholder="www.company.com"
  //           width="w-1/2"
  //           error={errors.currentWebsite}
  //           register={register}
  //         />
  //         {/* <Select
  //           label="Budget"
  //           placeholder="Select a budget"
  //           width="w-1/2"
  //           items={['£1500', '£2500', '£3500', '£4500+']}
  //           register={register}
  //         />
  //         <TextArea
  //           label="Message"
  //           placeholder="Tell me what you're looking for"
  //           register={register}
  //         /> */}
  //         <div className="w-full flex justify-center">
  //           <button className="w-auto h-auto bg-green-400 px-6 py-3 text-lg">
  //             Submit
  //           </button>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="text-white">Form submitted!</div>
  //     )}
  //   </form>
  // )
}

export default Enquiry
