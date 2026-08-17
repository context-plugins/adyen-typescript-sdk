
# Card Reader APDU Request

It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.
Content of the Card Reader APDU Request message.

## Structure

`CardReaderAPDURequest`

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
import { CardReaderAPDURequest } from 'adyen';

const cardReaderAPDURequest: CardReaderAPDURequest = {
  aPDUClass: 'APDUClass4',
  aPDUInstruction: 'APDUInstruction8',
  aPDUPar1: 'APDUPar12',
  aPDUPar2: 'APDUPar28',
  aPDUData: 'APDUData6',
  aPDUExpectedLength: 'APDUExpectedLength0',
};
```

