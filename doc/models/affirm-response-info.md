
# Affirm Response Info

*This model accepts additional fields of type unknown.*

## Structure

`AffirmResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicApiKey` | `string \| undefined` | Optional | Affirm public API key |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AffirmResponseInfo } from 'adyen';

const affirmResponseInfo: AffirmResponseInfo = {
  publicApiKey: 'publicApiKey8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

