
# Currency Conversion

Information related to a currency conversion.
A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt).

## Structure

`CurrencyConversion`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerApprovedFlag` | `boolean \| undefined` | Optional | Notify if the customer has approved something. Indicates if the customer has accepted a currency conversion.<br><br>**Default**: `true` |
| `convertedAmount` | [`ConvertedAmount1`](../../doc/models/converted-amount-1.md) | Required | Amount after a currency conversion. |
| `rate` | `number \| undefined` | Optional | Rate of currency conversion. |
| `markup` | `number \| undefined` | Optional | Markup of a currency conversion amount as a percentage. |
| `commission` | `number \| undefined` | Optional | Commission for a currency conversion.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `declaration` | `string \| undefined` | Optional | Declaration to present to the customer or the cashier for validation.<br>If a declaration has to be presented to the customer.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { CurrencyConversion } from 'adyen';

const currencyConversion: CurrencyConversion = {
  convertedAmount: {
    amountValue: 81.82,
    currency: 'Currency0',
  },
  customerApprovedFlag: true,
  rate: 37.94,
  markup: 238.72,
  commission: 59.92,
  declaration: 'Declaration0',
};
```

