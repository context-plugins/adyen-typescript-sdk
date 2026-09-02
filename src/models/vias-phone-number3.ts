import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

export type ViasPhoneNumber3 = {
  phoneCountryCode?: string;
  phoneNumber?: string;
  phoneType?: PhoneType;
};

export const viasPhoneNumber3Schema: Schema<ViasPhoneNumber3> = s.object<ViasPhoneNumber3>({
  phoneCountryCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  phoneType: s.optional(s.lazy(() => phoneTypeSchema)),
});
