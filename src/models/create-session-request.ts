import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateSessionRequest = {
  merchantAccount: string;
  setupToken: string;
  store?: string;
};

export const createSessionRequestSchema: Schema<CreateSessionRequest> = s.object<CreateSessionRequest>({
  merchantAccount: s.string(),
  setupToken: s.string(),
  store: s.optional(s.string()),
});
