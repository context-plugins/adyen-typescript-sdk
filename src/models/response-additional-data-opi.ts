import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataOpi = {
  opiTransToken?: string;
};

export const responseAdditionalDataOpiSchema: Schema<ResponseAdditionalDataOpi> =
  s.object<ResponseAdditionalDataOpi>({
    opiTransToken: s.optional(s.string()),
    _keysMap: {
      opiTransToken: "opi.transToken",
    },
  });
