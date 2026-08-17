
# Event Notification

Content of the EventNotification message.
It conveys Information related to the event, and possible action (maintenance, message to display).

## Structure

`EventNotification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timeStamp` | `string` | Required | Date and time of a transaction for the Sale System, the POI System or the Acquirer. |
| `eventToNotify` | [`EventToNotify1Enum`](../../doc/models/event-to-notify-1-enum.md) | Required | Event the POI notifies to the Sale System.<br>Possible values:<br><br>* **Abort**<br>* **BeginMaintenance**<br>* **CardInserted**<br>* **CardRemoved**<br>* **Completed**<br>* **CustomerLanguage**<br>* **EndMaintenance**<br>* **Initialised**<br>* **KeyPressed**<br>* **OutOfOrder**<br>* **Reject**<br>* **SaleAdmin**<br>* **SaleWakeUp**<br>* **ScanBarcodeResult**<br>* **SecurityAlarm**<br>* **Shutdown**<br>* **StopAssistance**<br>* **UseAnotherCardForPreauth** |
| `eventDetails` | `string \| undefined` | Optional | Information about the event the POI notifies to the Sale System.<br>If present, the Sale logs it for further examination.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `rejectedMessage` | `string \| undefined` | Optional | Message request rejected by the receiver.<br>Mandatory if EventToNotify is Reject, absent in other cases.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `maintenanceRequiredFlag` | `boolean \| undefined` | Optional | Indicates if the occurred event requires maintenance call or action.<br><br>**Default**: `false` |
| `displayOutput` | [`DisplayOutput[] \| undefined`](../../doc/models/display-output.md) | Optional | Information to display and the way to process the display.<br>To display an event message. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  EventNotification,
  EventToNotify1Enum,
  InfoQualify1Enum,
  MenuEntryTag1Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
} from 'adyen';

const eventNotification: EventNotification = {
  timeStamp: '2016-03-13T12:52:32.123Z',
  eventToNotify: EventToNotify1Enum.CardRemoved,
  eventDetails: 'EventDetails2',
  rejectedMessage: 'RejectedMessage2',
  maintenanceRequiredFlag: false,
  displayOutput: [
    {
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
    {
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
    {
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
    }
  ],
};
```

