
# Bank Account Model 1

Contains the business account details.

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountModel1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formFactor` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankAccountModel1 } from 'adyen';

const bankAccountModel1: BankAccountModel1 = {
  formFactor: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

