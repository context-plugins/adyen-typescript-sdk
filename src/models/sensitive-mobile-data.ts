import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SensitiveMobileData = {
  msisdn: number;
  imsi?: number;
  imei?: number;
};

export const sensitiveMobileDataSchema: Schema<SensitiveMobileData> = s.object<SensitiveMobileData>({
  msisdn: s.number(),
  imsi: s.optional(s.number()),
  imei: s.optional(s.number()),
  _keysMap: {
    msisdn: "MSISDN",
    imsi: "IMSI",
    imei: "IMEI",
  },
});
