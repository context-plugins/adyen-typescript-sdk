
# Disable Result

*This model accepts additional fields of type unknown.*

## Structure

`DisableResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | `string \| undefined` | Optional | Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled]. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisableResult } from 'adyen';

const disableResult: DisableResult = {
  response: 'response4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

