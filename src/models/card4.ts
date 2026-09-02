import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardIdentification3Schema, type CardIdentification3 } from "./card-identification3.js";
import { partyIdentification1Schema, type PartyIdentification1 } from "./party-identification1.js";

export type Card4 = {
  cardHolder: PartyIdentification1;
  cardIdentification: CardIdentification3;
};

export const card4Schema: Schema<Card4> = s.object<Card4>({
  cardHolder: partyIdentification1Schema,
  cardIdentification: cardIdentification3Schema,
});
