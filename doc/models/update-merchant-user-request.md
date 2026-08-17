
# Update Merchant User Request

## Structure

`UpdateMerchantUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountGroups` | `string[] \| undefined` | Optional | The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user. |
| `active` | `boolean \| undefined` | Optional | Sets the status of the user to active (**true**) or inactive (**false**). |
| `email` | `string \| undefined` | Optional | The email address of the user. |
| `loginMethod` | `string \| undefined` | Optional | The requested login method for the user. To use SSO, you must already have SSO configured with Adyen before creating the user.<br><br>Possible values: **Email** or **SSO** |
| `name` | [`Name22 \| undefined`](../../doc/models/name-22.md) | Optional | The user's full name. |
| `roles` | `string[] \| undefined` | Optional | The list of [roles](https://docs.adyen.com/account/user-roles) for this user. |
| `timeZoneCode` | `string \| undefined` | Optional | The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**. |

## Example

```ts
import { UpdateMerchantUserRequest } from 'adyen';

const updateMerchantUserRequest: UpdateMerchantUserRequest = {
  accountGroups: [
    'accountGroups9'
  ],
  active: false,
  email: 'email6',
  loginMethod: 'loginMethod2',
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
  },
};
```

