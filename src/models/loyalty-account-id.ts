import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { identificationSupport1Schema, type IdentificationSupport1 } from "./identification-support1.js";
import { identificationType11Schema, type IdentificationType11 } from "./identification-type11.js";

export type LoyaltyAccountId = {
  entryMode: EntryMode[];
  identificationType: IdentificationType11;
  identificationSupport?: IdentificationSupport1;
  loyaltyId: string;
};

export const loyaltyAccountIdSchema: Schema<LoyaltyAccountId> = s.object<LoyaltyAccountId>({
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
