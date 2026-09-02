import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shareholderTypeSchema, type ShareholderType } from "./shareholder-type.js";
import { viasAddress2Schema, type ViasAddress2 } from "./vias-address2.js";
import { viasName1Schema, type ViasName1 } from "./vias-name1.js";
import { viasPersonalData1Schema, type ViasPersonalData1 } from "./vias-personal-data1.js";
import { viasPhoneNumber1Schema, type ViasPhoneNumber1 } from "./vias-phone-number1.js";

export type ShareholderContact = {
  address?: ViasAddress2;
  email?: string;
  fullPhoneNumber?: string;
  jobTitle?: string;
  name?: ViasName1;
  personalData?: ViasPersonalData1;
  phoneNumber?: ViasPhoneNumber1;
  shareholderCode?: string;
  shareholderReference?: string;
  shareholderType?: ShareholderType;
  webAddress?: string;
};

export const shareholderContactSchema: Schema<ShareholderContact> = s.object<ShareholderContact>({
  address: s.optional(s.lazy(() => viasAddress2Schema)),
  email: s.optional(s.string()),
  fullPhoneNumber: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  name: s.optional(s.lazy(() => viasName1Schema)),
  personalData: s.optional(s.lazy(() => viasPersonalData1Schema)),
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumber1Schema)),
  shareholderCode: s.optional(s.string()),
  shareholderReference: s.optional(s.string()),
  shareholderType: s.optional(s.lazy(() => shareholderTypeSchema)),
  webAddress: s.optional(s.string()),
});
