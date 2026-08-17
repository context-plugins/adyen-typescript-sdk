
# SE Local Account Identification

## Structure

`SELocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.<br><br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `10` |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `5` |
| `type` | `string` | Required, Constant | **seLocal**<br><br>**Value**: `'seLocal'` |

## Example

```ts
import { SELocalAccountIdentification } from 'adyen';

const sELocalAccountIdentification: SELocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  clearingNumber: 'clearingNumber6',
  type: 'seLocal',
};
```

