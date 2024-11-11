import Menu from "./component/Menu"
import Order from "./component/Order"
import { useInitialReducer } from "./reducers/main"

function App() {

  const { state, dispatch } = useInitialReducer()

  return (
    <div className="h-screen">
      <header className="h-12 border-b"></header>
      <main
        className="max-w-5xl mx-auto mt-4 px-4 grid grid-cols-5 gap-2 max-md:grid-cols-1 max-md:px-1"
      >
        <Menu reducer={{ state, dispatch }} />
        <Order reducer={{ state, dispatch }} />
      </main>
    </div>
  )
}

export default App
