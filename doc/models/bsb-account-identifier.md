
# BSB Account Identifier

## Structure

`BSBAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `bsbCode` | `string` | Required | The BSB (Bank-State-Branch) code. |

## Example

```ts
import { BSBAccountIdentifier } from 'adyen';

const bSBAccountIdentifier: BSBAccountIdentifier = {
  accountNumber: 'accountNumber2',
  bsbCode: 'bsbCode4',
};
```

