import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **Status**
 * * **Error**
 * * **Display**
 * * **Sound**
 * * **Input**
 * * **POIReplication**
 * * **CustomerAssistance**
 * * **Receipt**
 * * **Document**
 * * **Voucher**
 */
export const InfoQualify = {
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
export type InfoQualify = (typeof InfoQualify)[keyof typeof InfoQualify] | (string & {});

export const infoQualifySchema: EnumSchema<InfoQualify> = s.enumOf<InfoQualify>(InfoQualify);
