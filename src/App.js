import { Route, Routes } from "react-router-dom"
import Home from "./routes/home/home.component"

const App = () => {
  const Header = () => {
    return <h1>Header</h1>
  }
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="header" element={<Header />} />
      </Route>
    </Routes>
  )
}

export default App
