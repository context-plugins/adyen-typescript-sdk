
# Boarding Token Response

*This model accepts additional fields of type unknown.*

## Structure

`BoardingTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boardingToken` | `string` | Required | The boarding token that allows the Payments App to board. |
| `installationId` | `string` | Required | The unique identifier of the Payments App instance. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BoardingTokenResponse } from 'adyen';

const boardingTokenResponse: BoardingTokenResponse = {
  boardingToken: 'boardingToken4',
  installationId: 'installationId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

