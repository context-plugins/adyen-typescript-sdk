
# Migrated Accounts

## Structure

`MigratedAccounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The unique identifier of the account of the migrated account holder in the classic integration. |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the account of the migrated account holder in the balance platform. |

## Example

```ts
import { MigratedAccounts } from 'adyen';

const migratedAccounts: MigratedAccounts = {
  accountCode: 'accountCode6',
  balanceAccountId: 'balanceAccountId2',
};
```

