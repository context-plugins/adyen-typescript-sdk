import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { globalStatus1Schema, type GlobalStatus1 } from "./global-status1.js";
import { printerStatus1Schema, type PrinterStatus1 } from "./printer-status1.js";

/**
 * Indicate the availability of the POI Terminal components. The data element is absent if the
 * component is not part of the POI Terminal. State of a POI Terminal.
 */
export type PoiStatus = {
  /**
   * Global status of a POI Server or POI Terminal. Possible values:
   * * **Busy**
   * * **Maintenance**
   * * **OK**
   * * **Unreachable**
   */
  globalStatus: GlobalStatus1;
  /**
   * Indicates if the security module of the POI is working and usable. If security module present.
   */
  securityOkFlag?: boolean;
  /** Indicates if the PED is working and usable. If PED present. */
  pedokFlag?: boolean;
  /** Indicates if the card readers are working and usable. If card reader device present. */
  cardReaderOkFlag?: boolean;
  /**
   * Possible values:
   * * **NoPaper**
   * * **OK**
   * * **OutOfOrder**
   * * **PaperJam**
   * * **PaperLow**
   */
  printerStatus?: PrinterStatus1;
  /**
   * Indicates if the communication infrastructure is working and usable. If communication
   * infrastructure present.
   */
  communicationOkFlag?: boolean;
  /**
   * Indicates a suspicion of fraud by the POI System. Could be set to True by the POI system to
   * notify to the Sale system and the Cashier that a suspicion of fraud had been detected on the
   * POI as an unexpected reboot of the POI.
   */
  fraudPreventionFlag?: boolean;
};

export const poiStatusSchema: Schema<PoiStatus> = s.object<PoiStatus>({
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
