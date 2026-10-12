import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type42, type42Schema } from "./type42.js";

export type InstallAndroidCertificateDetails = {
  /** The unique identifier of the certificate to be installed. */
  certificateId?: string;
  /**
   * Type of terminal action: Install an Android certificate.
   *
   * @default Type42.InstallAndroidCertificate
   */
  type?: Type42;
};

export const installAndroidCertificateDetailsSchema: Schema<InstallAndroidCertificateDetails> =
  s.object<InstallAndroidCertificateDetails>({
    certificateId: s.optional(s.string()),
    type: s.defaulted(type42Schema, Type42.InstallAndroidCertificate),
  });
