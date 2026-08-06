
# Data Center

*This model accepts additional fields of type unknown.*

## Structure

`DataCenter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `livePrefix` | `string \| undefined` | Optional | The unique [live URL prefix](https://docs.adyen.com/development-resources/live-endpoints#live-url-prefix) for your live endpoint. Each data center has its own live URL prefix.<br><br>This field is empty for requests made in the test environment. |
| `name` | `string \| undefined` | Optional | The name assigned to a data center, for example **EU** for the European data center. Possible values are:<br><br>* **default**: the European data center. This value is always returned in the test environment.<br>* **AU**<br>* **EU**<br>* **US** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DataCenter } from 'adyen';

const dataCenter: DataCenter = {
  livePrefix: 'livePrefix0',
  name: 'name0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

