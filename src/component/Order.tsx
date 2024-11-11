import { useMemo } from "react"
import { toCurrency } from "../helpers/formattingTo"
import CardOrder from "./CardOrder"
import Trash from "../assets/Trash.svg?react"

import type { InitialReducer } from "../type/type-reducer"

function Order(props: { reducer: InitialReducer }) {
  const { state, dispatch } = props.reducer

  const subTotal = useMemo(() => state.order.reduce((prev, current) => {
    const price = parseFloat(current.price)
    const amount = parseFloat(current.amount)
    return prev + (price * amount)
  }, 0), [state.order, state.tip])

  const getTip = useMemo(() => {
    return subTotal * parseFloat(state.tip)
  }, [state.order, state.tip])

  const total = useMemo(() => {
    return subTotal + getTip
  }, [state.order, state.tip])

  return (
    <div className="col-span-3">
      <h1 className="pl-4 text-xl font-bold tracking-tight">Ordenes</h1>
      <div className="mt-2 border rounded-lg overflow-y-auto" style={{ maxHeight: '80vh' }}>
        {state.order.length > 0 ?
          <table className="relative w-full">

            <thead className="h-12 border-b">
              <tr className="font-medium tracking-tight">
                <td className="pl-4" colSpan={2}>Nombre</td>
                <td>*/ud.</td>
                <td colSpan={2}>*/cant.</td>
              </tr>
            </thead>

            <tbody className="text-sm">
              {state.order.map(item => <CardOrder key={item.id} item={item} reducer={{ state, dispatch }} />)}
            </tbody>

            <tfoot className="sticky bottom-0 outline outline-1 outline-gray-100 bg-white text-sm">
              <tr className="h-10 font-medium">
                <td className="pl-4" colSpan={3}>Sub total</td>
                <td colSpan={2}>{toCurrency(subTotal)}</td>
              </tr>
              <tr className="h-10 font-medium">
                <td className="pl-4" colSpan={3}>
                  <span className="mr-2">Propina</span>
                  <select
                    onChange={event => dispatch({ type: "add-tip", payload: event.target.value })}
                    className="font-normal border rounded-md px-1"
                    name="tip"
                    id="tip"
                    value={state.tip}
                  >
                    <option value="0">Ninguno</option>
                    <option value="0.02">2%</option>
                    <option value="0.05">5%</option>
                    <option value="0.1">10%</option>
                  </select>
                </td>
                <td colSpan={2}>{toCurrency(getTip)}</td>
              </tr>
              <tr className="h-10 font-medium">
                <td className="pl-4" colSpan={3}>Total</td>
                <td>{toCurrency(total)}</td>
                <td className="pr-4">
                  <button
                    onClick={() => dispatch({ type: "clean-order" })}
                    className="p-1 rounded-full hover:bg-slate-200 hover:active:bg-slate-300" type="button" >
                    <Trash width={16} height={16} />
                  </button>
                </td>
              </tr>
            </tfoot>

          </table>
          :
          <div className="p-4 text-center">No hay ordenes añadidas.</div>
        }
      </div>
    </div>
  )
}

export default Order