import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status15Schema, type Status15 } from "./status15.js";

export type ConfirmationTrackingData = {
  /**
   * The status of the transfer.
   *
   * Possible values:
   *
   *  - **credited**: the funds are credited to your user's transfer instrument or bank account.-
   *    **accepted**: the request is accepted by the integration.
   */
  status: Status15;
  /**
   * The type of the tracking event.
   *
   * Possible values:
   *
   *  - **confirmation**: the transfer passed Adyen's internal review.
   *
   * @default "confirmation"
   */
  type?: "confirmation";
};

export const confirmationTrackingDataSchema: Schema<ConfirmationTrackingData> =
  s.object<ConfirmationTrackingData>({
    status: status15Schema,
    type: s.defaulted(s.literal("confirmation"), "confirmation"),
  });
