
# Event Notification 3

*This model accepts additional fields of type unknown.*

## Structure

`EventNotification3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timeStamp` | `string` | Required | Date and time of a transaction for the Sale System, the POI System or the Acquirer. |
| `eventToNotify` | [`EventToNotify1`](../../doc/models/event-to-notify-1.md) | Required | - |
| `eventDetails` | `string \| undefined` | Optional | Information about the event the POI notifies to the Sale System.<br>If present, the Sale logs it for further examination.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `rejectedMessage` | `string \| undefined` | Optional | Message request rejected by the receiver.<br>Mandatory if EventToNotify is Reject, absent in other cases.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `maintenanceRequiredFlag` | `boolean \| undefined` | Optional | Indicates if the occurred event requires maintenance call or action.<br><br>**Default**: `false` |
| `displayOutput` | [`DisplayOutput[] \| undefined`](../../doc/models/display-output.md) | Optional | Information to display and the way to process the display.<br>To display an event message. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  Device11,
  EventNotification3,
  EventToNotify1,
  InfoQualify1,
  MenuEntryTag1,
  OutputFormat1,
  OutputFormat2,
} from 'adyen';

const eventNotification3: EventNotification3 = {
  timeStamp: '2016-03-13T12:52:32.123Z',
  eventToNotify: EventToNotify1.SaleAdmin,
  eventDetails: 'EventDetails6',
  rejectedMessage: 'RejectedMessage8',
  maintenanceRequiredFlag: false,
  displayOutput: [
    {
      device: Device11.CashierDisplay,
      infoQualify: InfoQualify1.Status,
      outputContent: {
        outputFormat: OutputFormat1.Xhtml,
        predefinedContent: {
          referenceId: 'ReferenceID0',
          language: 'Language2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1.SingleWidth,
            characterHeight: CharacterHeight1.SingleHeight,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputXhtml: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      responseRequiredFlag: false,
      minimumDisplayTime: 110,
      menuEntry: [
        {
          outputFormat: OutputFormat2.Xhtml,
          menuEntryTag: MenuEntryTag1.SubMenu,
          defaultSelectedFlag: false,
          predefinedContent: {
            referenceId: 'ReferenceID0',
            language: 'Language2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          outputText: [
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          outputXhtml: 'OutputXHTML8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          outputFormat: OutputFormat2.Xhtml,
          menuEntryTag: MenuEntryTag1.SubMenu,
          defaultSelectedFlag: false,
          predefinedContent: {
            referenceId: 'ReferenceID0',
            language: 'Language2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          outputText: [
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          outputXhtml: 'OutputXHTML8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      outputSignature: 'OutputSignature4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      device: Device11.CashierDisplay,
      infoQualify: InfoQualify1.Status,
      outputContent: {
        outputFormat: OutputFormat1.Xhtml,
        predefinedContent: {
          referenceId: 'ReferenceID0',
          language: 'Language2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1.SingleWidth,
            characterHeight: CharacterHeight1.SingleHeight,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputXhtml: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      responseRequiredFlag: false,
      minimumDisplayTime: 110,
      menuEntry: [
        {
          outputFormat: OutputFormat2.Xhtml,
          menuEntryTag: MenuEntryTag1.SubMenu,
          defaultSelectedFlag: false,
          predefinedContent: {
            referenceId: 'ReferenceID0',
            language: 'Language2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          outputText: [
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          outputXhtml: 'OutputXHTML8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          outputFormat: OutputFormat2.Xhtml,
          menuEntryTag: MenuEntryTag1.SubMenu,
          defaultSelectedFlag: false,
          predefinedContent: {
            referenceId: 'ReferenceID0',
            language: 'Language2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          outputText: [
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          outputXhtml: 'OutputXHTML8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      outputSignature: 'OutputSignature4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      device: Device11.CashierDisplay,
      infoQualify: InfoQualify1.Status,
      outputContent: {
        outputFormat: OutputFormat1.Xhtml,
        predefinedContent: {
          referenceId: 'ReferenceID0',
          language: 'Language2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1.SingleWidth,
            characterHeight: CharacterHeight1.SingleHeight,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputXhtml: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      responseRequiredFlag: false,
      minimumDisplayTime: 110,
      menuEntry: [
        {
          outputFormat: OutputFormat2.Xhtml,
          menuEntryTag: MenuEntryTag1.SubMenu,
          defaultSelectedFlag: false,
          predefinedContent: {
            referenceId: 'ReferenceID0',
            language: 'Language2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          outputText: [
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          outputXhtml: 'OutputXHTML8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          outputFormat: OutputFormat2.Xhtml,
          menuEntryTag: MenuEntryTag1.SubMenu,
          defaultSelectedFlag: false,
          predefinedContent: {
            referenceId: 'ReferenceID0',
            language: 'Language2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          outputText: [
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1.SingleWidth,
              characterHeight: CharacterHeight1.SingleHeight,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          outputXhtml: 'OutputXHTML8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      outputSignature: 'OutputSignature4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

