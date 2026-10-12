import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * It contains the APDU request to send to the chip of the card, and a possible invitation message
 * to display on the CashierInterface or the CustomerInterface. Content of the Card Reader APDU
 * Request message.
 */
export type CardReaderApduRequest = {
  /**
   * Class field of the APDU command (CLA). APDU request for Card Reader device request. For
   * specific card like synchronous card, a private value should be used in accordance to ISO 7816-
   * 4 (private range D0-FE).
   */
  apduClass: string;
  /** Instruction field of the APDU command (INS). */
  apduInstruction: string;
  /** Parameter 1 field of the APDU command (P1). */
  apduPar1: string;
  /** Parameter 2 field of the APDU command(P2). */
  apduPar2: string;
  /** Data field of the APDU command (Lc + Data). */
  apduData?: string;
  /** Expected length of the data field of the APDU response to the command (Le). */
  apduExpectedLength?: string;
};

export const cardReaderApduRequestSchema: Schema<CardReaderApduRequest> = s.object<CardReaderApduRequest>({
  apduClass: s.string(),
  apduInstruction: s.string(),
  apduPar1: s.string(),
  apduPar2: s.string(),
  apduData: s.optional(s.string()),
  apduExpectedLength: s.optional(s.string()),
  _keysMap: {
    apduClass: "APDUClass",
    apduInstruction: "APDUInstruction",
    apduPar1: "APDUPar1",
    apduPar2: "APDUPar2",
    apduData: "APDUData",
    apduExpectedLength: "APDUExpectedLength",
  },
});
