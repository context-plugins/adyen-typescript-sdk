import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteSignatoriesRequest = {
  /** The code of the account holder from which to delete the signatories. */
  accountHolderCode: string;
  /** Array of codes of the signatories to be deleted. */
  signatoryCodes: string[];
};

export const deleteSignatoriesRequestSchema: Schema<DeleteSignatoriesRequest> =
  s.object<DeleteSignatoriesRequest>({
    accountHolderCode: s.string(),
    signatoryCodes: s.array(s.string()),
  });
