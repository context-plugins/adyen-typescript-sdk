
# Exchange Message

*This model accepts additional fields of type unknown.*

## Structure

`ExchangeMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageCode` | `string \| undefined` | Optional | - |
| `messageDescription` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExchangeMessage } from 'adyenlib';

const exchangeMessage: ExchangeMessage = {
  messageCode: 'messageCode0',
  messageDescription: 'messageDescription6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

