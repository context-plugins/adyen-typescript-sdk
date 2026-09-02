import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type CompanyLinks2 = {
  apiCredentials?: LinksElement;
  self: LinksElement6;
  users?: LinksElement;
  webhooks?: LinksElement;
};

export const companyLinks2Schema: Schema<CompanyLinks2> = s.object<CompanyLinks2>({
  apiCredentials: s.optional(s.lazy(() => linksElementSchema)),
  self: linksElement6Schema,
  users: s.optional(s.lazy(() => linksElementSchema)),
  webhooks: s.optional(s.lazy(() => linksElementSchema)),
});
