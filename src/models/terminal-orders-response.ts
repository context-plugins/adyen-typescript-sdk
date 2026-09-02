import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalOrderSchema, type TerminalOrder } from "./terminal-order.js";

export type TerminalOrdersResponse = {
  data?: TerminalOrder[];
};

export const terminalOrdersResponseSchema: Schema<TerminalOrdersResponse> = s.object<TerminalOrdersResponse>({
  data: s.optional(s.array(s.lazy(() => terminalOrderSchema))),
});
