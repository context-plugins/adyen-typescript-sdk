import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links2Schema, type Links2 } from "./links2.js";

export type CreateAllowedOriginRequest = {
  links?: Links2;
  domain: string;
  id?: string;
};

export const createAllowedOriginRequestSchema: Schema<CreateAllowedOriginRequest> =
  s.object<CreateAllowedOriginRequest>({
    links: s.optional(s.lazy(() => links2Schema)),
    domain: s.string(),
    id: s.optional(s.string()),
    _keysMap: {
      links: "_links",
    },
  });
