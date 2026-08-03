
# Boarding Token Request

*This model accepts additional fields of type unknown.*

## Structure

`BoardingTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boardingRequestToken` | `string` | Required | The boardingToken request token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BoardingTokenRequest } from 'adyenlib';

const boardingTokenRequest: BoardingTokenRequest = {
  boardingRequestToken: 'boardingRequestToken4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

