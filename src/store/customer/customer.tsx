import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await fetch('user/fetch'+userId)
    // return response.data
  },
)


export interface CustomerState {
    customer: []
  }


  const initialState: CustomerState = {
    customer: [],
  }

  export const customerSlice = createSlice( {
    name : 'customer',
    initialState,
    reducers : {
        addCustomer : () => {

        },
        updateCustomer : () => {

        },
        deleteCustomer : () => {

        }
    }
  })


export const { addCustomer, updateCustomer,deleteCustomer } = customerSlice.actions;

export default customerSlice.reducer;

// Return type of createSlice
type CounterSlice = typeof customerSlice;