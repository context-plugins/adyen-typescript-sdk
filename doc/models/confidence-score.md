
# Confidence Score

*This model accepts additional fields of type unknown.*

## Structure

`ConfidenceScore`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `string[] \| undefined` | Optional | - |
| `score` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ConfidenceScore } from 'adyenlib';

const confidenceScore: ConfidenceScore = {
  errors: [
    'errors9',
    'errors0',
    'errors1'
  ],
  score: 155.44,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

