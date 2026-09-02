import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device3Schema, type Device3 } from "./device3.js";
import { infoQualify3Schema, type InfoQualify3 } from "./info-qualify3.js";
import { response11Schema, type Response11 } from "./response11.js";

export type OutputResult1 = {
  device: Device3;
  infoQualify: InfoQualify3;
  response: Response11;
};

export const outputResult1Schema: Schema<OutputResult1> = s.object<OutputResult1>({
  device: device3Schema,
  infoQualify: infoQualify3Schema,
  response: response11Schema,
  _keysMap: {
    device: "Device",
    infoQualify: "InfoQualify",
    response: "Response",
  },
});
