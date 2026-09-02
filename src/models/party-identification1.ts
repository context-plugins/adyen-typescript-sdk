import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address12Schema, type Address12 } from "./address12.js";
import { type313Schema, type Type313 } from "./type313.js";

export type PartyIdentification1 = {
  address?: Address12;
  dateOfBirth?: string;
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  reference?: string;
  type?: Type313;
  url?: string;
};

export const partyIdentification1Schema: Schema<PartyIdentification1> = s.object<PartyIdentification1>({
  address: s.optional(s.lazy(() => address12Schema)),
  dateOfBirth: s.optional(s.dateOnly()),
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  fullName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  type: s.optional(s.lazy(() => type313Schema)),
  url: s.optional(s.string()),
});
