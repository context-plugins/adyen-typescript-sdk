
# Bank Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankAccountIdentification } from 'adyen';

const bankAccountIdentification: BankAccountIdentification = {
  type: 'BankAccountIdentification',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

