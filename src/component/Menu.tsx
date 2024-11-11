import CardMenu from "./CardMenu"
import type { InitialReducer } from "../type/type-reducer"

function Menu(props: { reducer: InitialReducer }) {
  const { state, dispatch } = props.reducer

  return (
    <div className="col-span-2 max-md:col-span-3">
      <h1 className="pl-4 text-xl font-bold tracking-tight">Menú</h1>
      <div className="mt-2 space-y-1 overflow-y-auto" style={{ maxHeight: '80vh' }}>
        {
          state.menu.map(item =>
            <CardMenu key={item.id} item={item} reducer={{ state, dispatch }} />
          )
        }
      </div>
    </div>
  )
}

export default Menu