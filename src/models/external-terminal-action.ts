import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalTerminalAction = {
  actionType?: string;
  config?: string;
  confirmedAt?: Date;
  id?: string;
  result?: string;
  scheduledAt?: Date;
  status?: string;
  terminalId?: string;
};

export const externalTerminalActionSchema: Schema<ExternalTerminalAction> = s.object<ExternalTerminalAction>({
  actionType: s.optional(s.string()),
  config: s.optional(s.string()),
  confirmedAt: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  result: s.optional(s.string()),
  scheduledAt: s.optional(s.dateTime()),
  status: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
