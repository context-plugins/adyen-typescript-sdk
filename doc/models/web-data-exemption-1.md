
# Web Data Exemption 1

The reason why the web data is not provided.

## Structure

`WebDataExemption1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason3Enum \| undefined`](../../doc/models/reason-3-enum.md) | Optional | The reason why the web data was not provided. Possible value: **noOnlinePresence**. |

## Example

```ts
import { Reason3Enum, WebDataExemption1 } from 'adyen';

const webDataExemption1: WebDataExemption1 = {
  reason: Reason3Enum.NoOnlinePresence,
};
```

