import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackData1Schema, type TrackData1 } from "./track-data1.js";
import { typeCode1Schema, type TypeCode1 } from "./type-code1.js";

/**
 * Information related to the paper check used for the transaction. Allows the check information to
 * be provided by the Sale System before requesting the payment, or stored by the Sale System after
 * processing of the payment.
 */
export type CheckData = {
  /** Identification of the bank. Mandatory if TrackData absent. */
  bankId?: string;
  /** Identification of the customer account. Mandatory if TrackData absent. */
  accountNumber?: string;
  /** Identification of the bank check. Mandatory if TrackData absent. */
  checkNumber?: string;
  /** Magnetic track or magnetic ink characters line. Mandatory if CheckNumber absent. */
  trackData?: TrackData1;
  /** Check guarantee card number. If provided by the customer. */
  checkCardNumber?: string;
  /**
   * Type of bank check. Possible values:
   * * **Company**
   * * **Personal**
   */
  typeCode?: TypeCode1;
  /** Country of the bank check. Absent if country of the Sale system. */
  country?: string;
};

export const checkDataSchema: Schema<CheckData> = s.object<CheckData>({
  bankId: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  checkNumber: s.optional(s.string()),
  trackData: s.optional(s.lazy(() => trackData1Schema)),
  checkCardNumber: s.optional(s.string()),
  typeCode: s.optional(s.lazy(() => typeCode1Schema)),
  country: s.optional(s.string()),
  _keysMap: {
    bankId: "BankID",
    accountNumber: "AccountNumber",
    checkNumber: "CheckNumber",
    trackData: "TrackData",
    checkCardNumber: "CheckCardNumber",
    typeCode: "TypeCode",
    country: "Country",
  },
});
