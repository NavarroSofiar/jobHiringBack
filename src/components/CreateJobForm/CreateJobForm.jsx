import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { postJob } from "../../redux/actions/postJob";
import swal from 'sweetalert';
import './CreateJobForm.modules.css'

function control(input) {
    let error = {}
    if (!input.name) error.name = 'Enter a name'
    if (!input.job_title) error.job_title = 'Enter a title'
    if (!input.experience) error.experience = 'Please complete the necessary experience'
    if (!input.location) error.location = 'Enter a location'
    if (!input.about_us) error.about_us = 'Please complete the about us field'
    if (!input.job_responsabilities) error.job_responsabilities = 'Please complete the responsibilities field'
    if (!input.job_description) error.job_description = 'The description is necessary'
    return error
}


const CreateJobForm = () => {
    
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        job_title: '',
        experience: '',
        location: '',
        about_us: '',
        job_responsabilities: '',
        job_description: '',
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
         })
         setErrors(control({
            ...input,
            [e.target.name]: e.target.value
          }))

    }

    const handleSubmit = e => {
        e.preventDefault()
     if (input.name &&
            input.job_title &&
            input.job_responsabilities &&
            input.job_description &&
            input.experience &&
            input.about_us &&
            input.location) {
            dispatch(postJob(input))
            swal({
                title: 'Job added successfully!',
                icon: "success",
                button: "Ok"
            })
            setInput({
                name: '',
                job_title: '',
                experience: '',
                location: '',
                about_us: '',
                job_responsabilities: '',
                job_description: ''
            })
            navigate('/')
        }
        else {
            swal({
                title: 'Please complete all the fields to continue, accept',
                icon: "info",
                button: "ok"
            })
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className='form-order'>
            <h1>Creation Form</h1>
            <input
                name="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
                value={input.name}
            />
            <input
                name="job_title"
                type="text"
                placeholder="title"
                onChange={handleChange}
                value={input.job_title}
            />
            <input
                name="experience"
                type="text"
                placeholder="experience"
                onChange={handleChange}
                value={input.experience}
            />
            <input
                name="location"
                type="text"
                placeholder="location"
                onChange={handleChange}
                value={input.location}
            />
            <input
                name="about_us"
                type="text"
                placeholder="about_us"
                onChange={handleChange}
                value={input.about_us}
            />
            <input
                name="job_responsabilities"
                type="text"
                placeholder="job_responsabilities"
                onChange={handleChange}
                value={input.job_responsabilities}
            />

            <input
                name="job_description"
                type="text"
                placeholder="description"
                onChange={handleChange}
                value={input.job_description}
            />

            <button>save</button>
        </form>
    )
}


export default CreateJobForm
