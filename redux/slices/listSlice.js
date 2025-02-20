import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../API_URL";

// Async Thunk for GET request (Get Nav List).
export const fetchListItems = createAsyncThunk(
  "list/fetchListItems",
  async () => {
    const response = await axios.get(`${API_URL}/nav`);
    return response.data;
  }
);

// Async Thunk for POST request (Post Nav List).
export const addListItem = createAsyncThunk(
  "list/addListItem",
  async (data) => {
    const response = await axios.post(`${API_URL}/nav`, data);
    return response.data;
  }
);

const listSlice = createSlice({
  name: "list",
  initialState: { items: [], newList: [], status: "idle", error: null },
  reducers: {
    updateList: (state, action) => {
      state.newList = action.payload; // Update the list with the new items
      console.log("- - -    --    --  state.newList:", state.newList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchListItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Add new item to the list.
      .addCase(addListItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addListItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addListItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateList } = listSlice.actions;

export default listSlice.reducer;
