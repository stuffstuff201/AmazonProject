export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 4
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 2
  }
];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  let quantityChoice = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  let quantityValue = Number(quantityChoice.value);
  if (matchingItem) {
    matchingItem.quantity += quantityValue;
  } else {
    cart.push({
      productId: productId,
      quantity: quantityValue,
    });
  }
}
