
# Balance Transfer Request

*This model accepts additional fields of type unknown.*

## Structure

`BalanceTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `fromMerchant` | `string` | Required | The unique identifier of the source merchant account from which funds are deducted.<br><br>**Constraints**: *Minimum Length*: `1` |
| `reference` | `string \| undefined` | Optional | A reference for the balance transfer. Maximum length: 80 characters.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `80` |
| `toMerchant` | `string` | Required | The unique identifier of the destination merchant account to which funds are transferred.<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`BalanceTransferType2`](../../doc/models/balance-transfer-type-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceTransferRequest, BalanceTransferType2 } from 'adyen';

const balanceTransferRequest: BalanceTransferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  fromMerchant: 'fromMerchant8',
  toMerchant: 'toMerchant8',
  type: BalanceTransferType2.TerminalSale,
  reference: 'reference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

