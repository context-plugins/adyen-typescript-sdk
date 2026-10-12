import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalTerminalActionSchema, type ExternalTerminalAction } from "./external-terminal-action.js";

export type ListExternalTerminalActionsResponse = {
  /** The list of terminal actions. */
  data?: ExternalTerminalAction[];
};

export const listExternalTerminalActionsResponseSchema: Schema<ListExternalTerminalActionsResponse> =
  s.object<ListExternalTerminalActionsResponse>({
    data: s.optional(s.array(s.lazy(() => externalTerminalActionSchema))),
  });
