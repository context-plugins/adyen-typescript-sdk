import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AndroidCertificate = {
  description?: string;
  extension?: string;
  id: string;
  name?: string;
  notAfter?: Date;
  notBefore?: Date;
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
