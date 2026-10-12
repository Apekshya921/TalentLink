import { Link } from "react-router-dom"

const JobCard = (props) => {
  const jobs = props.jobs || []
  const searchText = (props.search || "").trim().toLowerCase()

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title?.toLowerCase().includes(searchText) ||
      job.company?.toLowerCase().includes(searchText) ||
      job.location?.toLowerCase().includes(searchText)
    )
  })

  return (
    <div>
      <div className="text-center py-8">
        <h1 className="text-3xl font-semibold">
          {props.header1}
        </h1>

        <h2>{props.header2}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500 text-3xl mt-10 col-span-full">
            No jobs available!!
          </p>
        ) : (
          filteredJobs.map((job) => (
            <Link
              key={job._id}
              to={`/jobs/${job._id}`}
            >
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-2xl transition cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10"
                  alt="Company Logo"
                  className="w-10 h-10 mb-4 mx-auto"
                />

                <h1 className="text-xl font-bold mb-2">
                  {job.title}
                </h1>

                <p className="text-gray-600 mb-4">
                  {job.company}
                </p>

                <p className="text-gray-700">
                  {job.location}
                </p>

                <p className="text-gray-700">
                  Salary: {job.salary}
                </p>

                <p className="text-gray-700 mt-2">
                  {job.jobType}
                </p>

                <button
                  type="button"
                  className="bg-[#42403A] hover:bg-black text-white font-bold py-2 px-4 rounded mt-5 w-full cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default JobCard
