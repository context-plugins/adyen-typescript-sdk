import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaDeviceType1Schema, type ScaDeviceType1 } from "./sca-device-type1.js";

export type ScaDevice = {
  id: string;
  name: string;
  type: ScaDeviceType1;
};

export const scaDeviceSchema: Schema<ScaDevice> = s.object<ScaDevice>({
  id: s.string(),
  name: s.string(),
  type: scaDeviceType1Schema,
});
