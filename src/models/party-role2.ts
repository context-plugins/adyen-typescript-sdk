import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies a role or capacity of the party in relation to the bank account. */
export const PartyRole2 = {
  Holder: "HOLDER",
  AuthorizedUser: "AUTHORIZED_USER",
  Other: "OTHER",
  Unknown: "UNKNOWN",
} as const;
export type PartyRole2 = (typeof PartyRole2)[keyof typeof PartyRole2] | (string & {});

export const partyRole2Schema: EnumSchema<PartyRole2> = s.enumOf<PartyRole2>(PartyRole2);
