
# Get Terminal Details Response

## Structure

`GetTerminalDetailsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bluetoothIp` | `string \| undefined` | Optional | The Bluetooth IP address of the terminal. |
| `bluetoothMac` | `string \| undefined` | Optional | The Bluetooth MAC address of the terminal. |
| `companyAccount` | `string` | Required | The company account that the terminal is associated with. If this is the only account level shown in the response, the terminal is assigned to the inventory of the company account. |
| `country` | `string \| undefined` | Optional | The country where the terminal is used. |
| `deviceModel` | `string \| undefined` | Optional | The model name of the terminal. |
| `dhcpEnabled` | `boolean \| undefined` | Optional | Indicates whether assigning IP addresses through a DHCP server is enabled on the terminal. |
| `displayLabel` | `string \| null \| undefined` | Optional | The label shown on the status bar of the display. This label (if any) is specified in your Customer Area. |
| `ethernetIp` | `string \| null \| undefined` | Optional | The terminal's IP address in your Ethernet network. |
| `ethernetMac` | `string \| null \| undefined` | Optional | The terminal's MAC address in your Ethernet network. |
| `firmwareVersion` | `string \| undefined` | Optional | The software release currently in use on the terminal. |
| `iccid` | `string \| null \| undefined` | Optional | The integrated circuit card identifier (ICCID) of the SIM card in the terminal. |
| `lastActivityDateTime` | `string \| null \| undefined` | Optional | Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago. |
| `lastTransactionDateTime` | `string \| null \| undefined` | Optional | Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago. |
| `linkNegotiation` | `string \| null \| undefined` | Optional | The Ethernet link negotiation that the terminal uses:<br><br>- `auto`: Auto-negotiation<br><br>- `100full`: 100 Mbps full duplex |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account that the terminal is associated with. If the response doesn't contain a `store` the terminal is assigned to this merchant account. |
| `merchantInventory` | `boolean \| undefined` | Optional | Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned when the terminal is assigned to a merchant account.<br><br>- If **true**, this indicates that the terminal is in the merchant inventory. This also means that the terminal cannot be boarded.<br><br>- If **false**, this indicates that the terminal is assigned to the merchant account as an in-store terminal. This means that the terminal is ready to be boarded, or is already boarded. |
| `permanentTerminalId` | `string \| undefined` | Optional | The permanent terminal ID. |
| `serialNumber` | `string \| undefined` | Optional | The serial number of the terminal. |
| `simStatus` | `string \| null \| undefined` | Optional | On a terminal that supports 3G or 4G connectivity, indicates the status of the SIM card in the terminal: ACTIVE or INVENTORY. |
| `store` | `string \| undefined` | Optional | The store code of the store that the terminal is assigned to. |
| `storeDetails` | [`Store11 \| undefined`](../../doc/models/store-11.md) | Optional | The store that the terminal is assigned to. |
| `terminal` | `string` | Required | The unique terminal ID. |
| `terminalStatus` | [`TerminalStatusEnum \| undefined`](../../doc/models/terminal-status-enum.md) | Optional | The status of the terminal:<br><br>- `OnlineToday`, `OnlineLast1Day`, `OnlineLast2Days` etcetera to `OnlineLast7Days`: Indicates when in the past week the terminal was last online.<br><br>- `SwitchedOff`: Indicates it was more than a week ago that the terminal was last online.<br><br>- `ReAssignToInventoryPending`, `ReAssignToStorePending`, `ReAssignToMerchantInventoryPending`: Indicates the terminal is scheduled to be reassigned. |
| `wifiIp` | `string \| undefined` | Optional | The terminal's IP address in your Wi-Fi network. |
| `wifiMac` | `string \| undefined` | Optional | The terminal's MAC address in your Wi-Fi network. |

## Example

```ts
import { GetTerminalDetailsResponse } from 'adyen';

const getTerminalDetailsResponse: GetTerminalDetailsResponse = {
  companyAccount: 'companyAccount0',
  terminal: 'terminal4',
  bluetoothIp: 'bluetoothIp2',
  bluetoothMac: 'bluetoothMac6',
  country: 'country0',
  deviceModel: 'deviceModel4',
  dhcpEnabled: false,
};
```

