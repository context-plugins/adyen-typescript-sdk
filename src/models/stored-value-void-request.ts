import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoredValueVoidRequest = {
  merchantAccount: string;
  originalReference: string;
  reference?: string;
  store?: string;
  tenderReference?: string;
  uniqueTerminalId?: string;
};

export const storedValueVoidRequestSchema: Schema<StoredValueVoidRequest> = s.object<StoredValueVoidRequest>({
  merchantAccount: s.string(),
  originalReference: s.string(),
  reference: s.optional(s.string()),
  store: s.optional(s.string()),
  tenderReference: s.optional(s.string()),
  uniqueTerminalId: s.optional(s.string()),
});
