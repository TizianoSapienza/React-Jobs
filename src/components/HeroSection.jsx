export default function HeroSection() {
  const Hero = {
    title: "Become an IT Professional",
    description: "Find the IT jobs that fits your skills and needs and elevate your career with our platform",
  }
  return (
    <>
      <section className="bg-sky-600 py-24 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {Hero.title}
            </h1>
            <p className="my-4 text-xl text-white font-semibold">
              {Hero.description}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
