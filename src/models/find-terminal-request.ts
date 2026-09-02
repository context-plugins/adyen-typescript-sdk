import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FindTerminalRequest = {
  terminal: string;
};

export const findTerminalRequestSchema: Schema<FindTerminalRequest> = s.object<FindTerminalRequest>({
  terminal: s.string(),
});
