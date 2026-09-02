import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { globalStatus1Schema, type GlobalStatus1 } from "./global-status1.js";
import { printerStatus1Schema, type PrinterStatus1 } from "./printer-status1.js";

export type PoiStatus1 = {
  globalStatus: GlobalStatus1;
  securityOkFlag?: boolean;
  pedokFlag?: boolean;
  cardReaderOkFlag?: boolean;
  printerStatus?: PrinterStatus1;
  communicationOkFlag?: boolean;
  fraudPreventionFlag?: boolean;
};

export const poiStatus1Schema: Schema<PoiStatus1> = s.object<PoiStatus1>({
  globalStatus: globalStatus1Schema,
  securityOkFlag: s.optional(s.boolean()),
  pedokFlag: s.optional(s.boolean()),
  cardReaderOkFlag: s.optional(s.boolean()),
  printerStatus: s.optional(s.lazy(() => printerStatus1Schema)),
  communicationOkFlag: s.optional(s.boolean()),
  fraudPreventionFlag: s.optional(s.boolean()),
  _keysMap: {
    globalStatus: "GlobalStatus",
    securityOkFlag: "SecurityOKFlag",
    pedokFlag: "PEDOKFlag",
    cardReaderOkFlag: "CardReaderOKFlag",
    printerStatus: "PrinterStatus",
    communicationOkFlag: "CommunicationOKFlag",
    fraudPreventionFlag: "FraudPreventionFlag",
  },
});
