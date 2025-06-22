import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
