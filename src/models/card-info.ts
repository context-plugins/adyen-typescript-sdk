import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";
import { cardConfiguration2Schema, type CardConfiguration2 } from "./card-configuration2.js";
import { deliveryContact1Schema, type DeliveryContact1 } from "./delivery-contact1.js";
import { formFactor1Schema, type FormFactor1 } from "./form-factor1.js";

export type CardInfo = {
  /**
   * Contains the card user's password and mobile phone number. This is required when you issue
   * cards that can be used to make online payments within the EEA and the UK, or can be added to
   * digital wallets. Refer to [3D Secure and digital
   * wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.
   */
  authentication?: Authentication1;
  /** The brand of the physical or the virtual card. Possible values: **visa**, **mc**. */
  brand: string;
  /**
   * The brand variant of the physical or the virtual card. For example, **visadebit** or
   * **mcprepaid**. >Reach out to your Adyen contact to get the values relevant for your
   * integration.
   */
  brandVariant: string;
  /** The name of the cardholder. Maximum length: 26 characters. */
  cardholderName: string;
  /**
   * Contains information about the configuration profile for your cards. The configuration profile
   * consists of settings required when creating a physical or a virtual card. You identify a
   * configuration profile with its `configurationProfileId`.
   *
   * When you provide this field in a request, you can override the settings of an existing
   * configuration profile.
   *
   * Reach out to your Adyen contact to get the values that you can send in this object.
   */
  configuration?: CardConfiguration2;
  /** The delivery contact (name and address) for physical card delivery. */
  deliveryContact?: DeliveryContact1;
  /** The form factor of the card. Possible values: **virtual**, **physical**. */
  formFactor: FormFactor1;
  /**
   * The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**,
   * **secureCorporate**. > Reach out to your Adyen contact to get the values relevant for your
   * integration.
   */
  threeDSecure?: string;
  /**
   * Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.
   *
   * > Reach out to your Adyen contact to determine the value relevant for your integration.
   */
  usage?: string;
};

export const cardInfoSchema: Schema<CardInfo> = s.object<CardInfo>({
  authentication: s.optional(s.lazy(() => authentication1Schema)),
  brand: s.string(),
  brandVariant: s.string(),
  cardholderName: s.string(),
  configuration: s.optional(s.lazy(() => cardConfiguration2Schema)),
  deliveryContact: s.optional(s.lazy(() => deliveryContact1Schema)),
  formFactor: formFactor1Schema,
  threeDSecure: s.optional(s.string()),
  usage: s.optional(s.string()),
});
