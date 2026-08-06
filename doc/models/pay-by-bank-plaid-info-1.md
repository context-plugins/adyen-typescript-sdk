
# Pay by Bank Plaid Info 1

Details to provide if `type` is **paybybank_plaid**.

*This model accepts additional fields of type unknown.*

## Structure

`PayByBankPlaidInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Merchant logo (max. size 150kB). Format: Base64-encoded string. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayByBankPlaidInfo1, Type33 } from 'adyen';

const payByBankPlaidInfo1: PayByBankPlaidInfo1 = {
  logo: 'logo4',
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

