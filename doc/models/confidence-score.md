
# Confidence Score

## Structure

`ConfidenceScore`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `string[] \| undefined` | Optional | - |
| `score` | `number \| undefined` | Optional | - |

## Example

```ts
import { ConfidenceScore } from 'adyen';

const confidenceScore: ConfidenceScore = {
  errors: [
    'errors9',
    'errors0',
    'errors1'
  ],
  score: 155.44,
};
```

