import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type ScheduleAccountUpdaterRequest = {
  /** This field contains additional data, which may be required for a particular request. */
  additionalData?: Record<string, string>;
  /**
   * Credit card data.
   *
   * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.
   */
  card?: Card;
  /** Account of the merchant. */
  merchantAccount: string;
  /** A reference that merchants can apply for the call. */
  reference: string;
  /**
   * The selected detail recurring reference.
   *
   * Optional if `card` is provided.
   */
  selectedRecurringDetailReference?: string;
  /**
   * The reference of the shopper that owns the recurring contract.
   *
   * Optional if `card` is provided.
   */
  shopperReference?: string;
};

export const scheduleAccountUpdaterRequestSchema: Schema<ScheduleAccountUpdaterRequest> =
  s.object<ScheduleAccountUpdaterRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    card: s.optional(s.lazy(() => cardSchema)),
    merchantAccount: s.string(),
    reference: s.string(),
    selectedRecurringDetailReference: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
  });
