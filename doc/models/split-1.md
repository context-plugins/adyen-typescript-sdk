
# Split 1

*This model accepts additional fields of type unknown.*

## Structure

`Split1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string \| undefined` | Optional | The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.<br><br>* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.<br>* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked. |
| `amount` | [`Amount31 \| undefined`](../../doc/models/amount-31.md) | Optional | - |
| `description` | `string \| undefined` | Optional | Your description for the split item. |
| `reference` | `string \| undefined` | Optional | Your unique reference for the part of the payment booked to the specified `account`.<br><br>This is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).<br><br>For the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. |
| `type` | [`Type15`](../../doc/models/type-15.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Split1, Type15 } from 'adyen';

const split1: Split1 = {
  type: Type15.PaymentFee,
  account: 'account4',
  amount: {
    value: BigInt(110),
    currency: 'currency2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description4',
  reference: 'reference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

