
# Funds Collection

## Structure

`FundsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccountIdentification1 \| undefined`](../../doc/models/bank-account-identification-1.md) | Optional | Contains the identification information of the account to which you can transfer funds related to repayments. |
| `fundsCollectionType` | [`FundsCollectionType2Enum \| undefined`](../../doc/models/funds-collection-type-2-enum.md) | Optional | The type of funds collection.<br><br>Possible values: **UnscheduledRepayment**, **Revocation**. |

## Example

```ts
import { FundsCollection, FundsCollectionType2Enum } from 'adyen';

const fundsCollection: FundsCollection = {
  accountIdentification: {
    type: 'BankAccountIdentification1',
  },
  fundsCollectionType: FundsCollectionType2Enum.UnscheduledRepayment,
};
```

