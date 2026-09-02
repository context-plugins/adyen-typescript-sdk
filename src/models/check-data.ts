import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackData1Schema, type TrackData1 } from "./track-data1.js";
import { typeCode1Schema, type TypeCode1 } from "./type-code1.js";

export type CheckData = {
  bankId?: string;
  accountNumber?: string;
  checkNumber?: string;
  trackData?: TrackData1;
  checkCardNumber?: string;
  typeCode?: TypeCode1;
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
