import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalActionScheduleDetail = {
  id?: string;
  terminalId?: string;
};

export const terminalActionScheduleDetailSchema: Schema<TerminalActionScheduleDetail> =
  s.object<TerminalActionScheduleDetail>({
    id: s.optional(s.string()),
    terminalId: s.optional(s.string()),
  });
