/* eslint-disable react/prop-types */
//import { useState, useEffect } from 'react';
import { /*useParams*/ useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function JobPage( { deleteJob } ) {
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (!confirm) {
      return
    } else {
      deleteJob(jobId);
      toast.success('Job deleted successfully!');
      navigate('/jobs');
    }
  }
  // const [job, setJob] = useState(null);
  // const [ loading, setLoading ] = useState(true);

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const response = await fetch(`/api/jobs/${id}`);
  //       const data = await response.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log('Error fetching data', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJob();
  // }, []);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-sky-600 hover:text-sky-500 flex items-center"
          >
            <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="container m-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-8">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-zinc-600 mb-4">{job.type}</div>
                <h1 className="text-4xl font-bold mb-4">
                  {job.title}
                </h1>
                <div className="text-zinc-600 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarkerAlt className="fa-solid fa-location-dot text-xl text-sky-600 mr-2"></FaMapMarkerAlt>
                  <p className="text-sky-600 font-semibold">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-sky-600 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">
                  {job.description}
                </p>

                <h3 className="text-sky-600 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-zinc-600">Company Info</h3>

                <h2 className="text-2xl font-bold">{job.company.name}</h2>

                <p className="my-2">
                  {job.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-sky-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-sky-100 p-2 font-bold">{job.company.contactPhone}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-sky-600 hover:bg-sky-500 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button onClick={() => onDeleteClick(job.id)} className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

//Data loader feature

const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

export { JobPage as default, jobLoader };
