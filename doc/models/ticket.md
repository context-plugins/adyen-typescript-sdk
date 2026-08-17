
# Ticket

## Structure

`Ticket`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issueAddress` | `string \| undefined` | Optional | The address of the organization that issued the ticket.<br><br>* minLength: 0 characters<br>* maxLength: 16 characters<br>* **additionalData key:** `airline.ticket_issue_address` |
| `issueDate` | `string \| undefined` | Optional | The date that the ticket was issued to the passenger.<br><br>* minLength: 10 characters<br>* maxLength: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `airline.issue_date` |
| `number` | `string \| undefined` | Optional | The ticket's unique identifier.<br><br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.ticket_number` |

## Example

```ts
import { Ticket } from 'adyen';

const ticket: Ticket = {
  issueAddress: 'issueAddress8',
  issueDate: '2016-03-13T12:52:32.123Z',
  number: 'number8',
};
```

