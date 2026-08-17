
# Pay by Bank Plaid Info

## Structure

`PayByBankPlaidInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Merchant logo (max. size 150kB). Format: Base64-encoded string. |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { PayByBankPlaidInfo, Type8Enum } from 'adyen';

const payByBankPlaidInfo: PayByBankPlaidInfo = {
  logo: 'logo0',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

