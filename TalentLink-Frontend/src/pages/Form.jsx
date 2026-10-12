import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { toast } from "sonner"
import { ArrowLeft, FileText, Send } from "lucide-react"
import api from "@/api/axios"

const Form = () => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.post("/applications", {
        ...formData,
        jobId: id,
      })

      toast.success("Application submitted successfully!")

      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: "",
        coverLetter: "",
      })
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to submit application."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto">

        <Link
          to={`/jobs/${id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#42403A] mb-6"
        >
          <ArrowLeft size={18} />
          Back to Job Details
        </Link>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

          <div className="bg-[#42403A] text-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <FileText size={30} />

              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Job Application
                </h1>

                <p className="text-gray-200 mt-2">
                  Complete the form to apply for this position.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 space-y-6"
          >
            <input type="hidden" name="jobId" value={id} />

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#42403A] focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#42403A] focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98XXXXXXXX"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#42403A] focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Resume URL
              </label>

              <input
                type="url"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                placeholder="https://drive.google.com/..."
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#42403A] focus:ring-2 focus:ring-gray-200"
              />

              <p className="text-xs text-gray-500 mt-2">
                Paste a shareable link to your resume.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cover Letter
              </label>

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you are a good fit for this role..."
                rows={5}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#42403A] focus:ring-2 focus:ring-gray-200 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#42403A] hover:bg-black disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition"
            >
              <Send size={18} />
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
