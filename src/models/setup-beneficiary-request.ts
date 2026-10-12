import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SetupBeneficiaryRequest = {
  /** The destination account code. */
  destinationAccountCode: string;
  /** A value that can be supplied at the discretion of the executing user. */
  merchantReference?: string;
  /** The benefactor account. */
  sourceAccountCode: string;
};

export const setupBeneficiaryRequestSchema: Schema<SetupBeneficiaryRequest> =
  s.object<SetupBeneficiaryRequest>({
    destinationAccountCode: s.string(),
    merchantReference: s.optional(s.string()),
    sourceAccountCode: s.string(),
  });
