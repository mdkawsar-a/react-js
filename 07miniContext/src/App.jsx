import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'



function App() {

  return (
    <UserContextProvider>
    <h1>React context</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
