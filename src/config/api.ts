export const API_CONFIG = {
  BASE_URL: 'https://fakestoreapi.com',
  ENDPOINTS: {
    PRODUCTS: '/products',
    CATEGORIES: '/products/categories',
    PRODUCT_BY_ID: (id: string | number) => `/products/${id}`,
    PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,
  },
  TIMEOUT: 10000, // 10 seconds
} as const;