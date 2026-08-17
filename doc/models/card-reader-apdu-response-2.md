
# Card Reader APDU Response 2

Content of the Card Reader APDU Response message.

## Structure

`CardReaderAPDUResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `aPDUData` | `string \| undefined` | Optional | Data field of the APDU command (Lc + Data).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `cardStatusWords` | `string` | Required | Status of a smartcard response to a command (SW1-SW2).<br><br>**Constraints**: *Pattern*: `^.{2,2}$` |

## Example

```ts
import {
  CardReaderAPDUResponse2,
  ErrorCondition1Enum,
  Result11Enum,
} from 'adyen';

const cardReaderAPDUResponse2: CardReaderAPDUResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  cardStatusWords: 'CardStatusWords8',
  aPDUData: 'APDUData4',
};
```

