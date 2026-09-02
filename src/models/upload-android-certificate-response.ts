import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadAndroidCertificateResponse = {
  id?: string;
};

export const uploadAndroidCertificateResponseSchema: Schema<UploadAndroidCertificateResponse> =
  s.object<UploadAndroidCertificateResponse>({
    id: s.optional(s.string()),
  });
