import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CertificateLoadingResponse = {
  id?: string;
  installationId?: string;
  merchantAccount?: string;
  sdkData?: string;
  store?: string;
};

export const certificateLoadingResponseSchema: Schema<CertificateLoadingResponse> =
  s.object<CertificateLoadingResponse>({
    id: s.optional(s.string()),
    installationId: s.optional(s.string()),
    merchantAccount: s.optional(s.string()),
    sdkData: s.optional(s.string()),
    store: s.optional(s.string()),
  });
