
# Update Company User Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateCompanyUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `active` | `boolean \| undefined` | Optional | Indicates whether this user is active. |
| `associatedMerchantAccounts` | `string[] \| undefined` | Optional | The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) to associate the user with. |
| `email` | `string \| undefined` | Optional | The email address of the user. |
| `loginMethod` | `string \| undefined` | Optional | The requested login method for the user. To use SSO, you must already have SSO configured with Adyen before creating the user.<br><br>Possible values: **Email** or **SSO** |
| `name` | [`Name22 \| undefined`](../../doc/models/name-22.md) | Optional | - |
| `roles` | `string[] \| undefined` | Optional | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string \| undefined` | Optional | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateCompanyUserRequest } from 'adyenlib';

const updateCompanyUserRequest: UpdateCompanyUserRequest = {
  accountGroups: [
    'accountGroups1',
    'accountGroups0'
  ],
  active: false,
  associatedMerchantAccounts: [
    'associatedMerchantAccounts6'
  ],
  email: 'email0',
  loginMethod: 'loginMethod8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

