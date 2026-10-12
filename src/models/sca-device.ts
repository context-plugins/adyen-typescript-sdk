import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaDeviceType1Schema, type ScaDeviceType1 } from "./sca-device-type1.js";

/** A resource that contains information about a device, including its unique ID, name, and type. */
export type ScaDevice = {
  /** The unique identifier of the SCA device you are registering. */
  id: string;
  /**
   * The name of the SCA device that you are registering. You can use it to help your users identify
   * the device.
   */
  name: string;
  /**
   * Type of device registered.
   *
   * Possible values: **ios**, **android**, **browser**.
   */
  type: ScaDeviceType1;
};

export const scaDeviceSchema: Schema<ScaDevice> = s.object<ScaDevice>({
  id: s.string(),
  name: s.string(),
  type: scaDeviceType1Schema,
});
