import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifier2Schema, type DocumentQualifier2 } from "./document-qualifier2.js";
import { response11Schema, type Response11 } from "./response11.js";

export type PrintResponse2 = {
  documentQualifier: DocumentQualifier2;
  response: Response11;
};

export const printResponse2Schema: Schema<PrintResponse2> = s.object<PrintResponse2>({
  documentQualifier: documentQualifier2Schema,
  response: response11Schema,
  _keysMap: {
    documentQualifier: "DocumentQualifier",
    response: "Response",
  },
});
