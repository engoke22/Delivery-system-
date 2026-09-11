# SokoFlow

A Cloudflare Workers deployable marketplace starter.

## Features included
- Responsive marketplace UI
- Home, Explore, Orders, Messages and Profile navigation
- Product search
- Product cards and cart
- Seller/customer/delivery role concept
- Delivery tracking demonstration
- Payment section marked **Coming Soon**
- Cloudflare Worker API endpoints
- Ready to extend with D1, R2, KV and authentication

## Deploy

1. Install Node.js.
2. Open this project folder.
3. Run:

   npm install

4. Login to Cloudflare:

   npx wrangler login

5. Deploy:

   npm run deploy

The first deployment may ask you to choose or authorize your Cloudflare account.

## Local development

npm install
npm run dev

## Important

This is a functional starter application and demo, not a completed production marketplace. For production you should add:
- Cloudflare D1 database
- Authentication
- R2 product image storage
- Seller verification
- Real messaging persistence
- Order persistence
- Delivery partner management
- Security and rate limiting
- Payment integration when ready
