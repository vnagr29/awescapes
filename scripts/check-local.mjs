import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const origin = process.env.TEST_ORIGIN || "http://localhost:3000";
const routes = ["/", "/experiences", "/destinations", "/destinations/nepal", "/stories", "/guides", "/about", "/responsible-travel", "/reviews", "/plan-your-trip", "/contact", "/faqs"];
const linkedPaths = new Set();
for (let index = 0; index < routes.length; index++) {
  const route = routes[index];
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, `${route} should load`);
  const html = await response.text();
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} has one HTML H1`);
  assert.match(html, /<title>[^<]+<\/title>/, `${route} has a title`);
  assert.match(html, /name="description"/, `${route} has a description`);
  assert.match(html, /rel="canonical"/, `${route} has a canonical`);
  for (const match of html.matchAll(/href="(\/[^" ]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.startsWith("/_next") || href.endsWith(".svg")) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!linkedPaths.has(pathname)) {
      linkedPaths.add(pathname);
      if (!routes.includes(pathname)) routes.push(pathname);
    }
  }
  if (route === "/") {
    for (const text of ["Step out.", "Feel more.", "Curated Nepal escapes shaped around adventure, culture, nature, and meaningful moments.", "Local planning", "Flexible journeys", "Experience-first design", "Kathmandu, at your pace", "Good stories deserve real voices."]) assert.ok(html.includes(text), `Homepage HTML contains ${text}`);
  }
  if (route.startsWith("/experiences/")) assert.match(html, /An itinerary idea/, "Itinerary is in initial HTML");
}
for (const route of ["/experiences/not-a-real-journey", "/destinations/nepal/not-a-real-place"]) {
  assert.equal((await fetch(origin + route)).status, 404, `${route} returns 404`);
}
const id = crypto.randomUUID();
const inquiry = { id, name: "Local test traveler", email: "test@example.invalid", message: "Sample inquiry to verify local saving.", travelers: "2" };
async function post(data, requestOrigin = origin) {
  return fetch(origin + "/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json", Origin: requestOrigin }, body: JSON.stringify(data) });
}
assert.equal((await post({ ...inquiry, email: "invalid" })).status, 400, "Invalid email rejected");
assert.equal((await post({ ...inquiry, travelers: "0" })).status, 400, "Invalid traveler count rejected");
assert.equal((await post(inquiry, "https://example.invalid")).status, 403, "Foreign origin rejected");
assert.equal((await post({ ...inquiry, website: "spam" })).status, 400, "Honeypot rejected");
assert.equal((await post(inquiry)).status, 201, "Valid inquiry saved");
const saved = JSON.parse(await readFile(`.local/inquiries/${id}.json`, "utf8"));
assert.equal(saved.message, inquiry.message, "Record is on disk before confirmation");
assert.equal((await post(inquiry)).status, 201, "Retry uses same record");
assert.equal((await post({ ...inquiry, message: "Changed" })).status, 409, "Changed retry rejected");
console.log(`Passed: ${routes.length} HTML pages, linked routes, detail 404s, and inquiry validation/storage/retries. Sample test record: .local/inquiries/${id}.json`);

