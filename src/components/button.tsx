import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      className="bg-blue-dark hover:bg-blue border-none text-gray-100 text-sm flex justify-center items-center gap-2 p-4 rounded-lg font-bold"
    />
  )
}
