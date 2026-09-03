import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountInfo1Schema, type BankAccountInfo1 } from "./bank-account-info1.js";
import { capabilityProblem1Schema, type CapabilityProblem1 } from "./capability-problem1.js";
import { documentReferenceSchema, type DocumentReference } from "./document-reference.js";
import {
  supportingEntityCapabilitySchema,
  type SupportingEntityCapability,
} from "./supporting-entity-capability.js";
import { type221Schema, type Type221 } from "./type221.js";

export type TransferInstrument = {
  bankAccount: BankAccountInfo1;
  capabilities?: Record<string, SupportingEntityCapability>;
  documentDetails?: DocumentReference[];
  id: string;
  legalEntityId: string;
  problems?: CapabilityProblem1[];
  type: Type221;
};

export const transferInstrumentSchema: Schema<TransferInstrument> = s.object<TransferInstrument>({
  bankAccount: bankAccountInfo1Schema,
  capabilities: s.optional(
    s.record(
      s.string(),
      s.lazy(() => supportingEntityCapabilitySchema),
    ),
  ),
  documentDetails: s.optional(s.array(s.lazy(() => documentReferenceSchema))),
  id: s.string(),
  legalEntityId: s.string(),
  problems: s.optional(s.array(s.lazy(() => capabilityProblem1Schema))),
  type: type221Schema,
});
