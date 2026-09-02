import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status31Schema, type Status31 } from "./status31.js";

export type TerminalConnectivityCellular = {
  iccid?: string;
  iccid2?: string;
  status?: Status31;
};

export const terminalConnectivityCellularSchema: Schema<TerminalConnectivityCellular> =
  s.object<TerminalConnectivityCellular>({
    iccid: s.optional(s.string()),
    iccid2: s.optional(s.string()),
    status: s.optional(s.lazy(() => status31Schema)),
  });
