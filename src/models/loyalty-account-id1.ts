import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { identificationSupport1Schema, type IdentificationSupport1 } from "./identification-support1.js";
import { identificationType11Schema, type IdentificationType11 } from "./identification-type11.js";

export type LoyaltyAccountId1 = {
  entryMode: EntryMode[];
  identificationType: IdentificationType11;
  identificationSupport?: IdentificationSupport1;
  loyaltyId: string;
};

export const loyaltyAccountId1Schema: Schema<LoyaltyAccountId1> = s.object<LoyaltyAccountId1>({
  entryMode: s.array(s.lazy(() => entryModeSchema)),
  identificationType: identificationType11Schema,
  identificationSupport: s.optional(s.lazy(() => identificationSupport1Schema)),
  loyaltyId: s.string(),
  _keysMap: {
    entryMode: "EntryMode",
    identificationType: "IdentificationType",
    identificationSupport: "IdentificationSupport",
    loyaltyId: "LoyaltyID",
  },
});
