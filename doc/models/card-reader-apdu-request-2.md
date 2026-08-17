
# Card Reader APDU Request 2

Content of the Card Reader APDU Request message.

## Structure

`CardReaderAPDURequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aPDUClass` | `string` | Required | Class field of the APDU command (CLA). APDU request for Card Reader device request. For specific card like synchronous card, a private value should be used in accordance to ISO 7816- 4 (private range D0-FE).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `aPDUInstruction` | `string` | Required | Instruction field of the APDU command (INS).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `aPDUPar1` | `string` | Required | Parameter 1 field of the APDU command (P1).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `aPDUPar2` | `string` | Required | Parameter 2 field of the APDU command(P2).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |
| `aPDUData` | `string \| undefined` | Optional | Data field of the APDU command (Lc + Data).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `aPDUExpectedLength` | `string \| undefined` | Optional | Expected length of the data field of the APDU response to the command (Le).<br><br>**Constraints**: *Pattern*: `^.{1,1}$` |

## Example

```ts
import { CardReaderAPDURequest2 } from 'adyen';

const cardReaderAPDURequest2: CardReaderAPDURequest2 = {
  aPDUClass: 'APDUClass0',
  aPDUInstruction: 'APDUInstruction2',
  aPDUPar1: 'APDUPar16',
  aPDUPar2: 'APDUPar24',
  aPDUData: 'APDUData0',
  aPDUExpectedLength: 'APDUExpectedLength4',
};
```

