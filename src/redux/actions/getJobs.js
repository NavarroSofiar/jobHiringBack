import { getAlljobs } from "../slices";
import axios from "axios";

export const getJobs = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/jobs`)
    //axios.get('http://localhost:5000/api/jobs')
        .then(res => dispatch(getAlljobs(res.data)))
        .catch(e => console.log(e))
}



