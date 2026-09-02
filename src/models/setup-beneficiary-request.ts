import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SetupBeneficiaryRequest = {
  destinationAccountCode: string;
  merchantReference?: string;
  sourceAccountCode: string;
};

export const setupBeneficiaryRequestSchema: Schema<SetupBeneficiaryRequest> =
  s.object<SetupBeneficiaryRequest>({
    destinationAccountCode: s.string(),
    merchantReference: s.optional(s.string()),
    sourceAccountCode: s.string(),
  });
