"use client"

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { env } from '../lib/env';
import { User } from 'Models';

export const userApi = createApi({
    reducerPath:"userApi",
    refetchOnFocus:true,
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints : (build) => ({
        getUsers: build.query<User[], null>({
            query: () => "users"
        }),
        getUserByid: build.query<User,{id:string}>({
            query: ({id}) => `users/${id}`
        })
    })
})

export const {useGetUsersQuery, useGetUserByidQuery} = userApi