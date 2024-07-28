export const cart = [];

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
