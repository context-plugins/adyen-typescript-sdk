import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Card Reader APDU Response message. */
export type CardReaderApduResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /** Data field of the APDU command (Lc + Data). */
  apduData?: string;
  /** Status of a smartcard response to a command (SW1-SW2). */
  cardStatusWords: string;
};

export const cardReaderApduResponse2Schema: Schema<CardReaderApduResponse2> =
  s.object<CardReaderApduResponse2>({
    response: response11Schema,
    apduData: s.optional(s.string()),
    cardStatusWords: s.string(),
    _keysMap: {
      response: "Response",
      apduData: "APDUData",
      cardStatusWords: "CardStatusWords",
    },
  });
