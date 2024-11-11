import { useReducer } from "react";
import db from "../data/db";
import type { Action, InitialState } from "../type/type-reducer";

const initialState: InitialState = { menu: db, order: [], tip: "0" }

const reducer = (state: InitialState, action: Action) => {
  const { type } = action

  if (type == "add-item") {
    const isExist = state.order.findIndex(item => item.id === action.payload.id)
    if (isExist < 0) { state = { ...state, order: [...state.order, { ...action.payload, amount: "1" }] } }
  }

  if (type == "add-tip") { state = { ...state, tip: action.payload } }

  if (type == "remove-item-to-order") {
    const filter = state.order.filter(item => item.id !== action.payload)
    if (state.order.length > 1) {
      state = { ...state, order: filter }
    } else {
      state = { ...state, order: [], tip: "0" }
    }
  }

  if (type == "amount-item-to-order") {
    const recover = state.order.map((item) => {
      if (item.id == action.payload.id) {
        let value = parseFloat(item.amount)

        if (action.payload.signal) { value += value < 12 ? 1 : 0 }
        else { value -= value > 1 ? 1 : 0 }

        return { ...item, amount: value.toString() }
      }

      return item
    })

    state = { ...state, order: recover }
  }

  if (type == "clean-order") { state = { ...state, order: [], tip: "0" } }

  return state
}

const useInitialReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return { state, dispatch }
}

export { useInitialReducer }