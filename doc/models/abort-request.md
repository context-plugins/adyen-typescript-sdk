
# Abort Request

Body of the Abort Request message.
It conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).

## Structure

`AbortRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageReference` | [`MessageReference4`](../../doc/models/message-reference-4.md) | Required | Identification of a previous POI transaction. |
| `abortReason` | `string` | Required | Reason of aborting a transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `displayOutput` | [`DisplayOutput1 \| undefined`](../../doc/models/display-output-1.md) | Optional | Information to display and the way to process the display.<br>To display an abort message to the Customer. |

## Example

```ts
import {
  AbortRequest,
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  InfoQualify1Enum,
  MenuEntryTag1Enum,
  MessageCategory2Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
} from 'adyen';

const abortRequest: AbortRequest = {
  messageReference: {
    messageCategory: MessageCategory2Enum.Payment,
    serviceID: 'ServiceID0',
    deviceID: 'DeviceID2',
    saleID: 'SaleID8',
    pOIID: 'POIID2',
  },
  abortReason: 'AbortReason0',
  displayOutput: {
    device: Device11Enum.CashierDisplay,
    infoQualify: InfoQualify1Enum.Status,
    outputContent: {
      outputFormat: OutputFormat1Enum.XHTML,
      predefinedContent: {
        referenceID: 'ReferenceID0',
        language: 'Language2',
      },
      outputText: [
        {
          text: 'Text6',
          characterSet: 194,
          startRow: 74,
          startColumn: 220,
          characterWidth: CharacterWidth1Enum.SingleWidth,
          characterHeight: CharacterHeight1Enum.SingleHeight,
        }
      ],
      outputXHTML: 'OutputXHTML2',
      outputBarcode: {
        barcodeValue: 'BarcodeValue2',
      },
    },
    responseRequiredFlag: false,
    minimumDisplayTime: 110,
    menuEntry: [
      {
        outputFormat: OutputFormat2Enum.XHTML,
        menuEntryTag: MenuEntryTag1Enum.SubMenu,
        defaultSelectedFlag: false,
        predefinedContent: {
          referenceID: 'ReferenceID0',
          language: 'Language2',
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          },
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          }
        ],
        outputXHTML: 'OutputXHTML8',
      },
      {
        outputFormat: OutputFormat2Enum.XHTML,
        menuEntryTag: MenuEntryTag1Enum.SubMenu,
        defaultSelectedFlag: false,
        predefinedContent: {
          referenceID: 'ReferenceID0',
          language: 'Language2',
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          },
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          }
        ],
        outputXHTML: 'OutputXHTML8',
      }
    ],
    outputSignature: 'OutputSignature4',
  },
};
```

