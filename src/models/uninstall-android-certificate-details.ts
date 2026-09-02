import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type81Schema, type Type81 } from "./type81.js";

export type UninstallAndroidCertificateDetails = {
  certificateId?: string;
  type?: Type81;
};

export const uninstallAndroidCertificateDetailsSchema: Schema<UninstallAndroidCertificateDetails> =
  s.object<UninstallAndroidCertificateDetails>({
    certificateId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type81Schema)),
  });
