/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import Spinner from './Spinner';

export default function JobsList({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? '/api/jobs?_limit=6'
        : '/api/jobs';
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);
  return (
    <>
      <section className="bg-sky-50 px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-sky-500 mb-8 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
