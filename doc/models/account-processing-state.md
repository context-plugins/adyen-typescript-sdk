
# Account Processing State

## Structure

`AccountProcessingState`

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
import { AccountProcessingState } from 'adyen';

const accountProcessingState: AccountProcessingState = {
  disableReason: 'disableReason0',
  disabled: false,
  processedFrom: {
    currency: 'currency4',
    value: BigInt(148),
  },
  processedTo: {
    currency: 'currency2',
    value: BigInt(54),
  },
  tierNumber: 74,
};
```

