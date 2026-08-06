
# Pulse Response Info

*This model accepts additional fields of type unknown.*

## Structure

`PulseResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processingType` | [`ProcessingType \| undefined`](../../doc/models/processing-type.md) | Optional | - |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ProcessingType, PulseResponseInfo, Type33 } from 'adyen';

const pulseResponseInfo: PulseResponseInfo = {
  processingType: ProcessingType.Ecom,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type33.Fixed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

