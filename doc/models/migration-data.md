
# Migration Data

## Structure

`MigrationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string \| undefined` | Optional | The unique identifier of the account holder in the balance platform. |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the balance platfrom to which the account holder was migrated. |
| `migrated` | `boolean \| undefined` | Optional | Set to **true** if the account holder has been migrated. |
| `migratedAccounts` | [`MigratedAccounts[] \| undefined`](../../doc/models/migrated-accounts.md) | Optional | Contains the mapping of virtual account codes (classic integration) to the balance account codes (balance platform) associated with the migrated account holder. |
| `migratedShareholders` | [`MigratedShareholders[] \| undefined`](../../doc/models/migrated-shareholders.md) | Optional | Contains the mapping of shareholders associated with the migrated legal entities. |
| `migratedStores` | [`MigratedStores[] \| undefined`](../../doc/models/migrated-stores.md) | Optional | Contains the mapping of business lines and stores associated with the migrated account holder. |
| `migrationDate` | `string \| undefined` | Optional | The date when account holder was migrated. |

## Example

```ts
import { MigrationData } from 'adyen';

const migrationData: MigrationData = {
  accountHolderId: 'accountHolderId0',
  balancePlatform: 'balancePlatform0',
  migrated: false,
  migratedAccounts: [
    {
      accountCode: 'accountCode6',
      balanceAccountId: 'balanceAccountId2',
    },
    {
      accountCode: 'accountCode6',
      balanceAccountId: 'balanceAccountId2',
    },
    {
      accountCode: 'accountCode6',
      balanceAccountId: 'balanceAccountId2',
    }
  ],
  migratedShareholders: [
    {
      legalEntityCode: 'legalEntityCode0',
      shareholderCode: 'shareholderCode4',
    },
    {
      legalEntityCode: 'legalEntityCode0',
      shareholderCode: 'shareholderCode4',
    },
    {
      legalEntityCode: 'legalEntityCode0',
      shareholderCode: 'shareholderCode4',
    }
  ],
};
```

