import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetTerminalDetailsRequest = {
  terminal: string;
};

export const getTerminalDetailsRequestSchema: Schema<GetTerminalDetailsRequest> =
  s.object<GetTerminalDetailsRequest>({
    terminal: s.string(),
  });
