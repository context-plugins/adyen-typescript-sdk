
# Pay by Bank Plaid Response Info 1

**paybybank_plaid** details

*This model accepts additional fields of type unknown.*

## Structure

`PayByBankPlaidResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logo` | `string \| undefined` | Optional | Merchant logo |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayByBankPlaidResponseInfo1, Type33 } from 'adyen';

const payByBankPlaidResponseInfo1: PayByBankPlaidResponseInfo1 = {
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

