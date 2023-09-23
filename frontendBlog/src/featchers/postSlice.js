import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosApi } from '../api/axiosApi.api'

const initialState = {
    loading: false,
    post: [],
    error: null,
}
export const fetchingPost = createAsyncThunk('post/fetchingPost', async () => {
        const { data } = await axiosApi.get('/posts');
        return data
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchingPost.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(fetchingPost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
            state.error = null;
        }),
        builder.addCase(fetchingPost.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer;