import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        priority && params.append("priority", priority);
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/tasks/create-task",
        method: "POST",
        body: data, // data must be always send object pattern
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (options) => ({
        url: `/tasks/${options.id}`,
        method: "PUT",
        body: options?.data, // data must be always send object pattern
      }),
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
} = baseApi;
