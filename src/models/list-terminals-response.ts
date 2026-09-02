import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { terminalSchema, type Terminal } from "./terminal.js";

export type ListTerminalsResponse = {
  links?: PaginationLinks1;
  data?: Terminal[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listTerminalsResponseSchema: Schema<ListTerminalsResponse> = s.object<ListTerminalsResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => terminalSchema))),
  itemsTotal: s.number(),
  pagesTotal: s.number(),
  _keysMap: {
    links: "_links",
  },
});
