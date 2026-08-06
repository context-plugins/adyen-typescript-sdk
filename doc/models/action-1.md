
# Action 1

*This model accepts additional fields of type unknown.*

## Structure

`Action1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionCode` | `string` | Required | The code identifying the action that needs to be completed. |
| `resolved` | `boolean` | Required | Indicates whether this action has been successfully completed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Action1 } from 'adyen';

const action1: Action1 = {
  actionCode: 'actionCode2',
  resolved: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

