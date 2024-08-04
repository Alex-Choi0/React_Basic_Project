import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./routes/home/home.component"

const App = () => {
  const Navigation = () => {
    return (
      <div>
        <div>
          <h1>I am the navigation bar</h1>
        </div>
        <Outlet />
      </div>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
