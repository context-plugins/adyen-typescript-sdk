
# Eft Pos Australia Response Info 1

**eftpos_australia** details

## Structure

`EftPosAustraliaResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { EftPosAustraliaResponseInfo1, Type8Enum } from 'adyen';

const eftPosAustraliaResponseInfo1: EftPosAustraliaResponseInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

