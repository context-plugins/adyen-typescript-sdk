
# Create Merchant Webhook Request

## Structure

`CreateMerchantWebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptsExpiredCertificate` | `boolean \| undefined` | Optional | Indicates if expired SSL certificates are accepted. Default value: **false**. |
| `acceptsSelfSignedCertificate` | `boolean \| undefined` | Optional | Indicates if self-signed SSL certificates are accepted. Default value: **false**. |
| `acceptsUntrustedRootCertificate` | `boolean \| undefined` | Optional | Indicates if untrusted SSL certificates are accepted. Default value: **false**. |
| `active` | `boolean` | Required | Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account. |
| `additionalSettings` | [`AdditionalSettings1 \| undefined`](../../doc/models/additional-settings-1.md) | Optional | Additional shopper and transaction information to be included in your [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes). Find out more about the available [additional settings](https://docs.adyen.com/development-resources/webhooks/additional-settings). |
| `communicationFormat` | [`CommunicationFormatEnum`](../../doc/models/communication-format-enum.md) | Required | Format or protocol for receiving webhooks. Possible values:<br><br>* **soap**<br>* **http**<br>* **json** |
| `description` | `string \| undefined` | Optional | Your description for this webhook configuration. |
| `encryptionProtocol` | [`EncryptionProtocolEnum \| undefined`](../../doc/models/encryption-protocol-enum.md) | Optional | SSL version to access the public webhook URL specified in the `url` field. Possible values:<br><br>* **TLSv1.3**<br>* **TLSv1.2**<br>* **HTTP** - Only allowed on Test environment.<br><br>If not specified, the webhook will use `sslVersion`: **TLSv1.2**. |
| `networkType` | [`NetworkTypeEnum \| undefined`](../../doc/models/network-type-enum.md) | Optional | Network type for Terminal API notification webhooks. Possible values:<br><br>* **public**<br>* **local**<br><br>Default Value: **public**. |
| `password` | `string \| undefined` | Optional | Password to access the webhook URL. |
| `populateSoapActionHeader` | `boolean \| undefined` | Optional | Indicates if the SOAP action header needs to be populated. Default value: **false**.<br><br>Only applies if `communicationFormat`: **soap**. |
| `type` | `string` | Required | The type of webhook that is being created. Possible values are:<br><br>- **standard**<br>- **account-settings-notification**<br>- **banktransfer-notification**<br>- **boletobancario-notification**<br>- **directdebit-notification**<br>- **ach-notification-of-change-notification**<br>- **direct-debit-notice-of-change-notification**<br>- **pending-notification**<br>- **ideal-notification**<br>- **ideal-pending-notification**<br>- **report-notification**<br>- **rreq-notification**<br>- **terminal-settings**<br>- **terminal-boarding**<br><br>Find out more about [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes) and [other types of webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#other-webhooks). |
| `url` | `string` | Required | Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**. |
| `username` | `string \| undefined` | Optional | Username to access the webhook URL.<br><br>**Constraints**: *Maximum Length*: `255` |

## Example

```ts
import {
  CommunicationFormatEnum,
  CreateMerchantWebhookRequest,
  EncryptionProtocolEnum,
} from 'adyen';

const createMerchantWebhookRequest: CreateMerchantWebhookRequest = {
  active: false,
  communicationFormat: CommunicationFormatEnum.Soap,
  type: 'type6',
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
  },
  description: 'description6',
  encryptionProtocol: EncryptionProtocolEnum.EnumTLSv12,
};
```

