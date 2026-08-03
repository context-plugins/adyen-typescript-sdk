
# Bank Account Identification 1

Contains the identification information of the account to which you can transfer funds related to repayments.

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountIdentification1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankAccountIdentification1 } from 'adyenlib';

const bankAccountIdentification1: BankAccountIdentification1 = {
  type: 'BankAccountIdentification1',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

