
# Include Mode Enum

Indicates whether the specified `eventType` is sent to your webhook endpoint.
Possible values:

* **INCLUDE**: Send the specified `eventType`.
* **EXCLUDE**: Send all event types except the specified `eventType` and other event types with the `includeMode` set to **EXCLUDE**.

## Enumeration

`IncludeModeEnum`

## Fields

| Name |
|  --- |
| `EXCLUDE` |
| `INCLUDE` |

## Example

```ts
import { IncludeModeEnum } from 'adyen';

const includeMode = IncludeModeEnum.EXCLUDE;
```

