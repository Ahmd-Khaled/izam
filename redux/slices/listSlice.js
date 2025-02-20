import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../API_URL";

// Async Thunk for GET request (Get Nav List)
export const fetchListItems = createAsyncThunk(
  "list/fetchListItems",
  async () => {
    const response = await axios.get(`${API_URL}/nav`);
    return response.data;
  }
);

// Async Thunk for POST request (Post Nav List)
export const addListItem = createAsyncThunk(
  "list/addListItem",
  async (data) => {
    const response = await axios.post(`${API_URL}/nav`, data);
    return response.data;
  }
);

// Async Thunk for POST request (Track List Item)
export const trackListItem = createAsyncThunk(
  "list/trackListItem",
  async (data) => {
    console.log("==== ---trackListItem--- ==== data", data);
    const response = await axios.post(`${API_URL}/track`, data);
    return response.data;
  }
);

const listSlice = createSlice({
  name: "list",
  initialState: {
    items: [],
    newList: [],
    from: 0,
    to: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    updateList: (state, action) => {
      state.newList = action.payload; // Update the list with the new items
    },
    updateTitle: (state, action) => {
      state.newList = action.payload; // Update the list with the new items
      console.log("-------------action.payload:", action.payload);
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
      })
      // Track list item
      .addCase(trackListItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(trackListItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.from = action.meta.arg.from;
        state.to = action.meta.arg.to;
        // console.log("=========trackListItem Fulfilled======", action.meta.arg);
      })
      .addCase(trackListItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateList, updateTitle } = listSlice.actions;

export default listSlice.reducer;
