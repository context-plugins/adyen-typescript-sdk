
# Bank Account 1

Contains information about the bank account.

*This model accepts additional fields of type unknown.*

## Structure

`BankAccount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccount1AccountIdentification`](../../doc/models/containers/bank-account-1-account-identification.md) | Required | This is a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankAccount1, Type413 } from 'adyen';

const bankAccount1: BankAccount1 = {
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: Type413.AuLocal,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

