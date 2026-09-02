import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExchangeSide2 = {
  Buy: "buy",
  Sell: "sell",
} as const;
export type ExchangeSide2 = (typeof ExchangeSide2)[keyof typeof ExchangeSide2] | (string & {});

export const exchangeSide2Schema: EnumSchema<ExchangeSide2> = s.enumOf<ExchangeSide2>(ExchangeSide2);
