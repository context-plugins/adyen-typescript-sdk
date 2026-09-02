import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExchangeSide = {
  Buy: "buy",
  Sell: "sell",
} as const;
export type ExchangeSide = (typeof ExchangeSide)[keyof typeof ExchangeSide] | (string & {});

export const exchangeSideSchema: EnumSchema<ExchangeSide> = s.enumOf<ExchangeSide>(ExchangeSide);
