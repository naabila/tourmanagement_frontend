import { Outlet } from "react-router"
import CommonLayout from "./components/layout/commonLayout"



function App() {


  return (
    <>
     <div className="flex flex-col align-center justify-center">
      <h2>Header</h2>
      <CommonLayout><Outlet /></CommonLayout>
      <h2>Footer</h2>
     </div>
    </>
  )
}

export default App
