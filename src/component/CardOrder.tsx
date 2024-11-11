import Chevron from "../assets/Chevron.svg?react"
import Close from "../assets/Close.svg?react"
import { toCurrency, toNumberFloat } from "../helpers/formattingTo"
import type { InitialOrder, InitialReducer } from "../type/type-reducer"

const CardOrder = (props: { item: InitialOrder, reducer: InitialReducer }) => {
  const { dispatch } = props.reducer

  const handlerAmount = (signal: boolean) => {
    dispatch({ type: "amount-item-to-order", payload: { id: props.item.id, signal } })
  }

  const calTotalPrice = () => {
    return toNumberFloat(props.item.price) * toNumberFloat(props.item.amount)
  }

  return (
    <tr className="h-12 even:bg-gray-50 hover:border-y"
    >
      <td className="pl-4 w-full">
        <span className="line-clamp-1"> {props.item.name} </span>
      </td>
      <td className="min-w-24">
        <div className="flex gap-1">
          <button
            type="button"
            className="p-1 rounded-full hover:bg-slate-200 hover:active:bg-slate-300"
            onClick={() => handlerAmount(false)}
          >
            <Chevron width={12} height={12} />
          </button>
          {props.item.amount}
          <button
            type="button"
            className="rotate-180 p-1 rounded-full hover:bg-slate-200 hover:active:bg-slate-300"
            onClick={() => handlerAmount(true)}
          >
            <Chevron width={12} height={12} />
          </button>
        </div>
      </td>
      <td className="min-w-20"> {toCurrency(props.item.price)} </td>
      <td className="min-w-24"> {toCurrency(calTotalPrice())} </td>
      <td className="pr-4">
        <button
          type="button"
          className="p-1 rounded-full hover:bg-slate-200 hover:active:bg-slate-300"
          onClick={() => dispatch({ type: "remove-item-to-order", payload: props.item.id })}
        >
          <Close width={12} height={12} />
        </button>
      </td>
    </tr>
  )
}

export default CardOrder