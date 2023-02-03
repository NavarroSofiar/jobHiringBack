import { createSlice } from '@reduxjs/toolkit';

export const state = createSlice({
    name: "state",
    initialState: {
     jobs: [],
     detail:[],
    },
    reducers: {
      getAlljobs:(state,action) => {
        state.jobs= action.payload
      },
      getJobById:(state,action) => {
        state.detail= action.payload
      },
      }
    }
)
export const {getAlljobs, getJobById} = state.actions
export default state.reducer