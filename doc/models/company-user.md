
# Company User

## Structure

`CompanyUser`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links1 \| undefined`](../../doc/models/links-1.md) | Optional | References to resources connected with this user. |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `active` | `boolean \| undefined` | Optional | Indicates whether this user is active. |
| `apps` | `string[] \| undefined` | Optional | Set of apps available to this user |
| `associatedMerchantAccounts` | `string[] \| undefined` | Optional | The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with this user. |
| `email` | `string` | Required | The email address of the user. |
| `id` | `string` | Required | The unique identifier of the user. |
| `name` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The user's full name. |
| `roles` | `string[]` | Required | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string` | Required | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |
| `username` | `string` | Required | The username for this user.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |

## Example

```ts
import { CompanyUser } from 'adyen';

const companyUser: CompanyUser = {
  email: 'email2',
  id: 'id4',
  roles: [
    'roles8'
  ],
  timeZoneCode: 'timeZoneCode6',
  username: 'username4',
  links: {
    self: {
      href: 'href0',
    },
  },
  accountGroups: [
    'accountGroups5'
  ],
  active: false,
  apps: [
    'apps8',
    'apps9',
    'apps0'
  ],
  associatedMerchantAccounts: [
    'associatedMerchantAccounts4',
    'associatedMerchantAccounts5',
    'associatedMerchantAccounts6'
  ],
};
```

