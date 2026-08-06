
# Account Holder

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string` | Required | Full name of the account holder.<br><br>**Constraints**: *Minimum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountHolder } from 'adyen';

const accountHolder: AccountHolder = {
  fullName: 'John Doe',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

