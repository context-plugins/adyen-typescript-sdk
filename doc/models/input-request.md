
# Input Request

Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.

## Structure

`InputRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayOutput` | [`DisplayOutput2 \| undefined`](../../doc/models/display-output-2.md) | Optional | Information to display and the way to process the display. |
| `inputData` | [`InputData2`](../../doc/models/input-data-2.md) | Required | Information related to an Input request. It conveys the target input logical device, the type of input command, and possible minimum and maximum length of the input. In addition, if the requestor might require to receive an Event Notification if a card is inserted in a card reader, with the `NotifyCardInputFlag`. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  Device2Enum,
  InfoQualify1Enum,
  InfoQualify2Enum,
  InputCommand1Enum,
  InputRequest,
  MenuEntryTag1Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
} from 'adyen';

const inputRequest: InputRequest = {
  inputData: {
    device: Device2Enum.CashierDisplay,
    infoQualify: InfoQualify2Enum.CustomerAssistance,
    inputCommand: InputCommand1Enum.GetAnyKey,
    notifyCardInputFlag: false,
    maxInputTime: 154,
    immediateResponseFlag: false,
    minLength: 242,
    maxLength: 246,
    waitUserValidationFlag: true,
    fromRightToLeftFlag: false,
    maskCharactersFlag: false,
    beepKeyFlag: false,
    globalCorrectionFlag: false,
    disableCancelFlag: false,
    disableCorrectFlag: false,
    disableValidFlag: false,
    menuBackFlag: false,
  },
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

