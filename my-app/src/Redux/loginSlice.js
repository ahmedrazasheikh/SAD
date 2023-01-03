import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 value : false,
}

export const Login = createSlice({
  name: 'Login and Signup',
  initialState,
  reducers: {
    Loginscheck: (state) => {

        state.value  = true
      },
      Logout: (state) => {
        state.value  = false
      },
  },
})

export const { Loginscheck , Logout} = Login.actions



// This thing we use in store//
export default Login.reducer