import { Hono } from "@hono/hono";

const app = new Hono();

// Basit route
app.get("/", (c) => c.text("Hello Deno + Hono ⚡"));

// JSON endpoint
app.get("/api/time", (c) => c.json({ time: new Date().toISOString() }));

// Dynamic param
app.get("/api/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ message: `Hello, ${name}!` });
});

Deno.serve(app.fetch);
