
# Affirm Response Info 1

*affirm** details

*This model accepts additional fields of type unknown.*

## Structure

`AffirmResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicApiKey` | `string \| undefined` | Optional | Affirm public API key |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AffirmResponseInfo1 } from 'adyen';

const affirmResponseInfo1: AffirmResponseInfo1 = {
  publicApiKey: 'publicApiKey6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

