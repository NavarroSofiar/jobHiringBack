import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions/getJobs'
import CardAdmin from './CardAdmin'; 

const Admin = () => {

    const jobs = useSelector((state) => state.state.jobs)
    // console.log(jobs)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobs());
        // console.log(getJobs())
    }, [dispatch])
    return (
        <div >
        {/*     <div className='containerDiv'>
                <h1 className='title'>Admin</h1>
                <Link to="/admin/create-job">
                    <button className='btnReload'>Create Job</button>
                </Link>
            </div> */}
            <div className="home-order">

                {

                    jobs ? jobs.length
                        ? jobs.map(j => (
                            <CardAdmin
                                name={j.name}
                                key={j._id}
                                id={j._id}
                                job_title={j.job_title}
                                experience={j.experience}
                                location={j.location}
                                about_us={j.about_us}
                                job_responsabilities={j.job_responsabilities}
                                job_description={j.job_description}
                                createdAt={j.createdAt}
                                expiration_date={j.expiration_date} />
                               
                        ))
                        : <div>No jobs available</div>
                        : <div>Loading...</div>
                }
            </div>
        </div>
    )
}

export default Admin
