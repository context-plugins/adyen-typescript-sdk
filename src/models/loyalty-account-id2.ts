import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { identificationSupport1Schema, type IdentificationSupport1 } from "./identification-support1.js";
import { identificationType11Schema, type IdentificationType11 } from "./identification-type11.js";

/** Identification of a Loyalty account. */
export type LoyaltyAccountId2 = {
  /**
   * Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue
   * Request messages, it informs the POI System the entry mode of the payment instrument
   * information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response
   * messages, it informs the Sale System the entry mode of the payment instrument. Possible values:
   * * **Contactless**
   * * **File**
   * * **ICC**
   * * **Keyed**
   * * **MagStripe**
   * * **Manual**
   * * **Mobile**
   * * **RFID**
   * * **Scanned**
   * * **SynchronousICC**
   * * **Tapped**
   */
  entryMode: EntryMode[];
  /**
   * Type of account identification. In a request message, it informs the POI System the type of the
   * account or card identification, when provided by the Sale Terminal. (e.g. because the card
   * information is a barcode read by the Cashier on a scanner device). In a response message, it
   * informs the Sale System the type of the account or card identification. Possible values:
   * * **AccountNumber**
   * * **BarCode**
   * * **ISOTrack2**
   * * **PAN**
   * * **PhoneNumber**
   */
  identificationType: IdentificationType11;
  /**
   * Support of the loyalty account identification. Allows knowing where and how you have found the
   * loyalty account identification. Possible values:
   * * **HybridCard**
   * * **LinkedCard**
   * * **LoyaltyCard**
   * * **NoCard**
   */
  identificationSupport?: IdentificationSupport1;
  /** Loyalty account identification conforming to the IdentificationType. */
  loyaltyId: string;
};

export const loyaltyAccountId2Schema: Schema<LoyaltyAccountId2> = s.object<LoyaltyAccountId2>({
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
