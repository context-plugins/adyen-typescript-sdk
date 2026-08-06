
# Card Reader Apdu Response

Content of the Card Reader APDU Response message.
It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.

*This model accepts additional fields of type unknown.*

## Structure

`CardReaderApduResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `apduData` | `string \| undefined` | Optional | Data field of the APDU command (Lc + Data).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `cardStatusWords` | `string` | Required | Status of a smartcard response to a command (SW1-SW2).<br><br>**Constraints**: *Pattern*: `^.{2,2}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardReaderApduResponse, ErrorCondition1, Result11 } from 'adyen';

const cardReaderApduResponse: CardReaderApduResponse = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardStatusWords: 'CardStatusWords8',
  apduData: 'APDUData4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

