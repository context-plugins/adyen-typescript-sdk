import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { androidCertificateSchema, type AndroidCertificate } from "./android-certificate.js";

export type AndroidCertificatesResponse = {
  data?: AndroidCertificate[];
};

export const androidCertificatesResponseSchema: Schema<AndroidCertificatesResponse> =
  s.object<AndroidCertificatesResponse>({
    data: s.optional(s.array(s.lazy(() => androidCertificateSchema))),
  });
