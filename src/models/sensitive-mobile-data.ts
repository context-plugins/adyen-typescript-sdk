import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SensitiveMobileData = {
  /**
   * Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM
   * card). Country, National Destination Code, and Subscriber Number.
   */
  msisdn: number;
  /**
   * International Mobile Subscriber Identity. Unique number associated with the mobile phone user,
   * containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile
   * Identification Number (MSIN)
   */
  imsi?: number;
  /**
   * International Mobile Equipment Identity. Unique number associated with the mobile phone device.
   */
  imei?: number;
};

export const sensitiveMobileDataSchema: Schema<SensitiveMobileData> = s.object<SensitiveMobileData>({
  msisdn: s.int(),
  imsi: s.optional(s.int()),
  imei: s.optional(s.int()),
  _keysMap: {
    msisdn: "MSISDN",
    imsi: "IMSI",
    imei: "IMEI",
  },
});
