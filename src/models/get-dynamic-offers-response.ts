import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dynamicOfferSchema, type DynamicOffer } from "./dynamic-offer.js";

export type GetDynamicOffersResponse = {
  dynamicOffers: DynamicOffer[];
};

export const getDynamicOffersResponseSchema: Schema<GetDynamicOffersResponse> =
  s.object<GetDynamicOffersResponse>({
    dynamicOffers: s.array(s.lazy(() => dynamicOfferSchema)),
  });
