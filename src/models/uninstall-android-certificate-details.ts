import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type81, type81Schema } from "./type81.js";

export type UninstallAndroidCertificateDetails = {
  /** The unique identifier of the certificate to be uninstalled. */
  certificateId?: string;
  /**
   * Type of terminal action: Uninstall an Android certificate.
   *
   * @default Type81.UninstallAndroidCertificate
   */
  type?: Type81;
};

export const uninstallAndroidCertificateDetailsSchema: Schema<UninstallAndroidCertificateDetails> =
  s.object<UninstallAndroidCertificateDetails>({
    certificateId: s.optional(s.string()),
    type: s.defaulted(type81Schema, Type81.UninstallAndroidCertificate),
  });
