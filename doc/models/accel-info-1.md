
# Accel Info 1

Details to provide if `type` is **accel**.

*This model accepts additional fields of type unknown.*

## Structure

`AccelInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processingType` | [`ProcessingType`](../../doc/models/processing-type.md) | Required | - |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccelInfo1, ProcessingType, Type33 } from 'adyen';

const accelInfo1: AccelInfo1 = {
  processingType: ProcessingType.Billpay,
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

