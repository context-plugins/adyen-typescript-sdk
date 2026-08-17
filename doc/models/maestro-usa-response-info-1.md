
# Maestro USA Response Info 1

Details to provide if `type` is **maestro_usa** details

## Structure

`MaestroUSAResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { MaestroUSAResponseInfo1, Type8Enum } from 'adyen';

const maestroUSAResponseInfo1: MaestroUSAResponseInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

