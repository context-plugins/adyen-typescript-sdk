import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentQualifier2Schema, type DocumentQualifier2 } from "./document-qualifier2.js";
import { outputContent3Schema, type OutputContent3 } from "./output-content3.js";
import { responseMode1Schema, type ResponseMode1 } from "./response-mode1.js";

export type PrintOutput2 = {
  documentQualifier: DocumentQualifier2;
  responseMode: ResponseMode1;
  integratedPrintFlag?: boolean;
  requiredSignatureFlag?: boolean;
  outputContent: OutputContent3;
};

export const printOutput2Schema: Schema<PrintOutput2> = s.object<PrintOutput2>({
  documentQualifier: documentQualifier2Schema,
  responseMode: responseMode1Schema,
  integratedPrintFlag: s.optional(s.boolean()),
  requiredSignatureFlag: s.optional(s.boolean()),
  outputContent: outputContent3Schema,
  _keysMap: {
    documentQualifier: "DocumentQualifier",
    responseMode: "ResponseMode",
    integratedPrintFlag: "IntegratedPrintFlag",
    requiredSignatureFlag: "RequiredSignatureFlag",
    outputContent: "OutputContent",
  },
});
