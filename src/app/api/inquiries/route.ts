import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
const fields = ["name", "email", "experience", "dates", "travelers", "duration", "budget", "phone", "message"] as const;

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production" && process.env.ENABLE_LOCAL_INQUIRIES !== "true") {
    return NextResponse.json({ error: "Local inquiry saving is disabled. Enable it for local testing or connect a production inquiry service." }, { status: 503 });
  }
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return NextResponse.json({ error: "Please submit from this website." }, { status: 403 });
  const body = await request.text();
  if (body.length > 16000) return NextResponse.json({ error: "Your inquiry is too long." }, { status: 413 });
  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    data = parsed as Record<string, unknown>;
  } catch { return NextResponse.json({ error: "We could not read the inquiry. Please try again." }, { status: 400 }); }
  if (data.website) return NextResponse.json({ error: "Unable to save this inquiry." }, { status: 400 });
  if (typeof data.id !== "string" || !/^[a-f0-9-]{36}$/i.test(data.id)) return NextResponse.json({ error: "Please reload the form and try again." }, { status: 400 });
  const inquiry = Object.fromEntries(fields.map(field => [field, typeof data[field] === "string" ? data[field].trim() : ""])) as Record<typeof fields[number], string>;
  if (!inquiry.name || inquiry.name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) || inquiry.email.length > 254 || !inquiry.message || inquiry.message.length > 3000 || fields.some(field => field !== "message" && inquiry[field].length > 254) || (inquiry.travelers && (!/^\d+$/.test(inquiry.travelers) || Number(inquiry.travelers) < 1 || Number(inquiry.travelers) > 100))) {
    return NextResponse.json({ error: "Check your name, email, trip ideas, and traveler count. Your entries are still in the form." }, { status: 400 });
  }
  const folder = path.join(process.cwd(), ".local", "inquiries");
  const file = path.join(folder, `${data.id}.json`);
  try {
    await mkdir(folder, { recursive: true });
    await writeFile(file, JSON.stringify({ id: data.id, createdAt: new Date().toISOString(), ...inquiry }, null, 2), { flag: "wx", mode: 0o600 });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EEXIST") {
      const previous = JSON.parse(await readFile(file, "utf8"));
      if (fields.some(field => previous[field] !== inquiry[field])) return NextResponse.json({ error: "This request changed. Please reload before sending a new inquiry." }, { status: 409 });
    } else {
      console.error("Local inquiry storage failed", (error as NodeJS.ErrnoException).code);
      return NextResponse.json({ error: "Your inquiry could not be saved. Your entries are still in the form; please try again." }, { status: 500 });
    }
  }
  return NextResponse.json({ id: data.id, message: "Saved on this computer only. No email or team notification has been sent." }, { status: 201 });
}
