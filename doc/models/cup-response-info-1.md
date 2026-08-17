
# Cup Response Info 1

**cup** (China Union Pay) details

## Structure

`CupResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { CupResponseInfo1, Type8Enum } from 'adyen';

const cupResponseInfo1: CupResponseInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

