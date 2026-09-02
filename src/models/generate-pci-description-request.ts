import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSalesChannelSchema, type AdditionalSalesChannel } from "./additional-sales-channel.js";

export type GeneratePciDescriptionRequest = {
  additionalSalesChannels?: AdditionalSalesChannel[];
  language?: string;
};

export const generatePciDescriptionRequestSchema: Schema<GeneratePciDescriptionRequest> =
  s.object<GeneratePciDescriptionRequest>({
    additionalSalesChannels: s.optional(s.array(s.lazy(() => additionalSalesChannelSchema))),
    language: s.optional(s.string()),
  });
