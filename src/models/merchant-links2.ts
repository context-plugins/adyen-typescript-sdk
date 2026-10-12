import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

/** References to resources connected with this merchant. */
export type MerchantLinks2 = {
  apiCredentials?: LinksElement;
  /** Link to the resource itself. */
  self: LinksElement6;
  users?: LinksElement;
  webhooks?: LinksElement;
};

export const merchantLinks2Schema: Schema<MerchantLinks2> = s.object<MerchantLinks2>({
  apiCredentials: s.optional(s.lazy(() => linksElementSchema)),
  self: linksElement6Schema,
  users: s.optional(s.lazy(() => linksElementSchema)),
  webhooks: s.optional(s.lazy(() => linksElementSchema)),
});
