
# Au Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`AuLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `9` |
| `bsbCode` | `string` | Required | The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `type` | [`Type413`](../../doc/models/type-413.md) | Required | **auLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuLocalAccountIdentification, Type413 } from 'adyenlib';

const auLocalAccountIdentification: AuLocalAccountIdentification = {
  accountNumber: 'accountNumber8',
  bsbCode: 'bsbCode0',
  type: Type413.AuLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

