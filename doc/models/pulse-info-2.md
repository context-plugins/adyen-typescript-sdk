
# Pulse Info 2

Details to provide if `type` is **pulse**.

*This model accepts additional fields of type unknown.*

## Structure

`PulseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processingType` | [`ProcessingType`](../../doc/models/processing-type.md) | Required | - |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ProcessingType, PulseInfo2, Type33 } from 'adyen';

const pulseInfo2: PulseInfo2 = {
  processingType: ProcessingType.Pos,
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

