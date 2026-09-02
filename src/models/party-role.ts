import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartyRole = {
  Holder: "HOLDER",
  AuthorizedUser: "AUTHORIZED_USER",
  Other: "OTHER",
  Unknown: "UNKNOWN",
} as const;
export type PartyRole = (typeof PartyRole)[keyof typeof PartyRole] | (string & {});

export const partyRoleSchema: EnumSchema<PartyRole> = s.enumOf<PartyRole>(PartyRole);
