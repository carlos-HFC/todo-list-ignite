import { Check, Circle, Trash } from "@phosphor-icons/react"
import { PropsWithChildren } from "react"

import { cn } from "../utils/cn"

interface TaskProps extends PropsWithChildren {
  checked?: boolean
  onToggle(): void
  onDelete(): void
}

export function Task(props: Readonly<TaskProps>) {
  return (
    <div
      className={cn(
        "rounded-lg flex gap-3 bg-gray-500 border border-gray-400 p-4 group",
        props.checked && "border-gray-500",
      )}
      onClick={props.onToggle}
    >
      <div className="relative">
        <Circle
          size={24}
          weight={props.checked ? "fill" : undefined}
          className={
            props.checked
              ? "fill-purple-dark group-hover:fill-purple"
              : "fill-blue group-hover:fill-blue-dark"
          }
        />
        <Check
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            !props.checked && "hidden",
          )}
        />
      </div>

      <div
        className={cn(
          "text-gray-100 text-sm flex-1 select-none",
          props.checked && "line-through text-gray-300",
        )}
      >
        {props.children}
      </div>

      <button
        className="hover:bg-gray-400 size-6 min-w-6 rounded flex items-center justify-center border-none group/trash"
        onClick={props.onDelete}
      >
        <Trash
          size={16}
          className="group-hover/trash:fill-red fill-gray-300"
        />
      </button>
    </div>
  )
}
