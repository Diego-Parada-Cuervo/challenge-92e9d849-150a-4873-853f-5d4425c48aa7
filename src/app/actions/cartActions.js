export const addToCart = (product) => ({
  type: 'cart/addToCart',
  payload: product,
});

export const updateQuantity = (productId, quantity) => ({
  type: 'cart/updateQuantity',
  payload: { productId, quantity },
});