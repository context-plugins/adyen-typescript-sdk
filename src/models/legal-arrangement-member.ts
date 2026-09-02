import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LegalArrangementMember = {
  Beneficiary: "Beneficiary",
  ControllingPerson: "ControllingPerson",
  Partner: "Partner",
  Protector: "Protector",
  Settlor: "Settlor",
  Shareholder: "Shareholder",
  Trustee: "Trustee",
} as const;
export type LegalArrangementMember =
  | (typeof LegalArrangementMember)[keyof typeof LegalArrangementMember]
  | (string & {});

export const legalArrangementMemberSchema: EnumSchema<LegalArrangementMember> =
  s.enumOf<LegalArrangementMember>(LegalArrangementMember);
