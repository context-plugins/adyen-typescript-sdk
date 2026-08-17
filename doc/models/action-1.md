
# Action 1

## Structure

`Action1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionCode` | `string` | Required | The code identifying the action that needs to be completed. |
| `resolved` | `boolean` | Required | Indicates whether this action has been successfully completed. |

## Example

```ts
import { Action1 } from 'adyen';

const action1: Action1 = {
  actionCode: 'actionCode2',
  resolved: false,
};
```

