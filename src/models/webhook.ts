import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalSettingsResponse1Schema,
  type AdditionalSettingsResponse1,
} from "./additional-settings-response1.js";
import { communicationFormatSchema, type CommunicationFormat } from "./communication-format.js";
import { encryptionProtocolSchema, type EncryptionProtocol } from "./encryption-protocol.js";
import {
  filterMerchantAccountType1Schema,
  type FilterMerchantAccountType1,
} from "./filter-merchant-account-type1.js";
import { networkType2Schema, type NetworkType2 } from "./network-type2.js";
import { webhookLinks2Schema, type WebhookLinks2 } from "./webhook-links2.js";

export type Webhook = {
  /** References to resources connected with this webhook. */
  links?: WebhookLinks2;
  /** Indicates if expired SSL certificates are accepted. Default value: **false**. */
  acceptsExpiredCertificate?: boolean;
  /** Indicates if self-signed SSL certificates are accepted. Default value: **false**. */
  acceptsSelfSignedCertificate?: boolean;
  /** Indicates if untrusted SSL certificates are accepted. Default value: **false**. */
  acceptsUntrustedRootCertificate?: boolean;
  /** Reference to the account the webook is set on. */
  accountReference?: string;
  /**
   * Indicates if the webhook configuration is active. The field must be **true** for you to receive
   * webhooks about events related an account.
   */
  active: boolean;
  /**
   * Additional shopper and transaction information to be included in your [standard
   * webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes).
   * Find out more about the available [additional
   * settings](https://docs.adyen.com/development-resources/webhooks/additional-settings).
   */
  additionalSettings?: AdditionalSettingsResponse1;
  /**
   * The alias of our SSL certificate. When you receive a notification from us, the alias from the
   * HMAC signature will match this alias.
   */
  certificateAlias?: string;
  /**
   * Format or protocol for receiving webhooks. Possible values:
   * * **soap**
   * * **http**
   * * **json**
   */
  communicationFormat: CommunicationFormat;
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
   * Shows how merchant accounts are included in company-level webhooks. Possible values:
   * * **includeAccounts**
   * * **excludeAccounts**
   * * **allAccounts**: Includes all merchant accounts, and does not require specifying
   *   `filterMerchantAccounts`.
   */
  filterMerchantAccountType?: FilterMerchantAccountType1;
  /**
   * A list of merchant account names that are included or excluded from receiving the webhook.
   * Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.
   *
   * Required if `filterMerchantAccountType` is either:
   * * **includeAccounts**
   * * **excludeAccounts**
   *
   * Not needed for `filterMerchantAccountType`: **allAccounts**.
   */
  filterMerchantAccounts?: string[];
  /**
   * Indicates if the webhook configuration has errors that need troubleshooting. If the value is
   * **true**, troubleshoot the configuration using the [testing
   * endpoint](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookid}/test).
   */
  hasError?: boolean;
  /** Indicates if the webhook is password protected. */
  hasPassword?: boolean;
  /**
   * The [checksum](https://en.wikipedia.org/wiki/Key_checksum_value) of the HMAC key generated for
   * this webhook. You can use this value to uniquely identify the HMAC key configured for this
   * webhook.
   */
  hmacKeyCheckValue?: string;
  /** Unique identifier for this webhook. */
  id?: string;
  /** Network type for Terminal API details webhooks. */
  networkType?: NetworkType2;
  /**
   * Indicates if the SOAP action header needs to be populated. Default value: **false**.
   *
   * Only applies if `communicationFormat`: **soap**.
   */
  populateSoapActionHeader?: boolean;
  /**
   * The type of webhook. Possible values are:
   *
   * - **standard**
   * - **account-settings-notification**
   * - **banktransfer-notification**
   * - **boletobancario-notification**
   * - **directdebit-notification**
   * - **ach-notification-of-change-notification**
   * - **direct-debit-notice-of-change-notification**
   * - **pending-notification**
   * - **ideal-notification**
   * - **ideal-pending-notification**
   * - **report-notification**
   * - **terminal-api-notification**
   * - **terminal-settings**
   * - **terminal-boarding**
   *
   * Find out more about [standard
   * webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes) and
   * [other types of
   * webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#other-webhooks).
   */
  type: string;
  /**
   * Public URL where webhooks will be sent, for example
   * **https://www.domain.com/webhook-endpoint**.
   */
  url: string;
  /** Username to access the webhook URL. */
  username?: string;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>({
  links: s.optional(s.lazy(() => webhookLinks2Schema)),
  acceptsExpiredCertificate: s.optional(s.boolean()),
  acceptsSelfSignedCertificate: s.optional(s.boolean()),
  acceptsUntrustedRootCertificate: s.optional(s.boolean()),
  accountReference: s.optional(s.string()),
  active: s.boolean(),
  additionalSettings: s.optional(s.lazy(() => additionalSettingsResponse1Schema)),
  certificateAlias: s.optional(s.string()),
  communicationFormat: communicationFormatSchema,
  description: s.optional(s.string()),
  encryptionProtocol: s.optional(s.lazy(() => encryptionProtocolSchema)),
  filterMerchantAccountType: s.optional(s.lazy(() => filterMerchantAccountType1Schema)),
  filterMerchantAccounts: s.optional(s.array(s.string())),
  hasError: s.optional(s.boolean()),
  hasPassword: s.optional(s.boolean()),
  hmacKeyCheckValue: s.optional(s.string()),
  id: s.optional(s.string()),
  networkType: s.optional(s.lazy(() => networkType2Schema)),
  populateSoapActionHeader: s.optional(s.boolean()),
  type: s.string(),
  url: s.string(),
  username: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
