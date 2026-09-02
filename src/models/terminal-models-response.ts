import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type TerminalModelsResponse = {
  data?: Item[];
};

export const terminalModelsResponseSchema: Schema<TerminalModelsResponse> = s.object<TerminalModelsResponse>({
  data: s.optional(s.array(s.lazy(() => itemSchema))),
});
