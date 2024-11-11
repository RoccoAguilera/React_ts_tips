import Plus from "../assets/Plus.svg?react"
import { toCurrency } from "../helpers/formattingTo"
import type { InitialReducer, InitialMenu } from "../type/type-reducer"

const CardMenu = (props: { item: InitialMenu; reducer: InitialReducer }) => {
  const { item, reducer } = props

  return (
    <div className="flex px-4 border rounded-lg hover:bg-gray-50">
      <div className="flex py-3 basis-full">
        <div className="basis-full">
          <h6 className="line-clamp-1 font-medium text-base/none">{item.name}</h6>
          <p className="line-clamp-1 text-sm">{item.description}</p>
        </div>
        <div className="basis-24 pl-4">
          <h6 className="font-medium text-base/none">Price</h6>
          <p className="text-sm">{toCurrency(item.price)}</p>
        </div>
      </div>

      <div className="pl-4 flex items-center border-l border-gray-100">
        <button
          onClick={() => reducer.dispatch({ type: "add-item", payload: item })}
          className="p-1 border rounded-full hover:bg-slate-200 hover:active:bg-slate-300"
          type="button"
        >
          <Plus width={14} height={14} />
        </button>
      </div>
    </div>
  )
}

export default CardMenu