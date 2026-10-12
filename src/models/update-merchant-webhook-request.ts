import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSettings1Schema, type AdditionalSettings1 } from "./additional-settings1.js";
import { communicationFormatSchema, type CommunicationFormat } from "./communication-format.js";
import { encryptionProtocolSchema, type EncryptionProtocol } from "./encryption-protocol.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";

export type UpdateMerchantWebhookRequest = {
  /** Indicates if expired SSL certificates are accepted. Default value: **false**. */
  acceptsExpiredCertificate?: boolean;
  /** Indicates if self-signed SSL certificates are accepted. Default value: **false**. */
  acceptsSelfSignedCertificate?: boolean;
  /** Indicates if untrusted SSL certificates are accepted. Default value: **false**. */
  acceptsUntrustedRootCertificate?: boolean;
  /**
   * Indicates if the webhook configuration is active. The field must be **true** for us to send
   * webhooks about events related an account.
   */
  active?: boolean;
  /**
   * Additional shopper and transaction information to be included in your [standard
   * webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes).
   * Find out more about the available [additional
   * settings](https://docs.adyen.com/development-resources/webhooks/additional-settings).
   */
  additionalSettings?: AdditionalSettings1;
  /**
   * Format or protocol for receiving webhooks. Possible values:
   * * **soap**
   * * **http**
   * * **json**
   */
  communicationFormat?: CommunicationFormat;
  /** Your description for this webhook configuration. */
  description?: string;
  /**
   * SSL version to access the public webhook URL specified in the `url` field. Possible values:
   * * **TLSv1.3**
   * * **TLSv1.2**
   * * **HTTP** - Only allowed on Test environment.
   *
   * If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
   */
  encryptionProtocol?: EncryptionProtocol;
  /**
   * Network type for Terminal API notification webhooks. Possible values:
   * * **public**
   * * **local**
   *
   * Default Value: **public**.
   */
  networkType?: NetworkType;
  /** Password to access the webhook URL. */
  password?: string;
  /**
   * Indicates if the SOAP action header needs to be populated. Default value: **false**.
   *
   * Only applies if `communicationFormat`: **soap**.
   */
  populateSoapActionHeader?: boolean;
  /**
   * Public URL where webhooks will be sent, for example
   * **https://www.domain.com/webhook-endpoint**.
   */
  url?: string;
  /** Username to access the webhook URL. */
  username?: string;
};

export const updateMerchantWebhookRequestSchema: Schema<UpdateMerchantWebhookRequest> =
  s.object<UpdateMerchantWebhookRequest>({
    acceptsExpiredCertificate: s.optional(s.boolean()),
    acceptsSelfSignedCertificate: s.optional(s.boolean()),
    acceptsUntrustedRootCertificate: s.optional(s.boolean()),
    active: s.optional(s.boolean()),
    additionalSettings: s.optional(s.lazy(() => additionalSettings1Schema)),
    communicationFormat: s.optional(s.lazy(() => communicationFormatSchema)),
    description: s.optional(s.string()),
    encryptionProtocol: s.optional(s.lazy(() => encryptionProtocolSchema)),
    networkType: s.optional(s.lazy(() => networkTypeSchema)),
    password: s.optional(s.string()),
    populateSoapActionHeader: s.optional(s.boolean()),
    url: s.optional(s.string()),
    username: s.optional(s.string()),
  });
