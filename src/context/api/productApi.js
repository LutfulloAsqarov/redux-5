import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        // get
        getProducts: build.query({
            query: () => ({
                url: "/products",
            }),
            providesTags: ["Product"],
        }),

        getDetailProduct: build.query({
            query: (id) => ({
                url: "/products/" + id,
            }),
            providesTags: ["Product"],
        }),

        // post

        postProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),

        // delete

        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),

        // put

        putProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/product/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useDeleteProductMutation,
    usePostProductMutation,
    useGetDetailProductQuery,
    usePutProductMutation,
} = productApi;
