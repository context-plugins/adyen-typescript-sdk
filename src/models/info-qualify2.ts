import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InfoQualify2 = {
  Status: "Status",
  Error: "Error",
  Display: "Display",
  Sound: "Sound",
  Input: "Input",
  PoiReplication: "POIReplication",
  CustomerAssistance: "CustomerAssistance",
  Receipt: "Receipt",
  Document: "Document",
  Voucher: "Voucher",
} as const;
export type InfoQualify2 = (typeof InfoQualify2)[keyof typeof InfoQualify2] | (string & {});

export const infoQualify2Schema: EnumSchema<InfoQualify2> = s.enumOf<InfoQualify2>(InfoQualify2);
