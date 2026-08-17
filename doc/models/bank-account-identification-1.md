
# Bank Account Identification 1

Contains the identification information of the account to which you can transfer funds related to repayments.

## Structure

`BankAccountIdentification1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |

## Example

```ts
import { BankAccountIdentification1 } from 'adyen';

const bankAccountIdentification1: BankAccountIdentification1 = {
  type: 'BankAccountIdentification1',
};
```

