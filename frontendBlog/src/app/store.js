import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../featchers/postSlice'

const store = configureStore({
    reducer: {
        posts: postSlice,
    }
})

export default store;