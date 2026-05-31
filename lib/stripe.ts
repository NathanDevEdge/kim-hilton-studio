import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-05-27.dahlia",
});

export async function getActiveProducts() {
  const products = await stripe.products.list({
    active: true,
    expand: ["data.default_price"],
  });
  return products.data;
}

export async function getProductById(id: string) {
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  return product;
}
