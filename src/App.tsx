import { PlusCircle } from "@phosphor-icons/react"
import { FormEvent, useState } from "react"

import { Badge } from "./components/badge"
import { Button } from "./components/button"
import { Empty } from "./components/empty"
import { Input } from "./components/input"
import { Task } from "./components/task"

import logo from "./assets/logo.svg"

import "./styles/global.css"

interface List {
  id: string
  task: string
  finishedAt?: Date
}

export function App() {
  const [task, setTask] = useState("")
  const [list, setList] = useState<List[]>([])

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const item = {
      id: String(Date.now()),
      task,
    }

    setList(prev => [...prev, item])
    setTask("")
  }

  function toggleFinishedTask(id: string) {
    setList(prev => {
      return prev.map(item => {
        if (item.id === id) {
          if (item.finishedAt) return { ...item, finishedAt: undefined }

          return { ...item, finishedAt: new Date() }
        }

        return item
      })
    })
  }

  function handleDelete(id: string) {
    setList(prev => prev.filter(item => item.id !== id))
  }

  const totalTasks = list.length
  const finishedTasks = list.filter(item => item.finishedAt).length

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
        <form
          className="flex items-center gap-2"
          onSubmit={handleCreateTask}
        >
          <Input
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <Button type="submit">
            Criar
            <PlusCircle
              size={16}
              weight="bold"
            />
          </Button>
        </form>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm text-blue">Tarefas criadas</p>
              <Badge>{totalTasks}</Badge>
            </div>

            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm text-purple">Concluídas</p>
              <Badge>
                {totalTasks === 0 ? (
                  finishedTasks
                ) : (
                  <>
                    {finishedTasks} de {totalTasks}
                  </>
                )}
              </Badge>
            </div>
          </div>

          {totalTasks === 0 ? (
            <Empty />
          ) : (
            <div className="space-y-3">
              {list.map(item => (
                <Task
                  key={item.id}
                  checked={Boolean(item.finishedAt)}
                  onDelete={() => handleDelete(item.id)}
                  onToggle={() => toggleFinishedTask(item.id)}
                >
                  {item.task}
                </Task>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
