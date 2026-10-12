import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { identificationType11Schema, type IdentificationType11 } from "./identification-type11.js";
import { storedValueAccountType1Schema, type StoredValueAccountType1 } from "./stored-value-account-type1.js";

/**
 * Identification of the stored value account or the stored value card. If the identification of the
 * Stored Value account or card has been made by the Sale System before the request.
 */
export type StoredValueAccountId1 = {
  /**
   * Type of stored value account. Allows the distinction of the stored value instrument to access
   * the stored value account. Possible values:
   * * **GiftCard**
   * * **Other**
   * * **PhoneCard**
   */
  storedValueAccountType: StoredValueAccountType1;
  /**
   * Identification of the provider of the stored value account load/reload. When the ProductCode is
   * not sufficient to identify the provider host which delivers the load or reload of the stored
   * value account (for example if it contains the identification of the application.)
   */
  storedValueProvider?: string;
  /** Name of the owner of a stored value account. */
  ownerName?: string;
  /**
   * Date after which the card cannot be used. If EMV expiry date is present, it overrides Track2
   * information. Format is MMYY.
   */
  expiryDate?: number;
  /**
   * Entry mode of the payment instrument information. In the Payment, Loyalty, or StoredValue
   * Request messages, it informs the POI System the entry mode of the payment instrument
   * information when read by the Sale Terminal. (e.g. because the payment instrument information
   * are a barcode read by the Cashier on a scanner device). Possible values:
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
   * Stored value account identification. The identification of the stored value account conforming
   * to the IdentificationType.
   */
  storedValueId: string;
};

export const storedValueAccountId1Schema: Schema<StoredValueAccountId1> = s.object<StoredValueAccountId1>({
  storedValueAccountType: storedValueAccountType1Schema,
  storedValueProvider: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  expiryDate: s.optional(s.int()),
  entryMode: s.array(s.lazy(() => entryModeSchema)),
  identificationType: identificationType11Schema,
  storedValueId: s.string(),
  _keysMap: {
    storedValueAccountType: "StoredValueAccountType",
    storedValueProvider: "StoredValueProvider",
    ownerName: "OwnerName",
    expiryDate: "ExpiryDate",
    entryMode: "EntryMode",
    identificationType: "IdentificationType",
    storedValueId: "StoredValueID",
  },
});
