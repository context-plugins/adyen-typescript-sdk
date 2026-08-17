
# AU Local Account Identification

## Structure

`AULocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `9` |
| `bsbCode` | `string` | Required | The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `type` | `string` | Required, Constant | **auLocal**<br><br>**Value**: `'auLocal'` |

## Example

```ts
import { AULocalAccountIdentification } from 'adyen';

const aULocalAccountIdentification: AULocalAccountIdentification = {
  accountNumber: 'accountNumber0',
  bsbCode: 'bsbCode8',
  type: 'auLocal',
};
```

