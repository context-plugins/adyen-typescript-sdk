
# Create Company User Request

## Structure

`CreateCompanyUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `associatedMerchantAccounts` | `string[] \| undefined` | Optional | The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with this user. |
| `email` | `string` | Required | The email address of the user. |
| `loginMethod` | `string \| undefined` | Optional | The requested login method for the user. To use SSO, you must already have SSO configured with Adyen before creating the user.<br><br>Possible values: **Email** or **SSO** |
| `name` | [`Name`](../../doc/models/name.md) | Required | The user's full name.<br><br>Allowed length: 1—80 characters. |
| `roles` | `string[] \| undefined` | Optional | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string \| undefined` | Optional | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |
| `username` | `string` | Required | The user's email address that will be their username. Must be the same as the one in the `email` field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |

## Example

```ts
import { CreateCompanyUserRequest } from 'adyen';

const createCompanyUserRequest: CreateCompanyUserRequest = {
  email: 'email4',
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
  },
  username: 'username8',
  accountGroups: [
    'accountGroups7'
  ],
  associatedMerchantAccounts: [
    'associatedMerchantAccounts2',
    'associatedMerchantAccounts3',
    'associatedMerchantAccounts4'
  ],
  loginMethod: 'loginMethod4',
  roles: [
    'roles4'
  ],
  timeZoneCode: 'timeZoneCode4',
};
```

