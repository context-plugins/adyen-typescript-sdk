
# Update Company Webhook Request

## Structure

`UpdateCompanyWebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptsExpiredCertificate` | `boolean \| undefined` | Optional | Indicates if expired SSL certificates are accepted. Default value: **false**. |
| `acceptsSelfSignedCertificate` | `boolean \| undefined` | Optional | Indicates if self-signed SSL certificates are accepted. Default value: **false**. |
| `acceptsUntrustedRootCertificate` | `boolean \| undefined` | Optional | Indicates if untrusted SSL certificates are accepted. Default value: **false**. |
| `active` | `boolean \| undefined` | Optional | Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account. |
| `additionalSettings` | [`AdditionalSettings1 \| undefined`](../../doc/models/additional-settings-1.md) | Optional | Additional shopper and transaction information to be included in your [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes). Find out more about the available [additional settings](https://docs.adyen.com/development-resources/webhooks/additional-settings). |
| `communicationFormat` | [`CommunicationFormatEnum \| undefined`](../../doc/models/communication-format-enum.md) | Optional | Format or protocol for receiving webhooks. Possible values:<br><br>* **soap**<br>* **http**<br>* **json** |
| `description` | `string \| undefined` | Optional | Your description for this webhook configuration. |
| `encryptionProtocol` | [`EncryptionProtocolEnum \| undefined`](../../doc/models/encryption-protocol-enum.md) | Optional | SSL version to access the public webhook URL specified in the `url` field. Possible values:<br><br>* **TLSv1.3**<br>* **TLSv1.2**<br>* **HTTP** - Only allowed on Test environment.<br><br>If not specified, the webhook will use `sslVersion`: **TLSv1.2**. |
| `filterMerchantAccountType` | [`FilterMerchantAccountType2Enum \| undefined`](../../doc/models/filter-merchant-account-type-2-enum.md) | Optional | Shows how merchant accounts are filtered when configuring the webhook. Possible values:<br><br>* **includeAccounts**: The webhook is configured for the merchant accounts listed in `filterMerchantAccounts`.<br>* **excludeAccounts**: The webhook is not configured for the merchant accounts listed in `filterMerchantAccounts`.<br>* **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`. |
| `filterMerchantAccounts` | `string[] \| undefined` | Optional | A list of merchant account names that are included or excluded from receiving the webhook. Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.<br><br>Required if `filterMerchantAccountType` is either:<br><br>* **includeAccounts**<br>* **excludeAccounts**<br><br>Not needed for `filterMerchantAccountType`: **allAccounts**. |
| `networkType` | [`NetworkTypeEnum \| undefined`](../../doc/models/network-type-enum.md) | Optional | Network type for Terminal API notification webhooks. Possible values:<br><br>* **public**<br>* **local**<br><br>Default Value: **public**. |
| `password` | `string \| undefined` | Optional | Password to access the webhook URL. |
| `populateSoapActionHeader` | `boolean \| undefined` | Optional | Indicates if the SOAP action header needs to be populated. Default value: **false**.<br><br>Only applies if `communicationFormat`: **soap**. |
| `url` | `string \| undefined` | Optional | Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**. |
| `username` | `string \| undefined` | Optional | Username to access the webhook URL.<br><br>**Constraints**: *Maximum Length*: `255` |

## Example

```ts
import {
  CommunicationFormatEnum,
  EncryptionProtocolEnum,
  UpdateCompanyWebhookRequest,
} from 'adyen';

const updateCompanyWebhookRequest: UpdateCompanyWebhookRequest = {
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
  },
  communicationFormat: CommunicationFormatEnum.Soap,
  encryptionProtocol: EncryptionProtocolEnum.EnumTLSv12,
  url: 'http://www.adyen.com',
};
```

