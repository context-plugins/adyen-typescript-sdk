import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associationListingSchema, type AssociationListing } from "./association-listing.js";
import { link3Schema, type Link3 } from "./link3.js";

export type ListAssociationsResponse = {
  /** A list of hyperlinks to resources related to this response. */
  links: Link3;
  /** Contains a list of associations and their corresponding details. */
  data: AssociationListing[];
  /** The total number of items available. */
  itemsTotal: number;
  /** The total number of pages available. */
  pagesTotal: number;
};

export const listAssociationsResponseSchema: Schema<ListAssociationsResponse> =
  s.object<ListAssociationsResponse>({
    links: link3Schema,
    data: s.array(s.lazy(() => associationListingSchema)),
    itemsTotal: s.int(),
    pagesTotal: s.int(),
    _keysMap: {
      links: "_links",
    },
  });
