import { ComponentProps } from "react"

interface InputProps extends ComponentProps<"input"> {}

export function Input(props: Readonly<InputProps>) {
  return (
    <input
      {...props}
      className="bg-gray-500 flex-1 border border-gray-700 rounded-lg p-4 text-gray-100 outline-none placeholder:text-gray-300 focus:border-purple-dark"
    />
  )
}
