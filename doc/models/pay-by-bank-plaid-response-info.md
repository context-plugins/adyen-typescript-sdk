
# Pay by Bank Plaid Response Info

## Structure

`PayByBankPlaidResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Merchant logo |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { PayByBankPlaidResponseInfo, Type8Enum } from 'adyen';

const payByBankPlaidResponseInfo: PayByBankPlaidResponseInfo = {
  logo: 'logo2',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

