import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

export type CardReaderApduResponse2 = {
  response: Response11;
  apduData?: string;
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
