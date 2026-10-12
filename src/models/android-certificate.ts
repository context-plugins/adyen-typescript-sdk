import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AndroidCertificate = {
  /** The description that was provided when uploading the certificate. */
  description?: string;
  /**
   * The file format of the certificate, as indicated by the file extension. For example, **.cert**
   * or **.pem**.
   */
  extension?: string;
  /** The unique identifier of the certificate. */
  id: string;
  /** The file name of the certificate. For example, **mycert**. */
  name?: string;
  /** The date when the certificate stops to be valid. */
  notAfter?: Date;
  /** The date when the certificate starts to be valid. */
  notBefore?: Date;
  /** The status of the certificate. */
  status?: string;
};

export const androidCertificateSchema: Schema<AndroidCertificate> = s.object<AndroidCertificate>({
  description: s.optional(s.string()),
  extension: s.optional(s.string()),
  id: s.string(),
  name: s.optional(s.string()),
  notAfter: s.optional(s.dateTime()),
  notBefore: s.optional(s.dateTime()),
  status: s.optional(s.string()),
});
