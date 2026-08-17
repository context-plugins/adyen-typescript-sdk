
# EFT Account Identifier

## Structure

`EFTAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `branch` | `string` | Required | Identifies the specific branch where the account is held within the Canadian banking system. |
| `institution` | `string` | Required | The financial institution that identifies the bank in Canada. |

## Example

```ts
import { EFTAccountIdentifier } from 'adyen';

const eFTAccountIdentifier: EFTAccountIdentifier = {
  accountNumber: 'accountNumber6',
  branch: 'branch4',
  institution: 'institution8',
};
```

