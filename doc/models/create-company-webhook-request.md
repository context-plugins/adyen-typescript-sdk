
# Create Company Webhook Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateCompanyWebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptsExpiredCertificate` | `boolean \| undefined` | Optional | Indicates if expired SSL certificates are accepted. Default value: **false**. |
| `acceptsSelfSignedCertificate` | `boolean \| undefined` | Optional | Indicates if self-signed SSL certificates are accepted. Default value: **false**. |
| `acceptsUntrustedRootCertificate` | `boolean \| undefined` | Optional | Indicates if untrusted SSL certificates are accepted. Default value: **false**. |
| `active` | `boolean` | Required | Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account. |
| `additionalSettings` | [`AdditionalSettings \| undefined`](../../doc/models/additional-settings.md) | Optional | - |
| `communicationFormat` | [`CommunicationFormat`](../../doc/models/communication-format.md) | Required | - |
| `description` | `string \| undefined` | Optional | Your description for this webhook configuration. |
| `encryptionProtocol` | [`EncryptionProtocol \| undefined`](../../doc/models/encryption-protocol.md) | Optional | - |
| `filterMerchantAccountType` | [`FilterMerchantAccountType`](../../doc/models/filter-merchant-account-type.md) | Required | - |
| `filterMerchantAccounts` | `string[]` | Required | A list of merchant account names that are included or excluded from receiving the webhook. Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.<br><br>Required if `filterMerchantAccountType` is either:<br><br>* **includeAccounts**<br>* **excludeAccounts**<br><br>Not needed for `filterMerchantAccountType`: **allAccounts**. |
| `networkType` | [`NetworkType \| undefined`](../../doc/models/network-type.md) | Optional | - |
| `password` | `string \| undefined` | Optional | Password to access the webhook URL. |
| `populateSoapActionHeader` | `boolean \| undefined` | Optional | Indicates if the SOAP action header needs to be populated. Default value: **false**.<br><br>Only applies if `communicationFormat`: **soap**. |
| `type` | `string` | Required | The type of webhook that is being created. Possible values are:<br><br>- **standard**<br>- **account-settings-notification**<br>- **banktransfer-notification**<br>- **boletobancario-notification**<br>- **directdebit-notification**<br>- **ach-notification-of-change-notification**<br>- **direct-debit-notice-of-change-notification**<br>- **pending-notification**<br>- **ideal-notification**<br>- **ideal-pending-notification**<br>- **report-notification**<br>- **rreq-notification**<br>- **terminal-settings**<br>- **terminal-boarding**<br><br>Find out more about [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes) and [other types of webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#other-webhooks). |
| `url` | `string` | Required | Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**. |
| `username` | `string \| undefined` | Optional | Username to access the webhook URL.<br><br>**Constraints**: *Maximum Length*: `255` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CommunicationFormat,
  CreateCompanyWebhookRequest,
  FilterMerchantAccountType,
} from 'adyen';

const createCompanyWebhookRequest: CreateCompanyWebhookRequest = {
  active: false,
  communicationFormat: CommunicationFormat.Http,
  filterMerchantAccountType: FilterMerchantAccountType.IncludeAccounts,
  filterMerchantAccounts: [
    'filterMerchantAccounts0'
  ],
  type: 'type8',
  url: 'http://www.adyen.com',
  acceptsExpiredCertificate: false,
  acceptsSelfSignedCertificate: false,
  acceptsUntrustedRootCertificate: false,
  additionalSettings: {
    includeEventCodes: [
      'includeEventCodes8'
    ],
    properties: {
      'key0': false,
      'key1': true
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

