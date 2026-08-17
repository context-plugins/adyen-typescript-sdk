
# BACS Account Identifier

## Structure

`BACSAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `sortCode` | `string` | Required | A number that identifies the specific bank and branch where a UK bank account is held. |

## Example

```ts
import { BACSAccountIdentifier } from 'adyen';

const bACSAccountIdentifier: BACSAccountIdentifier = {
  accountNumber: 'accountNumber2',
  sortCode: 'sortCode2',
};
```

