import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisableRequest = {
  contract?: string;
  merchantAccount: string;
  recurringDetailReference?: string;
  shopperReference: string;
};

export const disableRequestSchema: Schema<DisableRequest> = s.object<DisableRequest>({
  contract: s.optional(s.string()),
  merchantAccount: s.string(),
  recurringDetailReference: s.optional(s.string()),
  shopperReference: s.string(),
});
