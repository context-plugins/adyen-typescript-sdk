import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subMerchantData21Schema, type SubMerchantData21 } from "./sub-merchant-data21.js";

export type CertificateLoadingRequest = {
  merchantAccount: string;
  setupToken: string;
  store?: string;
  subMerchantData?: SubMerchantData21;
};

export const certificateLoadingRequestSchema: Schema<CertificateLoadingRequest> =
  s.object<CertificateLoadingRequest>({
    merchantAccount: s.string(),
    setupToken: s.string(),
    store: s.optional(s.string()),
    subMerchantData: s.optional(s.lazy(() => subMerchantData21Schema)),
  });
