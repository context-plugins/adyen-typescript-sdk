
# Pay by Bank Plaid Response Info 1

**paybybank_plaid** details

## Structure

`PayByBankPlaidResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Merchant logo |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { PayByBankPlaidResponseInfo1, Type8Enum } from 'adyen';

const payByBankPlaidResponseInfo1: PayByBankPlaidResponseInfo1 = {
  logo: 'logo4',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

