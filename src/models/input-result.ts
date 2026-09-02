import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device4Schema, type Device4 } from "./device4.js";
import { infoQualify2Schema, type InfoQualify2 } from "./info-qualify2.js";
import { input2Schema, type Input2 } from "./input2.js";
import { response1Schema, type Response1 } from "./response1.js";

export type InputResult = {
  device: Device4;
  infoQualify: InfoQualify2;
  response: Response1;
  input?: Input2;
};

export const inputResultSchema: Schema<InputResult> = s.object<InputResult>({
  device: device4Schema,
  infoQualify: infoQualify2Schema,
  response: response1Schema,
  input: s.optional(s.lazy(() => input2Schema)),
  _keysMap: {
    device: "Device",
    infoQualify: "InfoQualify",
    response: "Response",
    input: "Input",
  },
});
