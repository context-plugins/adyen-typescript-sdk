import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferNotificationValidationFact = {
  /** The evaluation result of the validation fact. */
  result?: string;
  /** The type of the validation fact. */
  type?: string;
};

export const transferNotificationValidationFactSchema: Schema<TransferNotificationValidationFact> =
  s.object<TransferNotificationValidationFact>({
    result: s.optional(s.string()),
    type: s.optional(s.string()),
  });
