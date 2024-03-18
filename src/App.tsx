import { PlusCircle } from "@phosphor-icons/react"

import { Button } from "./components/button"
import { Input } from "./components/input"

import logo from "./assets/logo.svg"

import "./styles/global.css"

export function App() {
  return (
    <div className="h-dvh">
      <div className="bg-gray-700 h-52 pt-16 pb-20 flex flex-col">
        <img
          src={logo}
          alt=""
          width={126}
          height={48}
          className="self-center"
        />
      </div>

      <div className="mx-auto max-w-screen-md -mt-6">
        <form className="flex items-center gap-2">
          <Input value="teste" />
          <Button type="button">
            Criar
            <PlusCircle
              size={16}
              weight="bold"
            />
          </Button>
        </form>
      </div>
    </div>
  )
}
