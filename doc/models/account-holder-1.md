
# Account Holder 1

Contains the full name of the person or entity that receives the payment funds).

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolder1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string` | Required | Full name of the account holder.<br><br>**Constraints**: *Minimum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountHolder1 } from 'adyen';

const accountHolder1: AccountHolder1 = {
  fullName: 'John Doe',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

