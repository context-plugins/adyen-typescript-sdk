
# NO Local Account Identification

## Structure

`NOLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 11-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `11`, *Maximum Length*: `11` |
| `type` | `string` | Required, Constant | **noLocal**<br><br>**Value**: `'noLocal'` |

## Example

```ts
import { NOLocalAccountIdentification } from 'adyen';

const nOLocalAccountIdentification: NOLocalAccountIdentification = {
  accountNumber: 'accountNumber8',
  type: 'noLocal',
};
```

