import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address12Schema, type Address12 } from "./address12.js";
import { fundingInstrument2Schema, type FundingInstrument2 } from "./funding-instrument2.js";
import { type313Schema, type Type313 } from "./type313.js";

export type UltimatePartyIdentification = {
  address?: Address12;
  dateOfBirth?: string;
  email?: string;
  firstName?: string;
  fullName?: string;
  fundingInstrument?: FundingInstrument2;
  lastName?: string;
  reference?: string;
  type?: Type313;
  url?: string;
};

export const ultimatePartyIdentificationSchema: Schema<UltimatePartyIdentification> =
  s.object<UltimatePartyIdentification>({
    address: s.optional(s.lazy(() => address12Schema)),
    dateOfBirth: s.optional(s.dateOnly()),
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    fundingInstrument: s.optional(s.lazy(() => fundingInstrument2Schema)),
    lastName: s.optional(s.string()),
    reference: s.optional(s.string()),
    type: s.optional(s.lazy(() => type313Schema)),
    url: s.optional(s.string()),
  });
