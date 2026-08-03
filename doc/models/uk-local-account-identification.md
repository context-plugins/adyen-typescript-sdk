
# Uk Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`UkLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 8-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `sortCode` | `string` | Required | The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `type` | [`Type273`](../../doc/models/type-273.md) | Required | **ukLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type273, UkLocalAccountIdentification } from 'adyenlib';

const ukLocalAccountIdentification: UkLocalAccountIdentification = {
  accountNumber: 'accountNumber4',
  sortCode: 'sortCode6',
  type: Type273.UkLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

