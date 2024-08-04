import { Route, Routes } from "react-router-dom"
import Home from "./routes/home/home.component"
import NavigationComponent from "./routes/navigation/navigation.component"

const App = () => {
  const Shop = () => {
    return <h1>This is a shop</h1>
  }
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
