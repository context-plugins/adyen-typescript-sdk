
# Pin Change Response

## Structure

`PinChangeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status13Enum`](../../doc/models/status-13-enum.md) | Required | The status of the request for PIN change.<br><br>Possible values: **completed**, **pending**, **unavailable**. |

## Example

```ts
import { PinChangeResponse, Status13Enum } from 'adyen';

const pinChangeResponse: PinChangeResponse = {
  status: Status13Enum.Completed,
};
```

