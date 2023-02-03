import axios from "axios"

export const updateJob = (payload) => (dispatch) => {
    axios.put(`http://localhost:5000/api/jobs/${id.id}`, payload)
    .catch(error => console.log(error))
}
