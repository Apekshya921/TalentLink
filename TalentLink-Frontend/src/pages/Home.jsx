import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
       <Hero /> 
      <JobCard header1="Featured Jobs" header2="Explore opportunities from top companies" />
     
    </div>
  )
}

export default Home
