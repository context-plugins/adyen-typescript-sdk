import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSalesChannelSchema, type AdditionalSalesChannel } from "./additional-sales-channel.js";

export type CalculatePciStatusRequest = {
  additionalSalesChannels?: AdditionalSalesChannel[];
};

export const calculatePciStatusRequestSchema: Schema<CalculatePciStatusRequest> =
  s.object<CalculatePciStatusRequest>({
    additionalSalesChannels: s.optional(s.array(s.lazy(() => additionalSalesChannelSchema))),
  });
