export function formatCurrency(priceCents){
  return (priceCents / 100).toFixed(2);
}

export function sumAndShipping(priceCents,shippingCost){
  return ((priceCents+shippingCost)/ 100).toFixed(2);
}

export function tax(priceCents,shippingCost,taxPer){
  return (((priceCents + shippingCost)/ taxPer) /100).toFixed(2);
}

export function totalPrice(priceCents,shippingCost,taxPer){
  return (((priceCents + shippingCost) / taxPer + (priceCents + shippingCost))/ 100).toFixed(2);
}