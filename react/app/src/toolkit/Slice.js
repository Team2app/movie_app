import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMoviesAction = createAsyncThunk(
    'getMovieData',
    async () => {
        const response = await axios.get('http://localhost:3000/data/data');
        return response.data;
    }
);

export const pseudoMoviesAction = createAsyncThunk(
    'pseudoMovieData',
    async () => {
        const response = await axios.get('http://localhost:3000/data/read');
        return response.data;
    }
);

export const getUserAction = createAsyncThunk(
    'getUserData',
    async () => {
        const response = await axios.get('http://localhost:3000/data/users');
        console.log("response", response.data);
        return response.data;
    }
)

export const postUsersAction = createAsyncThunk(
    'postUsersData',
    async (user) => {
        const response = await axios.post('http://localhost:3000/data/sign', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            mode: "cors"
        });
        return response.data;
    }
)

export const Slice = createSlice({
    name: 'movie_app',
    initialState: {
        users: [],
        movies: [],
        movies1: [],
        logged:false
    },
    reducers: {
        getLogindata: (state, action) => {
            console.log("lasdkfjlsadfjlkasdjf;sajdl")
            state.logged = true;
            console.log(state.logged);
        },
        getMovieData: () => { },
        getUsersData: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(getMoviesAction.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        builder.addCase(getMoviesAction.pending, (state, action) => {
            console.log("getMoviesAction is pending");
        })
        builder.addCase(getMoviesAction.rejected, (state, action) => {
            console.log("getMoviesAction is rejected");
        })
        builder.addCase(pseudoMoviesAction.fulfilled, (state, action) => {
            state.movies1 = action.payload;
        })
        builder.addCase(pseudoMoviesAction.pending, (state, action) => {
            console.log("getMoviesAction is pending");
        })
        builder.addCase(pseudoMoviesAction.rejected, (state, action) => {
            console.log("getMoviesAction is rejected");
        })
        builder.addCase(getUserAction.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
});

export default Slice.reducer;
export const { getLogindata, getUsersData, getMovieData } = Slice.actions;