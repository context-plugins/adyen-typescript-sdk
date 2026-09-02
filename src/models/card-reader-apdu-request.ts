import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardReaderApduRequest = {
  apduClass: string;
  apduInstruction: string;
  apduPar1: string;
  apduPar2: string;
  apduData?: string;
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
