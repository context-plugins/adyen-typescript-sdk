import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerOrderReq = {
  Open: "Open",
  Closed: "Closed",
  Both: "Both",
} as const;
export type CustomerOrderReq = (typeof CustomerOrderReq)[keyof typeof CustomerOrderReq] | (string & {});

export const customerOrderReqSchema: EnumSchema<CustomerOrderReq> =
  s.enumOf<CustomerOrderReq>(CustomerOrderReq);
