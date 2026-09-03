import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address12Schema, type Address12 } from "./address12.js";
import { type112Schema, type Type112 } from "./type112.js";

export type PartyIdentification = {
  address?: Address12;
  dateOfBirth?: string;
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  reference?: string;
  type?: Type112;
  url?: string;
};

export const partyIdentificationSchema: Schema<PartyIdentification> = s.object<PartyIdentification>({
  address: s.optional(s.lazy(() => address12Schema)),
  dateOfBirth: s.optional(s.dateOnly()),
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  fullName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  type: s.optional(s.lazy(() => type112Schema)),
  url: s.optional(s.string()),
});
