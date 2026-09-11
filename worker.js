export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({ ok: true, app: "SokoFlow", status: "running" });
    }

    if (url.pathname === "/api/products") {
      return Response.json([
        { id: 1, name: "Wireless Headphones", price: 2500, seller: "TechFlow Store", category: "Electronics" },
        { id: 2, name: "Classic Hoodie", price: 1800, seller: "Urban Style", category: "Fashion" },
        { id: 3, name: "Office Backpack", price: 2200, seller: "Daily Essentials", category: "Accessories" }
      ]);
    }

    if (url.pathname === "/api/orders") {
      return Response.json([]);
    }

    return env.ASSETS.fetch(request);
  }
};