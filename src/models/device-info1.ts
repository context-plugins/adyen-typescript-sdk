import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneInfo2Schema, type PhoneInfo2 } from "./phone-info2.js";

export type DeviceInfo1 = {
  formFactor?: string;
  osName?: string;
  phone?: PhoneInfo2;
};

export const deviceInfo1Schema: Schema<DeviceInfo1> = s.object<DeviceInfo1>({
  formFactor: s.optional(s.string()),
  osName: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneInfo2Schema)),
});
