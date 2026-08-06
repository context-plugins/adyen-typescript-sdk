
# Update Merchant Webhook Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateMerchantWebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptsExpiredCertificate` | `boolean \| undefined` | Optional | Indicates if expired SSL certificates are accepted. Default value: **false**. |
| `acceptsSelfSignedCertificate` | `boolean \| undefined` | Optional | Indicates if self-signed SSL certificates are accepted. Default value: **false**. |
| `acceptsUntrustedRootCertificate` | `boolean \| undefined` | Optional | Indicates if untrusted SSL certificates are accepted. Default value: **false**. |
| `active` | `boolean \| undefined` | Optional | Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account. |
| `additionalSettings` | [`AdditionalSettings \| undefined`](../../doc/models/additional-settings.md) | Optional | - |
| `communicationFormat` | [`CommunicationFormat \| undefined`](../../doc/models/communication-format.md) | Optional | - |
| `description` | `string \| undefined` | Optional | Your description for this webhook configuration. |
| `encryptionProtocol` | [`EncryptionProtocol \| undefined`](../../doc/models/encryption-protocol.md) | Optional | - |
| `networkType` | [`NetworkType \| undefined`](../../doc/models/network-type.md) | Optional | - |
| `password` | `string \| undefined` | Optional | Password to access the webhook URL. |
| `populateSoapActionHeader` | `boolean \| undefined` | Optional | Indicates if the SOAP action header needs to be populated. Default value: **false**.<br><br>Only applies if `communicationFormat`: **soap**. |
| `url` | `string \| undefined` | Optional | Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**. |
| `username` | `string \| undefined` | Optional | Username to access the webhook URL.<br><br>**Constraints**: *Maximum Length*: `255` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateMerchantWebhookRequest } from 'adyen';

const updateMerchantWebhookRequest: UpdateMerchantWebhookRequest = {
  acceptsExpiredCertificate: false,
  acceptsSelfSignedCertificate: false,
  acceptsUntrustedRootCertificate: false,
  active: false,
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
  url: 'http://www.adyen.com',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

