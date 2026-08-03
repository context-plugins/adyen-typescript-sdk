
# Create Merchant User Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateMerchantUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `email` | `string` | Required | The email address of the user. |
| `loginMethod` | `string \| undefined` | Optional | The requested login method for the user. To use SSO, you must already have SSO configured with Adyen before creating the user.<br><br>Possible values: **Email** or **SSO** |
| `name` | [`Name5`](../../doc/models/name-5.md) | Required | - |
| `roles` | `string[] \| undefined` | Optional | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string \| undefined` | Optional | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |
| `username` | `string` | Required | The user's email address that will be their username. Must be the same as the one in the `email` field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateMerchantUserRequest } from 'adyenlib';

const createMerchantUserRequest: CreateMerchantUserRequest = {
  email: 'email2',
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  username: 'username4',
  accountGroups: [
    'accountGroups3',
    'accountGroups2',
    'accountGroups1'
  ],
  loginMethod: 'loginMethod6',
  roles: [
    'roles4',
    'roles3',
    'roles2'
  ],
  timeZoneCode: 'timeZoneCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

