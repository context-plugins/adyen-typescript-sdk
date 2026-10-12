import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement1Schema, type LinksElement1 } from "./links-element1.js";
import { linksElement2Schema, type LinksElement2 } from "./links-element2.js";
import { linksElement3Schema, type LinksElement3 } from "./links-element3.js";
import { linksElement4Schema, type LinksElement4 } from "./links-element4.js";
import { linksElement5Schema, type LinksElement5 } from "./links-element5.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type ApiCredentialLinks = {
  /** List of allowed origins. */
  allowedOrigins?: LinksElement1;
  /**
   * Company account that the API credential is linked to. Only present for company-level webhooks.
   */
  company?: LinksElement2;
  /**
   * Generates a new API key. When you generate a new one, the existing key remains valid for 24
   * hours.
   */
  generateApiKey?: LinksElement3;
  /**
   * Generates a new client key, used to authenticate client-side requests. When you generate a new
   * one, the existing key remains valid for 24 hours.
   */
  generateClientKey?: LinksElement4;
  /**
   * The merchant account that the API credential is linked to. Only present for merchant-level API
   * credentials.
   */
  merchant?: LinksElement5;
  /** Link to the resource itself. */
  self: LinksElement6;
};

export const apiCredentialLinksSchema: Schema<ApiCredentialLinks> = s.object<ApiCredentialLinks>({
  allowedOrigins: s.optional(s.lazy(() => linksElement1Schema)),
  company: s.optional(s.lazy(() => linksElement2Schema)),
  generateApiKey: s.optional(s.lazy(() => linksElement3Schema)),
  generateClientKey: s.optional(s.lazy(() => linksElement4Schema)),
  merchant: s.optional(s.lazy(() => linksElement5Schema)),
  self: linksElement6Schema,
});
