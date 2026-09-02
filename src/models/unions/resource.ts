import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountHolderResourceSchema, type AccountHolderResource } from "../account-holder-resource.js";
import { legalEntityResourceSchema, type LegalEntityResource } from "../legal-entity-resource.js";
import {
  paymentInstrumentResourceSchema,
  type PaymentInstrumentResource,
} from "../payment-instrument-resource.js";

export type Resource =
  | (AccountHolderResource & { type: "accountHolder" })
  | (LegalEntityResource & { type: "legalEntity" })
  | (PaymentInstrumentResource & { type: "paymentInstrument" });

export const resourceSchema: Schema<Resource> = s.discriminatedUnion<Resource>("type", {
  accountHolder: accountHolderResourceSchema,
  legalEntity: legalEntityResourceSchema,
  paymentInstrument: paymentInstrumentResourceSchema,
});
