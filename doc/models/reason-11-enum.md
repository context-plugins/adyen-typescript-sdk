
# Reason 11 Enum

The reason why the transfer failed Adyen's internal review.

Possible values:

- **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new).

## Enumeration

`Reason11Enum`

## Fields

| Name |
|  --- |
| `RefusedForRegulatoryReasons` |

## Example

```ts
import { Reason11Enum } from 'adyen';

const reason11 = Reason11Enum.RefusedForRegulatoryReasons;
```

