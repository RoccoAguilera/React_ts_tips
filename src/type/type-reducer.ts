interface AddItem { type: "add-item"; payload: InitialMenu }
interface AddTip { type: "add-tip"; payload: string }
interface RemoveItemToOrder { type: "remove-item-to-order"; payload: string }
interface AmountItemToOrder { type: "amount-item-to-order"; payload: { id: string, signal: boolean } }
interface CleanOrder { type: "clean-order" }

type Action = AddItem | AddTip | RemoveItemToOrder | AmountItemToOrder | CleanOrder

interface InitialMenu { id: string; name: string; price: string; description: string }
interface InitialOrder extends InitialMenu { amount: string }
interface InitialState { menu: InitialMenu[] | []; order: InitialOrder[] | [], tip: string }
interface InitialReducer { state: InitialState, dispatch: React.Dispatch<Action> }

export type { InitialState, InitialReducer, InitialMenu, InitialOrder, Action }