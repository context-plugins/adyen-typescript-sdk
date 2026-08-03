
# Card Reader Apdu Request 2

Content of the Card Reader APDU Request message.

*This model accepts additional fields of type unknown.*

## Structure

`CardReaderApduRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apduClass` | `string` | Required | Class field of the APDU command (CLA). APDU request for Card Reader device request. For specific card like synchronous card, a private value should be used in accordance to ISO 7816- 4 (private range D0-FE).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `apduInstruction` | `string` | Required | Instruction field of the APDU command (INS).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `apduPar1` | `string` | Required | Parameter 1 field of the APDU command (P1).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `apduPar2` | `string` | Required | Parameter 2 field of the APDU command(P2).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `apduData` | `string \| undefined` | Optional | Data field of the APDU command (Lc + Data).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `apduExpectedLength` | `string \| undefined` | Optional | Expected length of the data field of the APDU response to the command (Le).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardReaderApduRequest2 } from 'adyenlib';

const cardReaderApduRequest2: CardReaderApduRequest2 = {
  apduClass: 'APDUClass2',
  apduInstruction: 'APDUInstruction0',
  apduPar1: 'APDUPar14',
  apduPar2: 'APDUPar26',
  apduData: 'APDUData8',
  apduExpectedLength: 'APDUExpectedLength2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

