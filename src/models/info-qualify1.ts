import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Qualification of the information to sent to an output logical device, to display or print to the
 * Cashier or the Customer. Allows the manager of the device, Sale or POI Terminal, to send the
 * information to a particular physical device or to present the information accordingly. Possible
 * values:
 * * **CustomerAssistance**
 * * **Display**
 * * **Document**
 * * **Error**
 * * **Input**
 * * **POIReplication**
 * * **Receipt**
 * * **Sound**
 * * **Status**
 * * **Voucher**
 */
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
