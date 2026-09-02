import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IccResetData = {
  atrValue?: string;
  cardStatusWords?: string;
};

export const iccResetDataSchema: Schema<IccResetData> = s.object<IccResetData>({
  atrValue: s.optional(s.string()),
  cardStatusWords: s.optional(s.string()),
  _keysMap: {
    atrValue: "ATRValue",
    cardStatusWords: "CardStatusWords",
  },
});
