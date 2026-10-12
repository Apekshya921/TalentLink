
const applications = [
  {
    id: 1,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhtCHWrNb2M7tAlOyQV4EFSTLSNBoyv7XR5pvLhEScg&s=10",
    title: "Frontend Developer",
    company: "Code Nepal",
    location: "Kathmandu, Nepal",
    date: "Oct 8, 2026",
    status: "Pending",
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhtCHWrNb2M7tAlOyQV4EFSTLSNBoyv7XR5pvLhEScg&s=10",
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Lalitpur, Nepal",
    date: "Oct 5, 2026",
    status: "Interview",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhtCHWrNb2M7tAlOyQV4EFSTLSNBoyv7XR5pvLhEScg&s=10",
    title: "Backend Developer",
    company: "Digital Solutions",
    location: "Biratnagar, Nepal",
    date: "Oct 3, 2026",
    status: "Rejected",
  },
]

const MyApplications = () => {
  const totalApplications = applications.length

  const pendingApplications = applications.filter(
    (application) => application.status === "Pending"
  ).length

  const interviewApplications = applications.filter(
    (application) => application.status === "Interview"
  ).length

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700"

      case "Interview":
        return "bg-blue-100 text-blue-700"

      case "Rejected":
        return "bg-red-100 text-red-700"

      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Applications
          </h1>

          <p className="text-gray-500 mt-2">
            Track your job applications in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm text-gray-500">
              Total Applications
            </p>
            <h2 className="text-3xl font-bold mt-2">
              {totalApplications}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm text-gray-500">
              Pending
            </p>
            <h2 className="text-3xl font-bold text-yellow-600 mt-2">
              {pendingApplications}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm text-gray-500">
              Interviews
            </p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {interviewApplications}
            </h2>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-5">
          Recent Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((application) => (
            <div
              key={application.id}
              className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={application.logo}
                  alt={`${application.company} logo`}
                  className="w-12 h-12 rounded-lg border p-1 object-contain shrink-0"
                />

                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">
                    {application.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {application.company}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm text-gray-500">
                <p> {application.location}</p>
                <p>Applied on {application.date}</p>
              </div>

              <div className="border-t mt-5 pt-4 flex items-center justify-between gap-2">
                <span className="text-sm text-gray-500">
                  Application Status
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyApplications
