
# Create Company User Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateCompanyUserResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links2 \| undefined`](../../doc/models/links-2.md) | Optional | - |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `active` | `boolean \| undefined` | Optional | Indicates whether this user is active. |
| `apps` | `string[] \| undefined` | Optional | Set of apps available to this user |
| `associatedMerchantAccounts` | `string[] \| undefined` | Optional | The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with this user. |
| `email` | `string` | Required | The email address of the user. |
| `id` | `string` | Required | The unique identifier of the user. |
| `name` | [`Name5 \| undefined`](../../doc/models/name-5.md) | Optional | - |
| `roles` | `string[]` | Required | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string` | Required | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |
| `username` | `string` | Required | The username for this user.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateCompanyUserResponse } from 'adyenlib';

const createCompanyUserResponse: CreateCompanyUserResponse = {
  email: 'email8',
  id: 'id8',
  roles: [
    'roles8',
    'roles9',
    'roles0'
  ],
  timeZoneCode: 'timeZoneCode0',
  username: 'username2',
  links: {
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  accountGroups: [
    'accountGroups1',
    'accountGroups2',
    'accountGroups3'
  ],
  active: false,
  apps: [
    'apps2'
  ],
  associatedMerchantAccounts: [
    'associatedMerchantAccounts8'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

