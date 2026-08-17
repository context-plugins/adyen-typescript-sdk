
# Update Network Token Request

## Structure

`UpdateNetworkTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status16Enum \| undefined`](../../doc/models/status-16-enum.md) | Optional | The new status of the network token. Possible values: **active**, **suspended**, **closed**. The **closed** status is final and cannot be changed. |

## Example

```ts
import { Status16Enum, UpdateNetworkTokenRequest } from 'adyen';

const updateNetworkTokenRequest: UpdateNetworkTokenRequest = {
  status: Status16Enum.Closed,
};
```

