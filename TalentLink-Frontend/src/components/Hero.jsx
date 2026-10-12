const Hero = () => {
  return (
    <section className="mt-20 text-center">
      <h1 className="text-5xl font-bold">
        Find a job that fits your future
      </h1>

      <p className="mt-5 text-lg text-gray-600">
        Discover opportunities from companies hiring talented professionals.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <input
          type="text"
          placeholder="Job title or skill"
          className="w-80 border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-60 border rounded-lg px-4 py-3"
        />

        <button className="px-6 py-3 rounded-lg bg-black text-white">
          Search Jobs
        </button>
      </div>
    </section>
  )
}

export default Hero
