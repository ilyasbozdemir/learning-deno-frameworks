// server.ts
import { Application, Router } from "@oak/oak";

const router = new Router();

// Basit route örneği
router
  .get("/", (ctx) => {
    ctx.response.body = "Hello Oak 🌳";
  })
  .get("/api/time", (ctx) => {
    ctx.response.type = "application/json";
    ctx.response.body = { time: new Date().toISOString() };
  });

// Oak uygulamasını oluştur
const app = new Application();

// Middleware'leri bağla
app.use(router.routes());
app.use(router.allowedMethods());

// Dinleme işlemini başlat
console.log("✅ Server running on http://localhost:8000");
await app.listen({ port: 8000 });
