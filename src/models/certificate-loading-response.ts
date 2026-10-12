import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CertificateLoadingResponse = {
  /** The unique identifier of the communication session. */
  id?: string;
  /**
   * The unique identifier of the SDK installation. If you create the [Terminal
   * API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction
   * request on your backend, use this as the `POIID` in the `MessageHeader` of the request.
   */
  installationId?: string;
  /** The unique identifier of your merchant account. */
  merchantAccount?: string;
  /**
   * The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass
   * this value to your POS app.
   */
  sdkData?: string;
  /** The reference of the store that the transactions are processed for. */
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
