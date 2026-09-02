import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";

export type CardReaderApduResponse = {
  response: Response11;
  apduData?: string;
  cardStatusWords: string;
};

export const cardReaderApduResponseSchema: Schema<CardReaderApduResponse> = s.object<CardReaderApduResponse>({
  response: response11Schema,
  apduData: s.optional(s.string()),
  cardStatusWords: s.string(),
  _keysMap: {
    response: "Response",
    apduData: "APDUData",
    cardStatusWords: "CardStatusWords",
  },
});
