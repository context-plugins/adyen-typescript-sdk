import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InfoQualify1 = {
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
export type InfoQualify1 = (typeof InfoQualify1)[keyof typeof InfoQualify1] | (string & {});

export const infoQualify1Schema: EnumSchema<InfoQualify1> = s.enumOf<InfoQualify1>(InfoQualify1);
