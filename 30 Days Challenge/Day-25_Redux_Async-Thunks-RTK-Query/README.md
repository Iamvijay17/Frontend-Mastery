# Day 25 - Redux: Async Thunks and RTK Query

## Goal
Handle asynchronous operations like API calls cleanly within the Redux architecture.

## Topics to Learn
- Why reducers cannot contain async code: they must be pure synchronous functions
- createAsyncThunk for wrapping async operations as dispatchable thunks
- The three lifecycle action types automatically created: pending, fulfilled, and rejected
- Handling all three cases inside extraReducers in your slice
- The standard pattern for managing loading, error, and data state alongside async thunks
- RTK Query introduction: createApi and fetchBaseQuery
- Defining API endpoints as either queries (for fetching) or mutations (for writing)
- Auto-generated hooks like useGetPostsQuery and useAddPostMutation
- How RTK Query handles caching, background refetching, and cache invalidation
- Choosing between createAsyncThunk and RTK Query for different use cases

## Practice Task
Build a PostsApp powered entirely by RTK Query:
- Display a paginated list of posts using the useGetPostsQuery hook
- Add a new post using the useAddPostMutation hook
- Show a loading skeleton while data is being fetched
- Show a clear error message when a request fails
- Delete a post using a mutation and automatically invalidate the cache to refetch the list

## Pro Tip
RTK Query is the recommended approach for all server state in a Redux application. It eliminates the need to manually write loading and error state for every single API call.

## Checklist
- [ ] Use createAsyncThunk and handle pending, fulfilled, and rejected states
- [ ] Create an RTK Query API slice with at least 2 endpoints
- [ ] Use both a query hook and a mutation hook in your components
- [ ] Implement cache invalidation so the list refreshes after a mutation
