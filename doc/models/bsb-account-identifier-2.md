
# BSB Account Identifier 2

Identifiers relevant for Australian banking, specifically for BSB (Bank-State-Branch) numbers.

## Structure

`BSBAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `bsbCode` | `string` | Required | The BSB (Bank-State-Branch) code. |

## Example

```ts
import { BSBAccountIdentifier2 } from 'adyen';

const bSBAccountIdentifier2: BSBAccountIdentifier2 = {
  accountNumber: 'accountNumber6',
  bsbCode: 'bsbCode8',
};
```

