import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address12Schema, type Address12 } from "./address12.js";
import { fundingInstrument2Schema, type FundingInstrument2 } from "./funding-instrument2.js";
import { type112Schema, type Type112 } from "./type112.js";

export type UltimatePartyIdentification1 = {
  address?: Address12;
  dateOfBirth?: string;
  email?: string;
  firstName?: string;
  fullName?: string;
  fundingInstrument?: FundingInstrument2;
  lastName?: string;
  reference?: string;
  type?: Type112;
  url?: string;
};

export const ultimatePartyIdentification1Schema: Schema<UltimatePartyIdentification1> =
  s.object<UltimatePartyIdentification1>({
    address: s.optional(s.lazy(() => address12Schema)),
    dateOfBirth: s.optional(s.dateOnly()),
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    fundingInstrument: s.optional(s.lazy(() => fundingInstrument2Schema)),
    lastName: s.optional(s.string()),
    reference: s.optional(s.string()),
    type: s.optional(s.lazy(() => type112Schema)),
    url: s.optional(s.string()),
  });
