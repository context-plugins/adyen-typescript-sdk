
# Disable Result

## Structure

`DisableResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | `string \| undefined` | Optional | Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled]. |

## Example

```ts
import { DisableResult } from 'adyen';

const disableResult: DisableResult = {
  response: 'response4',
};
```

