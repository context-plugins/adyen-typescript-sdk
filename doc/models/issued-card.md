
# Issued Card

*This model accepts additional fields of type unknown.*

## Structure

`IssuedCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationType` | `string \| undefined` | Optional | The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation** |
| `panEntryMode` | [`PanEntryMode \| undefined`](../../doc/models/pan-entry-mode.md) | Optional | - |
| `processingType` | [`ProcessingType1 \| undefined`](../../doc/models/processing-type-1.md) | Optional | - |
| `relayedAuthorisationData` | [`RelayedAuthorisationData \| undefined`](../../doc/models/relayed-authorisation-data.md) | Optional | - |
| `schemeTraceId` | `string \| undefined` | Optional | The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments. |
| `schemeUniqueTransactionId` | `string \| undefined` | Optional | The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme. |
| `threeDSecure` | [`ThreeDSecure \| undefined`](../../doc/models/three-d-secure.md) | Optional | - |
| `type` | [`Type512 \| undefined`](../../doc/models/type-512.md) | Optional | - |
| `validationFacts` | [`TransferNotificationValidationFact[] \| undefined`](../../doc/models/transfer-notification-validation-fact.md) | Optional | The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IssuedCard, PanEntryMode, ProcessingType1 } from 'adyen';

const issuedCard: IssuedCard = {
  authorisationType: 'authorisationType6',
  panEntryMode: PanEntryMode.Manual,
  processingType: ProcessingType1.Ecommerce,
  relayedAuthorisationData: {
    metadata: {
      'key0': 'metadata9',
      'key1': 'metadata8'
    },
    reference: 'reference8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  schemeTraceId: 'schemeTraceId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

