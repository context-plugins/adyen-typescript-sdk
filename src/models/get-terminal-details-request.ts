import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetTerminalDetailsRequest = {
  /**
   * The unique terminal ID in the format `[Device model]-[Serial number]`.
   *
   * For example, **V400m-324689776**.
   */
  terminal: string;
};

export const getTerminalDetailsRequestSchema: Schema<GetTerminalDetailsRequest> =
  s.object<GetTerminalDetailsRequest>({
    terminal: s.string(),
  });
