
# EFT Account Identifier 2

Identifiers relevant for Electronic Funds Transfer (EFT) payments, commonly used in Canada.

## Structure

`EFTAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `branch` | `string` | Required | Identifies the specific branch where the account is held within the Canadian banking system. |
| `institution` | `string` | Required | The financial institution that identifies the bank in Canada. |

## Example

```ts
import { EFTAccountIdentifier2 } from 'adyen';

const eFTAccountIdentifier2: EFTAccountIdentifier2 = {
  accountNumber: 'accountNumber6',
  branch: 'branch2',
  institution: 'institution6',
};
```

