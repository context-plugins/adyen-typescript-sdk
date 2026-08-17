
# Status 25

Contains the status of the grant.

## Structure

`Status25`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actions` | [`Action1[] \| undefined`](../../doc/models/action-1.md) | Optional | A list of actions that need to be completed to proceed with the grant. |
| `code` | [`CodeEnum`](../../doc/models/code-enum.md) | Required | The code for the status of the grant. Possible values:<br><br>- **Pending**<br>- **Active**<br>- **Repaid**<br>- **WrittenOff**<br>- **Failed**<br>- **Revoked**<br>- **Requested**<br>- **Reviewing**<br>- **Approved**<br>- **Rejected**<br>- **Cancelled** |

## Example

```ts
import { CodeEnum, Status25 } from 'adyen';

const status25: Status25 = {
  code: CodeEnum.Repaid,
  actions: [
    {
      actionCode: 'actionCode6',
      resolved: false,
    },
    {
      actionCode: 'actionCode6',
      resolved: false,
    }
  ],
};
```

