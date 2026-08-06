
# Hu Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`HuLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 24-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `24` |
| `type` | [`Type193`](../../doc/models/type-193.md) | Required | **huLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HuLocalAccountIdentification, Type193 } from 'adyen';

const huLocalAccountIdentification: HuLocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  type: Type193.HuLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

