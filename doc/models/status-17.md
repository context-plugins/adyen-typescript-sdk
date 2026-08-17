
# Status 17

## Structure

`Status17`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actions` | [`Action1[] \| undefined`](../../doc/models/action-1.md) | Optional | A list of actions that need to be completed to proceed with the grant. |
| `code` | [`CodeEnum`](../../doc/models/code-enum.md) | Required | The code for the status of the grant. Possible values:<br><br>- **Pending**<br>- **Active**<br>- **Repaid**<br>- **WrittenOff**<br>- **Failed**<br>- **Revoked**<br>- **Requested**<br>- **Reviewing**<br>- **Approved**<br>- **Rejected**<br>- **Cancelled** |

## Example

```ts
import { CodeEnum, Status17 } from 'adyen';

const status17: Status17 = {
  code: CodeEnum.Revoked,
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

