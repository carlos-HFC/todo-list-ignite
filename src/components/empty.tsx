import clipboard from "../assets/clipboard.png"

export function Empty() {
  return (
    <div className="flex flex-col p-16 gap-4 items-center justify-center border-t border-gray-400 rounded-lg">
      <img
        src={clipboard}
        alt=""
        width={56}
        height={56}
      />

      <div className="text-center">
        <p className="text-base text-gray-300 font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-base text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}
