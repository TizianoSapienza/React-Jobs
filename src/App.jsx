import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


export default function App() {

  //Add new job
  const addJob = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return; 
  };

  //Delete job
  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  //Update job
  const updateJob = async (updatedJob) => {
    const response = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedJob),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSumbit={addJob}/>} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSumbit={updateJob}/>} loader={jobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
}
