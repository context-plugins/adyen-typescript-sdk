
# Pay by Bank Plaid Update Info

## Structure

`PayByBankPlaidUpdateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { PayByBankPlaidUpdateInfo, Type8Enum } from 'adyen';

const payByBankPlaidUpdateInfo: PayByBankPlaidUpdateInfo = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

