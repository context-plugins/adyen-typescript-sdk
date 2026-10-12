import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneInfo2Schema, type PhoneInfo2 } from "./phone-info2.js";

/** Contains information about the device used to provision the network token. */
export type DeviceInfo1 = {
  /** The type of device used to provision the network token. */
  formFactor?: string;
  /** The operating system of the device used to provision the network token. */
  osName?: string;
  /**
   * The information about the phone number of the device used to provision the the network token.
   * This object is conditionally returned and is available for up to 24 hours after the
   * provisioning request (access to this field requires a specific user role, please contact your
   * Adyen representative to request permission).
   */
  phone?: PhoneInfo2;
};

export const deviceInfo1Schema: Schema<DeviceInfo1> = s.object<DeviceInfo1>({
  formFactor: s.optional(s.string()),
  osName: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneInfo2Schema)),
});
