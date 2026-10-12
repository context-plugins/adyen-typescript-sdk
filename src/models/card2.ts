import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";
import { cardConfiguration2Schema, type CardConfiguration2 } from "./card-configuration2.js";
import { deliveryContact1Schema, type DeliveryContact1 } from "./delivery-contact1.js";
import { expiry2Schema, type Expiry2 } from "./expiry2.js";
import { formFactor1Schema, type FormFactor1 } from "./form-factor1.js";

export type Card2 = {
  /**
   * Contains the card user's password and mobile phone number. This is required when you issue
   * cards that can be used to make online payments within the EEA and the UK, or can be added to
   * digital wallets. Refer to [3D Secure and digital
   * wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.
   */
  authentication?: Authentication1;
  /** The bank identification number (BIN) of the card number. */
  bin?: string;
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
  /**
   * The CVC2 value of the card. > The CVC2 is not sent by default. This is only returned in the
   * `POST` response for single-use virtual cards.
   */
  cvc?: string;
  /** The delivery contact (name and address) for physical card delivery. */
  deliveryContact?: DeliveryContact1;
  /** The expiration date of the card. */
  expiration?: Expiry2;
  /** The form factor of the card. Possible values: **virtual**, **physical**. */
  formFactor: FormFactor1;
  /** Last last four digits of the card number. */
  lastFour?: string;
  /**
   * The primary account number (PAN) of the card. > The PAN is masked by default and returned only
   * for single-use virtual cards.
   */
  number?: string;
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

export const card2Schema: Schema<Card2> = s.object<Card2>({
  authentication: s.optional(s.lazy(() => authentication1Schema)),
  bin: s.optional(s.string()),
  brand: s.string(),
  brandVariant: s.string(),
  cardholderName: s.string(),
  configuration: s.optional(s.lazy(() => cardConfiguration2Schema)),
  cvc: s.optional(s.string()),
  deliveryContact: s.optional(s.lazy(() => deliveryContact1Schema)),
  expiration: s.optional(s.lazy(() => expiry2Schema)),
  formFactor: formFactor1Schema,
  lastFour: s.optional(s.string()),
  number: s.optional(s.string()),
  threeDSecure: s.optional(s.string()),
  usage: s.optional(s.string()),
});
