import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SensitiveMobileData1 = {
  msisdn: number;
  imsi?: number;
  imei?: number;
};

export const sensitiveMobileData1Schema: Schema<SensitiveMobileData1> = s.object<SensitiveMobileData1>({
  msisdn: s.number(),
  imsi: s.optional(s.number()),
  imei: s.optional(s.number()),
  _keysMap: {
    msisdn: "MSISDN",
    imsi: "IMSI",
    imei: "IMEI",
  },
});
