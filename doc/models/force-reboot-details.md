
# Force Reboot Details

## Structure

`ForceRebootDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type210Enum \| undefined`](../../doc/models/type-210-enum.md) | Optional | The type of terminal action. The value **ForceReboot** triggers an immediate reboot of the specified terminal(s).<br><br>**Default**: `Type210Enum.ForceReboot` |

## Example

```ts
import { ForceRebootDetails, Type210Enum } from 'adyen';

const forceRebootDetails: ForceRebootDetails = {
  type: Type210Enum.ForceReboot,
};
```

