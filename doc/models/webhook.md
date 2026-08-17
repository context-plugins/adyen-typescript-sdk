
# Webhook

## Structure

`Webhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`WebhookLinks2 \| undefined`](../../doc/models/webhook-links-2.md) | Optional | References to resources connected with this webhook. |
| `acceptsExpiredCertificate` | `boolean \| undefined` | Optional | Indicates if expired SSL certificates are accepted. Default value: **false**. |
| `acceptsSelfSignedCertificate` | `boolean \| undefined` | Optional | Indicates if self-signed SSL certificates are accepted. Default value: **false**. |
| `acceptsUntrustedRootCertificate` | `boolean \| undefined` | Optional | Indicates if untrusted SSL certificates are accepted. Default value: **false**. |
| `accountReference` | `string \| undefined` | Optional | Reference to the account the webook is set on. |
| `active` | `boolean` | Required | Indicates if the webhook configuration is active. The field must be **true** for you to receive webhooks about events related an account. |
| `additionalSettings` | [`AdditionalSettingsResponse1 \| undefined`](../../doc/models/additional-settings-response-1.md) | Optional | Additional shopper and transaction information to be included in your [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes). Find out more about the available [additional settings](https://docs.adyen.com/development-resources/webhooks/additional-settings). |
| `certificateAlias` | `string \| undefined` | Optional | The alias of our SSL certificate. When you receive a notification from us, the alias from the HMAC signature will match this alias. |
| `communicationFormat` | [`CommunicationFormatEnum`](../../doc/models/communication-format-enum.md) | Required | Format or protocol for receiving webhooks. Possible values:<br><br>* **soap**<br>* **http**<br>* **json** |
| `description` | `string \| undefined` | Optional | Your description for this webhook configuration. |
| `encryptionProtocol` | [`EncryptionProtocolEnum \| undefined`](../../doc/models/encryption-protocol-enum.md) | Optional | SSL version to access the public webhook URL specified in the `url` field. Possible values:<br><br>* **TLSv1.3**<br>* **TLSv1.2**<br>* **HTTP** - Only allowed on Test environment.<br><br>If not specified, the webhook will use `sslVersion`: **TLSv1.2**. |
| `filterMerchantAccountType` | [`FilterMerchantAccountType1Enum \| undefined`](../../doc/models/filter-merchant-account-type-1-enum.md) | Optional | Shows how merchant accounts are included in company-level webhooks. Possible values:<br><br>* **includeAccounts**<br>* **excludeAccounts**<br>* **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`. |
| `filterMerchantAccounts` | `string[] \| undefined` | Optional | A list of merchant account names that are included or excluded from receiving the webhook. Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.<br><br>Required if `filterMerchantAccountType` is either:<br><br>* **includeAccounts**<br>* **excludeAccounts**<br><br>Not needed for `filterMerchantAccountType`: **allAccounts**. |
| `hasError` | `boolean \| undefined` | Optional | Indicates if the webhook configuration has errors that need troubleshooting. If the value is **true**, troubleshoot the configuration using the [testing endpoint](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookid}/test). |
| `hasPassword` | `boolean \| undefined` | Optional | Indicates if the webhook is password protected. |
| `hmacKeyCheckValue` | `string \| undefined` | Optional | The [checksum](https://en.wikipedia.org/wiki/Key_checksum_value) of the HMAC key generated for this webhook. You can use this value to uniquely identify the HMAC key configured for this webhook. |
| `id` | `string \| undefined` | Optional | Unique identifier for this webhook. |
| `networkType` | [`NetworkType2Enum \| undefined`](../../doc/models/network-type-2-enum.md) | Optional | Network type for Terminal API details webhooks. |
| `populateSoapActionHeader` | `boolean \| undefined` | Optional | Indicates if the SOAP action header needs to be populated. Default value: **false**.<br><br>Only applies if `communicationFormat`: **soap**. |
| `type` | `string` | Required | The type of webhook. Possible values are:<br><br>- **standard**<br>- **account-settings-notification**<br>- **banktransfer-notification**<br>- **boletobancario-notification**<br>- **directdebit-notification**<br>- **ach-notification-of-change-notification**<br>- **direct-debit-notice-of-change-notification**<br>- **pending-notification**<br>- **ideal-notification**<br>- **ideal-pending-notification**<br>- **report-notification**<br>- **terminal-api-notification**<br>- **terminal-settings**<br>- **terminal-boarding**<br><br>Find out more about [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes) and [other types of webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#other-webhooks). |
| `url` | `string` | Required | Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**. |
| `username` | `string \| undefined` | Optional | Username to access the webhook URL. |

## Example

```ts
import {
  CommunicationFormatEnum,
  EncryptionProtocolEnum,
  Webhook,
} from 'adyen';

const webhook: Webhook = {
  active: false,
  communicationFormat: CommunicationFormatEnum.Soap,
  type: 'type8',
  url: 'http://www.adyen.com',
  links: {
    generateHmac: {
      href: 'href6',
    },
    self: {
      href: 'href0',
    },
    testWebhook: {
      href: 'href6',
    },
    company: {
      href: 'href2',
    },
    merchant: {
      href: 'href6',
    },
  },
  acceptsExpiredCertificate: false,
  acceptsSelfSignedCertificate: false,
  acceptsUntrustedRootCertificate: false,
  accountReference: 'accountReference0',
  encryptionProtocol: EncryptionProtocolEnum.EnumTLSv12,
};
```

