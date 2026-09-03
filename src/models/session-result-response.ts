import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSchema, type Payment } from "./payment.js";
import { status5Schema, type Status5 } from "./status5.js";

export type SessionResultResponse = {
  additionalData?: Record<string, string>;
  id?: string;
  payments?: Payment[];
  reference?: string;
  status?: Status5;
};

export const sessionResultResponseSchema: Schema<SessionResultResponse> = s.object<SessionResultResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  id: s.optional(s.string()),
  payments: s.optional(s.array(s.lazy(() => paymentSchema))),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status5Schema)),
});
