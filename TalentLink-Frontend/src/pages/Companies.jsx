const companies = [
  {
    id: 1,
    name: "Tech Corp",
    industry: "Information Technology",
    location: "Kathmandu, Nepal",
    jobs: 5,
  },
  {
    id: 2,
    name: "Code Nepal",
    industry: "Software Development",
    location: "Lalitpur, Nepal",
    jobs: 3,
  },
  {
    id: 3,
    name: "Digital Solutions",
    industry: "Digital Services",
    location: "Biratnagar, Nepal",
    jobs: 4,
  },
]

const Companies = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-3">
          Explore Companies
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Discover companies and find your next opportunity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">
                  {company.name.charAt(0)}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {company.name}
              </h2>

              <p className="text-gray-600 mb-2">
                {company.industry}
              </p>

              <p className="text-gray-500 text-sm mb-4">
                📍 {company.location}
              </p>

              <div className="border-t pt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {company.jobs} open jobs
                </span>

                <button className="text-blue-600 font-medium hover:text-blue-800">
                  View Jobs →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
