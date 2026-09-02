import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

export type ViasPhoneNumber4 = {
  phoneCountryCode?: string;
  phoneNumber?: string;
  phoneType?: PhoneType;
};

export const viasPhoneNumber4Schema: Schema<ViasPhoneNumber4> = s.object<ViasPhoneNumber4>({
  phoneCountryCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  phoneType: s.optional(s.lazy(() => phoneTypeSchema)),
});
