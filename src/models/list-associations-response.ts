import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationListingSchema, type AssociationListing } from "./association-listing.js";
import { link3Schema, type Link3 } from "./link3.js";

export type ListAssociationsResponse = {
  links: Link3;
  data: AssociationListing[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listAssociationsResponseSchema: Schema<ListAssociationsResponse> =
  s.object<ListAssociationsResponse>({
    links: link3Schema,
    data: s.array(s.lazy(() => associationListingSchema)),
    itemsTotal: s.number(),
    pagesTotal: s.number(),
    _keysMap: {
      links: "_links",
    },
  });
