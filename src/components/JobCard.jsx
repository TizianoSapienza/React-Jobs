/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
export default function JobCard({ job }) {
  const [showDescription, setShowDescription] = useState(false);

  let description = job.description;

  if (!showDescription) {
    description = description.substring(0, 100) + '...';
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-zinc-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>
          <div className="mb-5">
            <p>{description}</p>
            <button
              onClick={() => setShowDescription(prevState => !prevState)}
              className="text-sky-500 hover:underline text-decoration-sky-500"
            >
              {showDescription ? 'Less' : 'More'}
            </button>
          </div>
          <h3 className="text-sky-500 mb-2 hover:underline text-decoration-sky-500">
            {job.salary} / Year
          </h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-sky-600 mb-3 font-semibold">
              <FaMapMarkerAlt className="inline mb-2 mr-1 text-lg"></FaMapMarkerAlt>
              {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
