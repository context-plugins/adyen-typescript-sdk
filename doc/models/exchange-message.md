
# Exchange Message

## Structure

`ExchangeMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageCode` | `string \| undefined` | Optional | - |
| `messageDescription` | `string \| undefined` | Optional | - |

## Example

```ts
import { ExchangeMessage } from 'adyen';

const exchangeMessage: ExchangeMessage = {
  messageCode: 'messageCode0',
  messageDescription: 'messageDescription6',
};
```

