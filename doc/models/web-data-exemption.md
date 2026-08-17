
# Web Data Exemption

## Structure

`WebDataExemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason3Enum \| undefined`](../../doc/models/reason-3-enum.md) | Optional | The reason why the web data was not provided. Possible value: **noOnlinePresence**. |

## Example

```ts
import { Reason3Enum, WebDataExemption } from 'adyen';

const webDataExemption: WebDataExemption = {
  reason: Reason3Enum.NoOnlinePresence,
};
```

