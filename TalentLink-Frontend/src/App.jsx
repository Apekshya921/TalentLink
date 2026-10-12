import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import JobDetails from "./pages/JobDetails"
import Form from "./pages/Form"

import { Toaster } from "sonner"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import Companies from "./pages/Companies"
import PostJob from "./pages/PostJob"
import MyApplications from "./pages/MyApplication"

const App = () => {
  return (
  <div>
          <Toaster position="top-right" richColors />

    <Routes>
<Route path='/'element={<Home />} />
<Route path='/jobs'element={<Jobs />}/>
<Route path="/jobs/:id" element={<JobDetails />} />
<Route path="/apply/:id" element={<Form />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register/>} />
<Route path="/companies" element={<Companies/>} />
<Route path="/Aboutjob" element={<PostJob/>} />
<Route path="/applications" element={<MyApplications/>} />

    </Routes>
    </div>
  )
}

export default App
