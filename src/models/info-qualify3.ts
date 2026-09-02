import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InfoQualify3 = {
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
export type InfoQualify3 = (typeof InfoQualify3)[keyof typeof InfoQualify3] | (string & {});

export const infoQualify3Schema: EnumSchema<InfoQualify3> = s.enumOf<InfoQualify3>(InfoQualify3);
