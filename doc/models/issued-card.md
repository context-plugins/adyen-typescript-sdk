
# Issued Card

## Structure

`IssuedCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationType` | `string \| undefined` | Optional | The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation** |
| `panEntryMode` | [`PanEntryModeEnum \| undefined`](../../doc/models/pan-entry-mode-enum.md) | Optional | Indicates the method used for entering the PAN to initiate a transaction.<br><br>Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**. |
| `processingType` | [`ProcessingType1Enum \| undefined`](../../doc/models/processing-type-1-enum.md) | Optional | Contains information about how the payment was processed.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**. |
| `relayedAuthorisationData` | [`RelayedAuthorisationData2 \| undefined`](../../doc/models/relayed-authorisation-data-2.md) | Optional | If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server. |
| `schemeTraceId` | `string \| undefined` | Optional | The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments. |
| `schemeUniqueTransactionId` | `string \| undefined` | Optional | The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme. |
| `threeDSecure` | [`ThreeDSecure2 \| undefined`](../../doc/models/three-d-secure-2.md) | Optional | The data of the result from the 3DS authentication. |
| `type` | [`Type511Enum \| undefined`](../../doc/models/type-511-enum.md) | Optional | **issuedCard**<br><br>**Default**: `Type511Enum.IssuedCard` |
| `validationFacts` | [`TransferNotificationValidationFact[] \| undefined`](../../doc/models/transfer-notification-validation-fact.md) | Optional | The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information. |

## Example

```ts
import {
  IssuedCard,
  PanEntryModeEnum,
  ProcessingType1Enum,
  Type511Enum,
} from 'adyen';

const issuedCard: IssuedCard = {
  authorisationType: 'authorisationType6',
  panEntryMode: PanEntryModeEnum.Manual,
  processingType: ProcessingType1Enum.Ecommerce,
  relayedAuthorisationData: {
    metadata: {
      'key0': 'metadata9',
      'key1': 'metadata8'
    },
    reference: 'reference8',
  },
  schemeTraceId: 'schemeTraceId6',
  type: Type511Enum.IssuedCard,
};
```

