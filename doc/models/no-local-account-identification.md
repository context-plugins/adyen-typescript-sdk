
# No Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`NoLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 11-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `11`, *Maximum Length*: `11` |
| `type` | [`Type223`](../../doc/models/type-223.md) | Required | **noLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NoLocalAccountIdentification, Type223 } from 'adyen';

const noLocalAccountIdentification: NoLocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  type: Type223.NoLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

