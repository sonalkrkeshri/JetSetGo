import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
  }

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateSearch } = SearchSlice.actions

export default SearchSlice.reducer