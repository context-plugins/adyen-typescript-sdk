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
  /** Contains information about the legal entity's bank account. */
  bankAccount: BankAccountInfo1;
  /** List of capabilities for this transfer instrument. */
  capabilities?: Record<string, SupportingEntityCapability>;
  /** List of documents uploaded for the transfer instrument. */
  documentDetails?: DocumentReference[];
  /** The unique identifier of the transfer instrument. */
  id: string;
  /**
   * The unique identifier of the [legal
   * entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id)
   * that owns the transfer instrument.
   */
  legalEntityId: string;
  /** The verification errors related to capabilities for this transfer instrument. */
  problems?: CapabilityProblem1[];
  /**
   * The type of transfer instrument.
   *
   * Possible value: **bankAccount**.
   */
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
