
# Account Processing State 2

The processing state of the account holder.

*This model accepts additional fields of type unknown.*

## Structure

`AccountProcessingState2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disableReason` | `string \| undefined` | Optional | The reason why processing has been disabled. |
| `disabled` | `boolean \| undefined` | Optional | Indicates whether the processing of payments is allowed. |
| `processedFrom` | [`ProcessedFrom \| undefined`](../../doc/models/processed-from.md) | Optional | - |
| `processedTo` | [`ProcessedTo \| undefined`](../../doc/models/processed-to.md) | Optional | - |
| `tierNumber` | `number \| undefined` | Optional | The processing tier that the account holder occupies. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountProcessingState2 } from 'adyen';

const accountProcessingState2: AccountProcessingState2 = {
  disableReason: 'disableReason2',
  disabled: false,
  processedFrom: {
    currency: 'currency4',
    value: BigInt(148),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  processedTo: {
    currency: 'currency2',
    value: BigInt(54),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  tierNumber: 88,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

