import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const FetchApi = createAsyncThunk(
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return thunkAPI.fulfillWithValue(response.data)
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState = {
    value: 0,
    userData: {
        data: [],
        loading: false,
        status: "",
        errorData: []
    }
}
export const UserSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        test: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchApi.pending, (state, action) => {
            state.userData.loading = true
        });
        builder.addCase(FetchApi.fulfilled, (state, action) => {
            state.userData.loading = false;
            state.userData.data = action.payload
            state.userData.status = "Success"
        });
        builder.addCase(FetchApi.rejected, (state, action) => {
            state.userData.loading = false
            state.userData.status = "Error"
            state.userData.errorData = action.payload

        });
    }
})

export const { test} = UserSlice.actions
export default UserSlice.reducer