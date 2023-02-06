import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions/getJobs'
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar';
import './Home.modules.css'

const Home = () => {
  const jobs = useSelector((state) => state.state.jobs)
 // console.log(jobs)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
    // console.log(getJobs())
  }, [dispatch])

  return (
    <div className="home-order">
    
      {

        jobs ? jobs.length
          ? jobs.map(j => (
            <Card
              name={j.name}
              key={j._id}
              id={j._id}
              job_title={j.job_title}
              experience={j.experience}
              location={j.location}
              about_us={j.about_us}
              job_responsabilities={j.job_responsabilities}
              job_description={j.job_description}
              createdAt={j.createdAt} />
          ))
          : <div>No jobs available</div>
          : <div>Loading...</div>
      }




    </div>
  )
}

export default Home
