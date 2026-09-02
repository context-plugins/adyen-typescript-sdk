import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalProductSchema, type TerminalProduct } from "./terminal-product.js";

export type TerminalProductsResponse = {
  data?: TerminalProduct[];
};

export const terminalProductsResponseSchema: Schema<TerminalProductsResponse> =
  s.object<TerminalProductsResponse>({
    data: s.optional(s.array(s.lazy(() => terminalProductSchema))),
  });
