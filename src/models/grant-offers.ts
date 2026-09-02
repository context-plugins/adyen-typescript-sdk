import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantOfferSchema, type GrantOffer } from "./grant-offer.js";

export type GrantOffers = {
  grantOffers: GrantOffer[];
};

export const grantOffersSchema: Schema<GrantOffers> = s.object<GrantOffers>({
  grantOffers: s.array(s.lazy(() => grantOfferSchema)),
});
