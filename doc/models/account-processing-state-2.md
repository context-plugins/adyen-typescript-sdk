
# Account Processing State 2

The processing state of the account holder.

## Structure

`AccountProcessingState2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disableReason` | `string \| undefined` | Optional | The reason why processing has been disabled. |
| `disabled` | `boolean \| undefined` | Optional | Indicates whether the processing of payments is allowed. |
| `processedFrom` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The lower bound of the processing tier (i.e., an account holder must have processed at least this amount of money in order to be placed into this tier). |
| `processedTo` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier). |
| `tierNumber` | `number \| undefined` | Optional | The processing tier that the account holder occupies. |

## Example

```ts
import { AccountProcessingState2 } from 'adyen';

const accountProcessingState2: AccountProcessingState2 = {
  disableReason: 'disableReason2',
  disabled: false,
  processedFrom: {
    currency: 'currency4',
    value: BigInt(148),
  },
  processedTo: {
    currency: 'currency2',
    value: BigInt(54),
  },
  tierNumber: 88,
};
```

