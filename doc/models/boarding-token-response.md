
# Boarding Token Response

## Structure

`BoardingTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boardingToken` | `string` | Required | The boarding token that allows the Payments App to board. |
| `installationId` | `string` | Required | The unique identifier of the Payments App instance. |

## Example

```ts
import { BoardingTokenResponse } from 'adyen';

const boardingTokenResponse: BoardingTokenResponse = {
  boardingToken: 'boardingToken4',
  installationId: 'installationId2',
};
```

