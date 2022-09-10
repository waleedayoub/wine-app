import React from "react"

const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

type TInput = {
    handleChange: React.FormEventHandler,
    value: string,
    labelText: string,
    labelFor: string,
    id: string,
    name: string,
    type: string,
    isRequired: boolean,
    placeholder: string,
    customClass: string
}
export default function Input(input: TInput){
    return(
        <div className="my-5">
            <label htmlFor={input.labelFor} className="sr-only">
              {input.labelText}
            </label>
            <input
              onChange={input.handleChange}
              value={input.value}
              id={input.id}
              name={input.name}
              type={input.type}
              required={input.isRequired}
              className={fixedInputClass+input.customClass}
              placeholder={input.placeholder}
            />
          </div>
    )
}