import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { MapPin, BriefcaseBusiness, Banknote, Building2, ArrowLeft, CheckCircle2 } from "lucide-react"
import api from "@/api/axios"

const JobDetails = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await api.get(`/jobs/${id}`)
        setJob(response.data.job)
      } catch (error) {
        setError(
          error.response?.data?.message ||
          "Failed to load job details."
        )
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading job details...</p>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {error || "Job not found"}
        </h2>
        <Link
          to="/jobs"
          className="bg-[#42403A] text-white px-6 py-3 rounded-xl hover:bg-black transition"
        >
          Back to Jobs
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#42403A] mb-6 transition"
        >
          <ArrowLeft size={18} />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#42403A] text-white flex items-center justify-center shrink-0">
                  <Building2 size={30} />
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {job.title}
                  </h1>

                  <p className="text-gray-600 mt-2 font-medium">
                    {job.company}
                  </p>

                  <span className="inline-block mt-3 bg-gray-100 text-[#42403A] text-sm font-medium px-3 py-1 rounded-full">
                    {job.jobType}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <MapPin size={20} className="text-[#42403A]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-800">
                      {job.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <Banknote size={20} className="text-[#42403A]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Salary</p>
                    <p className="font-semibold text-gray-800">
                      Rs. {job.salary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <BriefcaseBusiness size={20} className="text-[#42403A]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Job Type</p>
                    <p className="font-semibold text-gray-800">
                      {job.jobType}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About This Job
              </h2>

              <p className="text-gray-600 leading-7 whitespace-pre-line">
                {job.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Why Join Us?
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-[#42403A] shrink-0" />
                  <span>Opportunity to grow your skills</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-[#42403A] shrink-0" />
                  <span>Work with a collaborative team</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-[#42403A] shrink-0" />
                  <span>Build meaningful real-world projects</span>
                </div>
              </div>
            </div>

          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-6">

              <p className="text-sm font-medium text-gray-500">
                Interested in this opportunity?
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                Apply for this job
              </h2>

              <p className="text-gray-600 text-sm mt-3 leading-6">
                Take the next step in your career and apply for this position.
              </p>

              <Link
                to={`/apply/${job._id}`}
                className="block text-center w-full bg-[#42403A] hover:bg-black text-white font-semibold py-3.5 rounded-xl mt-6 transition duration-200"
              >
                Apply Now
              </Link>

              <div className="border-t border-gray-100 mt-6 pt-5">
                <p className="text-sm text-gray-500">Company</p>
                <p className="font-semibold text-gray-800 mt-1">
                  {job.company}
                </p>

                <p className="text-sm text-gray-500 mt-4">Location</p>
                <p className="font-semibold text-gray-800 mt-1">
                  {job.location}
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default JobDetails