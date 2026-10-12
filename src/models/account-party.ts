import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identity2Schema, type Identity2 } from "./identity2.js";
import { partyRole2Schema, type PartyRole2 } from "./party-role2.js";

export type AccountParty = {
  /** Contains the identity details of the party. */
  identity: Identity2;
  /** Specifies a role or capacity of the party in relation to the bank account. */
  role: PartyRole2;
};

export const accountPartySchema: Schema<AccountParty> = s.object<AccountParty>({
  identity: identity2Schema,
  role: partyRole2Schema,
});
