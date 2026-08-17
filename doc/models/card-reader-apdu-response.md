
# Card Reader APDU Response

Content of the Card Reader APDU Response message.
It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.

## Structure

`CardReaderAPDUResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `aPDUData` | `string \| undefined` | Optional | Data field of the APDU command (Lc + Data).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `cardStatusWords` | `string` | Required | Status of a smartcard response to a command (SW1-SW2).<br><br>**Constraints**: *Pattern*: `^.{2,2}$` |

## Example

```ts
import {
  CardReaderAPDUResponse,
  ErrorCondition1Enum,
  Result11Enum,
} from 'adyen';

const cardReaderAPDUResponse: CardReaderAPDUResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  cardStatusWords: 'CardStatusWords4',
  aPDUData: 'APDUData8',
};
```

