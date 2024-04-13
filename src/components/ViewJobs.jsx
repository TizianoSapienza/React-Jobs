import { Link } from "react-router-dom";
export default function ViewJobs() {
  return (
    <>
    <section className="m-auto max-w-lg my-12 px-10">
        <Link
          to="/jobs"
          className="block bg-zinc-900 text-white text-center py-4 px-6 rounded-xl hover:bg-zinc-700 font-semibold"
        >
          View All Jobs
        </Link>
      </section>
    </>
  )
}
