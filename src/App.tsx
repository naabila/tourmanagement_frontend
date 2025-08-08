import { Outlet } from "react-router"
import CommonLayout from "./components/layout/commonLayout"
import Navbar from "./components/layout/Navbar"



function App() {


  return (
    <>
     <div className="flex flex-col align-center justify-center">
      <Navbar />
      <CommonLayout><Outlet /></CommonLayout>
      <h2>Footer</h2>
     </div>
    </>
  )
}

export default App
