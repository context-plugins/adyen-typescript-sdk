import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSalesChannelSchema, type AdditionalSalesChannel } from "./additional-sales-channel.js";

export type GeneratePciDescriptionRequest = {
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
  /**
   * Sets the language of the PCI questionnaire. Its value is a two-character [ISO
   * 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, for example, **en**.
   */
  language?: string;
};

export const generatePciDescriptionRequestSchema: Schema<GeneratePciDescriptionRequest> =
  s.object<GeneratePciDescriptionRequest>({
    additionalSalesChannels: s.optional(s.array(s.lazy(() => additionalSalesChannelSchema))),
    language: s.optional(s.string()),
  });
