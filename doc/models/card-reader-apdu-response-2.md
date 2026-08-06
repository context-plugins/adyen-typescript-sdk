
# Card Reader Apdu Response 2

Content of the Card Reader APDU Response message.

*This model accepts additional fields of type unknown.*

## Structure

`CardReaderApduResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `apduData` | `string \| undefined` | Optional | Data field of the APDU command (Lc + Data).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `cardStatusWords` | `string` | Required | Status of a smartcard response to a command (SW1-SW2).<br><br>**Constraints**: *Pattern*: `^.{2,2}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardReaderApduResponse2, ErrorCondition1, Result11 } from 'adyen';

const cardReaderApduResponse2: CardReaderApduResponse2 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardStatusWords: 'CardStatusWords0',
  apduData: 'APDUData2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

