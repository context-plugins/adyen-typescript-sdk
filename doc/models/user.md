
# User

*This model accepts additional fields of type unknown.*

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links2 \| undefined`](../../doc/models/links-2.md) | Optional | - |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `active` | `boolean \| undefined` | Optional | Indicates whether this user is active. |
| `apps` | `string[] \| undefined` | Optional | Set of apps available to this user |
| `email` | `string` | Required | The email address of the user. |
| `id` | `string` | Required | The unique identifier of the user. |
| `name` | [`Name5 \| undefined`](../../doc/models/name-5.md) | Optional | - |
| `roles` | `string[]` | Required | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string` | Required | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |
| `username` | `string` | Required | The username for this user.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { User } from 'adyenlib';

const user: User = {
  email: 'email6',
  id: 'id0',
  roles: [
    'roles6',
    'roles7'
  ],
  timeZoneCode: 'timeZoneCode2',
  username: 'username0',
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
    'accountGroups9',
    'accountGroups0'
  ],
  active: false,
  apps: [
    'apps4',
    'apps5'
  ],
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

