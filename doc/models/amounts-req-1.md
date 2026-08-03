
# Amounts Req 1

*This model accepts additional fields of type unknown.*

## Structure

`AmountsReq1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `requestedAmount` | `number` | Required | Amount requested by the Sale for the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `cashBackAmount` | `number \| undefined` | Optional | The cash-back part of the amount requested by the Sale for the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `tipAmount` | `number \| undefined` | Optional | Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `paidAmount` | `number \| undefined` | Optional | Amount already paid in case of split payment. Depending on the context, a split payment is either a split amount, or a split basket (required by some payment means as fleet cards). The PaidAmount is present when the split payment is a split<br>of the amount. Split of the basket involves two Sale Transactions, and does not have to be recognised by<br>the POI.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `minimumAmountToDeliver` | `number \| undefined` | Optional | Minimum amount the Sale System is allowed to deliver for this payment. For the OneTimeReservation, when the maximum amount is unknown, the Sale System indicates the minimum amount it allows.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `maximumCashBackAmount` | `number \| undefined` | Optional | Maximum amount which could be requested for cash-back to the Sale System. Allows the Cashier<br>to limit the amount value of cash-back to deliver to the Customer.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `minimumSplitAmount` | `number \| undefined` | Optional | Minimum amount of a split, which could be requested by a Customer.Allows the Merchant to limit the number of split requested by the Customer.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmountsReq1 } from 'adyenlib';

const amountsReq1: AmountsReq1 = {
  currency: 'Currency0',
  requestedAmount: 7.28,
  cashBackAmount: 46.48,
  tipAmount: 8.94,
  paidAmount: 208.74,
  minimumAmountToDeliver: 42.14,
  maximumCashBackAmount: 68.06,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

