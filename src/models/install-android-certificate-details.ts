import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type42Schema, type Type42 } from "./type42.js";

export type InstallAndroidCertificateDetails = {
  certificateId?: string;
  type?: Type42;
};

export const installAndroidCertificateDetailsSchema: Schema<InstallAndroidCertificateDetails> =
  s.object<InstallAndroidCertificateDetails>({
    certificateId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type42Schema)),
  });
