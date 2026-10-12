import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pciDocumentInfoSchema, type PciDocumentInfo } from "./pci-document-info.js";

export type GetPciQuestionnaireInfosResponse = {
  /** Information about the signed PCI questionnaires. */
  data?: PciDocumentInfo[];
};

export const getPciQuestionnaireInfosResponseSchema: Schema<GetPciQuestionnaireInfosResponse> =
  s.object<GetPciQuestionnaireInfosResponse>({
    data: s.optional(s.array(s.lazy(() => pciDocumentInfoSchema))),
  });
