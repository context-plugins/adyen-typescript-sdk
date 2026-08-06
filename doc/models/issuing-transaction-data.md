
# Issuing Transaction Data

*This model accepts additional fields of type unknown.*

## Structure

`IssuingTransactionData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captureCycleId` | `string \| undefined` | Optional | captureCycleId associated with transfer event. |
| `type` | [`Type86`](../../doc/models/type-86.md) | Required | The type of events data.<br><br>Possible values:<br><br>- **issuingTransactionData**: issuing transaction data |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IssuingTransactionData, Type86 } from 'adyen';

const issuingTransactionData: IssuingTransactionData = {
  type: Type86.IssuingTransactionData,
  captureCycleId: 'captureCycleId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

