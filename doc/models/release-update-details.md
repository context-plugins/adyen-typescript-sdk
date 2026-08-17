
# Release Update Details

## Structure

`ReleaseUpdateDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type61Enum \| undefined`](../../doc/models/type-61-enum.md) | Optional | Type of terminal action: Update Release.<br><br>**Default**: `Type61Enum.ReleaseUpdate` |
| `updateAtFirstMaintenanceCall` | `boolean \| undefined` | Optional | Boolean flag that tells if the terminal should update at the first next maintenance call. If false, terminal will update on its configured reboot time. |

## Example

```ts
import { ReleaseUpdateDetails, Type61Enum } from 'adyen';

const releaseUpdateDetails: ReleaseUpdateDetails = {
  type: Type61Enum.ReleaseUpdate,
  updateAtFirstMaintenanceCall: false,
};
```

