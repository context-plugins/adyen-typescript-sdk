
# Se Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`SeLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.<br><br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `10` |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `5` |
| `type` | [`Type264`](../../doc/models/type-264.md) | Required | **seLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SeLocalAccountIdentification, Type264 } from 'adyenlib';

const seLocalAccountIdentification: SeLocalAccountIdentification = {
  accountNumber: 'accountNumber8',
  clearingNumber: 'clearingNumber0',
  type: Type264.SeLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

