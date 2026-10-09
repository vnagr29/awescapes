"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { experiences } from "@/data/content";

export function InquiryForm({ initialExperience = "" }: { initialExperience?: string }) {
  const [ready, setReady] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState("");
  const requestId = useRef("");
  const sending = useRef(false);
  useEffect(() => { setReady(true); }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    requestId.current ||= crypto.randomUUID();
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, id: requestId.current }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to save your inquiry. Please try again.");
      setReceipt(result.id);
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Unable to connect. Your entries are still in the form.");
    } finally { sending.current = false; setPending(false); }
  }

  return <>
    <p className="form-note" id="inquiry-notice">Local website preview. Submitting saves your details on this computer only. Nothing is emailed to AweEscapes. Use sample details while testing; records are stored outside public assets.</p>
    <noscript><p>JavaScript is needed to submit this local form. No information will be sent while it is disabled.</p></noscript>
    {receipt ? <section className="preview-result" role="status"><h3>Your inquiry was saved locally.</h3><p>No email or team notification has been sent.</p><p className="muted">Reference: {receipt}</p><button className="text-link" type="button" onClick={() => { setReceipt(""); requestId.current = ""; }}>Start another inquiry</button></section> :
    <form onSubmit={submit} aria-describedby="inquiry-notice" aria-busy={pending}>
      <fieldset disabled={!ready || pending} className="form-grid"><legend className="sr-only">Your trip ideas</legend>
        <label className="field">Name (required)<input name="name" autoComplete="name" required maxLength={100} /></label>
        <label className="field">Email (required)<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label className="field">Experience or destination<input name="experience" list="experience-options" defaultValue={initialExperience} maxLength={150} placeholder="Open to ideas" /><datalist id="experience-options">{experiences.map(item => <option key={item.slug} value={item.title} />)}</datalist></label>
        <label className="field">Approximate dates<input name="dates" placeholder="For example, spring — or not sure yet" maxLength={100} /></label>
        <label className="field">Number of travelers<input name="travelers" type="number" min={1} max={100} inputMode="numeric" placeholder="Not sure yet" /></label>
        <label className="field">Preferred duration<input name="duration" placeholder="How much time do you have?" maxLength={100} /></label>
        <label className="field">Budget preferences<input name="budget" placeholder="Optional, include your currency" maxLength={100} /></label>
        <label className="field">Phone or WhatsApp<input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Optional" /></label>
        <label className="field full">What would you love to experience? (required)<textarea name="message" required maxLength={3000} placeholder="Tell us about your interests, pace, and questions. Please leave out sensitive personal information." /></label>
        <div hidden aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="full"><p className="muted text-sm">Required: name, email, and trip ideas. This form saves a local test inquiry only.</p><button className="button" type="submit">{pending ? "Saving locally…" : "Save local inquiry"} <span aria-hidden="true">↗</span></button></div>
      </fieldset>
      {error && <p className="form-note mt-6" role="alert">{error}</p>}
    </form>}
  </>;
}
