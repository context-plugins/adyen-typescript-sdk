import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type113Schema, type Type113 } from "./type113.js";

export type TermsOfServiceAcceptanceInfo = {
  acceptedBy?: string;
  acceptedFor?: string;
  createdAt?: Date;
  id?: string;
  type?: Type113;
  validTo?: Date;
};

export const termsOfServiceAcceptanceInfoSchema: Schema<TermsOfServiceAcceptanceInfo> =
  s.object<TermsOfServiceAcceptanceInfo>({
    acceptedBy: s.optional(s.string()),
    acceptedFor: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type113Schema)),
    validTo: s.optional(s.dateTime()),
  });
