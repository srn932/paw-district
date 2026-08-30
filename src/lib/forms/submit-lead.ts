export type LeadPayload = {
  type: "contact" | "booking";
  [key: string]: unknown;
};

export type LeadResult = { ok: true; reference: string } | { ok: false; message: string };

/**
 * Development adapter. Replace the simulated response here with calls to isolated
 * adapters in src/lib/integrations (CRM, email, database or webhook) before launch.
 */
export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (!payload.type) return { ok: false, message: "That request needs one more detail." };
  return { ok: true, reference: `PD-${Date.now().toString(36).toUpperCase()}` };
}
