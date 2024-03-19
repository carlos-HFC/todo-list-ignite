import { PropsWithChildren } from "react"

export function Badge(props: Readonly<PropsWithChildren>) {
  return (
    <div className="bg-gray-400 text-gray-200 font-bold text-xs py-0.5 px-2 rounded-3xl w-max">
      {props.children}
    </div>
  )
}
