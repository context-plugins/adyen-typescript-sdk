
# UK Local Account Identification

## Structure

`UKLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 8-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `sortCode` | `string` | Required | The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `type` | `string` | Required, Constant | **ukLocal**<br><br>**Value**: `'ukLocal'` |

## Example

```ts
import { UKLocalAccountIdentification } from 'adyen';

const uKLocalAccountIdentification: UKLocalAccountIdentification = {
  accountNumber: 'accountNumber0',
  sortCode: 'sortCode0',
  type: 'ukLocal',
};
```

