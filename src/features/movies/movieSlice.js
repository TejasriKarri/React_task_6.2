import { createSlice} from "@reduxjs/toolkit";
const initialState={
    movies:{}
}
// export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
//     {console.log("hel");}
//     try{
//     const res=await axios.get(featuredApi)
//     return res.data
//     }
//     catch(e){
//         console.log(e.message)
//     }
//    // console.log(res.data)
// })
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
          state.movies=payload;//IMMEn
        },
        // searchMovies:(state,{payload})=>{
        //     state.movies=payload
        // }
    },
    // extraReducers:{
    //     [fetchAsyncMovies.pending]:()=>{
    //         console.log("pending");
        
    //     },
    //     [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
    //         console.log("succesfull");
    //         return {...state,movies:payload}
    //     },
    //     [fetchAsyncMovies.rejected]:()=>{
    //         console.log("Rejected");
         
    //     }
    // }
});
// export const {searchMovies}=movieSlice.actions
// export const getAllSearchMovies=(state)=>state.movies.movies
export const {addMovies} =movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies  //state.namegiveninstore.whatwewanttofetchinInititalstate
export default movieSlice.reducer