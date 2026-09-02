import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type43Schema, type Type43 } from "./type43.js";

export type InstallAndroidCertificateDetails = {
  certificateId?: string;
  type?: Type43;
};

export const installAndroidCertificateDetailsSchema: Schema<InstallAndroidCertificateDetails> =
  s.object<InstallAndroidCertificateDetails>({
    certificateId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type43Schema)),
  });
