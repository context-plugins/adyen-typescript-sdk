
# Eft Pos Australia Response Info

## Structure

`EftPosAustraliaResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { EftPosAustraliaResponseInfo, Type8Enum } from 'adyen';

const eftPosAustraliaResponseInfo: EftPosAustraliaResponseInfo = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

