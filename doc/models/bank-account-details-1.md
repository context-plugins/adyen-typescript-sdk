
# Bank Account Details 1

Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.

## Structure

`BankAccountDetails1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | The bank account number, without separators or whitespace. |
| `accountType` | `string \| undefined` | Optional | The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.<br><br>**Default**: `'checking'` |
| `branchNumber` | `string \| undefined` | Optional | The bank account branch number, without separators or whitespace |
| `formFactor` | `string \| undefined` | Optional | Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts.<br><br>Adyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.<br><br>**Default**: `'physical'` |
| `iban` | `string \| undefined` | Optional | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. |
| `routingNumber` | `string \| undefined` | Optional | The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace. |
| `sortCode` | `string \| undefined` | Optional | The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace. |
| `type` | `string` | Required | **iban** or **usLocal** or **ukLocal**<br><br>**Default**: `'iban'` |

## Example

```ts
import { BankAccountDetails1 } from 'adyen';

const bankAccountDetails1: BankAccountDetails1 = {
  type: 'iban',
  accountNumber: 'accountNumber4',
  accountType: 'checking',
  branchNumber: 'branchNumber8',
  formFactor: 'physical',
  iban: 'iban2',
};
```

