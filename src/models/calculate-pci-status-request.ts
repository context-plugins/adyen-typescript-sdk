import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSalesChannelSchema, type AdditionalSalesChannel } from "./additional-sales-channel.js";

export type CalculatePciStatusRequest = {
  /**
   * An array of additional sales channels to generate PCI questionnaires. Include the relevant
   * sales channels if you need your user to sign PCI questionnaires. Not required if you [create
   * stores](https://docs.adyen.com/platforms) and [add payment
   * methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the
   * questionnaires.
   *
   * Possible values:
   * * **eCommerce**
   * * **pos**
   * * **ecomMoto**
   * * **posMoto**
   */
  additionalSalesChannels?: AdditionalSalesChannel[];
};

export const calculatePciStatusRequestSchema: Schema<CalculatePciStatusRequest> =
  s.object<CalculatePciStatusRequest>({
    additionalSalesChannels: s.optional(s.array(s.lazy(() => additionalSalesChannelSchema))),
  });
