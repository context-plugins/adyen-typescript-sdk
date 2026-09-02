import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferNotificationValidationFact = {
  result?: string;
  type?: string;
};

export const transferNotificationValidationFactSchema: Schema<TransferNotificationValidationFact> =
  s.object<TransferNotificationValidationFact>({
    result: s.optional(s.string()),
    type: s.optional(s.string()),
  });
