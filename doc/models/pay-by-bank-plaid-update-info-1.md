
# Pay by Bank Plaid Update Info 1

Details to provide if `type` is **paybybank_plaid**.

*This model accepts additional fields of type unknown.*

## Structure

`PayByBankPlaidUpdateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayByBankPlaidUpdateInfo1, Type33 } from 'adyen';

const payByBankPlaidUpdateInfo1: PayByBankPlaidUpdateInfo1 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type33.Fixed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

