import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferInstrumentReference = {
  accountIdentifier: string;
  id: string;
  realLastFour?: string;
  trustedSource?: boolean;
};

export const transferInstrumentReferenceSchema: Schema<TransferInstrumentReference> =
  s.object<TransferInstrumentReference>({
    accountIdentifier: s.string(),
    id: s.string(),
    realLastFour: s.optional(s.string()),
    trustedSource: s.optional(s.boolean()),
  });
