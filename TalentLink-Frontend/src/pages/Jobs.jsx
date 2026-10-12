import { Search } from "lucide-react"
import JobCard from "../components/JobCard"
import { useEffect, useState } from "react"
import api from "@/api/axios"
const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [search,setSearch]=useState("")
  const [loading,setLoading]=useState(true)
  const [error, setError] = useState('')
  useEffect(()=>{
    const fetchJobs=async()=>{
      try{
        const response=await api.get('/jobs')
        console.log(response.data)
        setJobs(response.data.jobs)
      }
     catch (error) {
        setError('Failed to load jobs. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  if (loading) return <p>Loading jobs...</p>

  if (error) return <p>{error}</p>

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center pt-10">
        Find Jobs
      </h1>
<div>
   
      <p className="text-center mt-2">
       Search for jobs that match your skills
      </p>
      </div>
      <div className="flex justify-center">
<input type="text"
value={search}
placeholder="hello"
onChange={(e)=>setSearch(e.target.value)}
className=" relative w-100 rounded-2xl text-center p-3 mt-10 border border-gray-300 shadow-lg"/>
<Search className="absolute left-4 top-3/2" />
</div>
      <h2 className="text-3xl font-bold text-center mt-10">
        Available Jobs
      </h2>

      <JobCard jobs={jobs}  search={search}/>
    </div>
  )
}

export default Jobs
