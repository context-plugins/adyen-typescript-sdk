import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links2Schema, type Links2 } from "./links2.js";

export type AllowedOrigin = {
  /** References to resources linked to the allowed origin. */
  links?: Links2;
  /** Domain of the allowed origin. */
  domain: string;
  /** Unique identifier of the allowed origin. */
  id?: string;
};

export const allowedOriginSchema: Schema<AllowedOrigin> = s.object<AllowedOrigin>({
  links: s.optional(s.lazy(() => links2Schema)),
  domain: s.string(),
  id: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
