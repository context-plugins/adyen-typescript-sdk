import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { abortRequest2Schema, type AbortRequest2 } from "./abort-request2.js";
import { adminRequest2Schema, type AdminRequest2 } from "./admin-request2.js";
import { balanceInquiryRequest2Schema, type BalanceInquiryRequest2 } from "./balance-inquiry-request2.js";
import { cardAcquisitionRequest2Schema, type CardAcquisitionRequest2 } from "./card-acquisition-request2.js";
import { cardReaderApduRequest2Schema, type CardReaderApduRequest2 } from "./card-reader-apdu-request2.js";
import { diagnosisRequest2Schema, type DiagnosisRequest2 } from "./diagnosis-request2.js";
import { displayRequest2Schema, type DisplayRequest2 } from "./display-request2.js";
import { enableServiceRequest2Schema, type EnableServiceRequest2 } from "./enable-service-request2.js";
import { eventNotification2Schema, type EventNotification2 } from "./event-notification2.js";
import { getTotalsRequest2Schema, type GetTotalsRequest2 } from "./get-totals-request2.js";
import { inputRequest2Schema, type InputRequest2 } from "./input-request2.js";
import { inputUpdate2Schema, type InputUpdate2 } from "./input-update2.js";
import { loginRequest2Schema, type LoginRequest2 } from "./login-request2.js";
import { logoutRequest2Schema, type LogoutRequest2 } from "./logout-request2.js";
import { messageHeaderSchema, type MessageHeader } from "./message-header.js";
import { paymentRequest21Schema, type PaymentRequest21 } from "./payment-request21.js";
import { printRequest2Schema, type PrintRequest2 } from "./print-request2.js";
import { reconciliationRequest2Schema, type ReconciliationRequest2 } from "./reconciliation-request2.js";
import { reversalRequest2Schema, type ReversalRequest2 } from "./reversal-request2.js";
import { storedValueRequest2Schema, type StoredValueRequest2 } from "./stored-value-request2.js";
import {
  transactionStatusRequest2Schema,
  type TransactionStatusRequest2,
} from "./transaction-status-request2.js";

/**
 * The SaleToPOIRequest message pair is a container for the request message content. It contains a
 * MessageHeader and a message body.
 */
export type SaleToPoiRequest = {
  /**
   * Message header of the Sale to POI protocol message. It conveys Information related to the Sale
   * to POI protocol management.
   */
  messageHeader: MessageHeader;
  /** Content of the Abort Request message. */
  abortRequest?: AbortRequest2;
  /** Content of the Balance Inquiry Request message. */
  balanceInquiryRequest?: BalanceInquiryRequest2;
  /** Content of the Card Acquisition Request message. */
  cardAcquisitionRequest?: CardAcquisitionRequest2;
  /** Content of the Admin Request message. */
  adminRequest?: AdminRequest2;
  /** Content of the Diagnosis Request message. */
  diagnosisRequest?: DiagnosisRequest2;
  /** Content of the Display Request message. */
  displayRequest?: DisplayRequest2;
  /** Content of the Enable Service Request message. */
  enableServiceRequest?: EnableServiceRequest2;
  /** Content of the EventNotification message. */
  eventNotification?: EventNotification2;
  /** Content of the Get Totals Request message. */
  getTotalsRequest?: GetTotalsRequest2;
  /** Content of the Input Request message. */
  inputRequest?: InputRequest2;
  /** Content of the Input Update message. */
  inputUpdate?: InputUpdate2;
  /** Content of the Login Request message. */
  loginRequest?: LoginRequest2;
  /** Content of the Logout Request message. */
  logoutRequest?: LogoutRequest2;
  /** Content of the Payment Request message. */
  paymentRequest?: PaymentRequest21;
  /** Content of the Print Request message. */
  printRequest?: PrintRequest2;
  /** Content of the Card Reader APDU Request message. */
  cardReaderApduRequest?: CardReaderApduRequest2;
  /** Content of the Reconciliation Request message. */
  reconciliationRequest?: ReconciliationRequest2;
  /** Content of the Reversal Request message. */
  reversalRequest?: ReversalRequest2;
  /** Content of the Stored Value Request message. */
  storedValueRequest?: StoredValueRequest2;
  /** Content of the TransactionStatus Request message. */
  transactionStatusRequest?: TransactionStatusRequest2;
};

export const saleToPoiRequestSchema: Schema<SaleToPoiRequest> = s.object<SaleToPoiRequest>({
  messageHeader: messageHeaderSchema,
  abortRequest: s.optional(s.lazy(() => abortRequest2Schema)),
  balanceInquiryRequest: s.optional(s.lazy(() => balanceInquiryRequest2Schema)),
  cardAcquisitionRequest: s.optional(s.lazy(() => cardAcquisitionRequest2Schema)),
  adminRequest: s.optional(s.lazy(() => adminRequest2Schema)),
  diagnosisRequest: s.optional(s.lazy(() => diagnosisRequest2Schema)),
  displayRequest: s.optional(s.lazy(() => displayRequest2Schema)),
  enableServiceRequest: s.optional(s.lazy(() => enableServiceRequest2Schema)),
  eventNotification: s.optional(s.lazy(() => eventNotification2Schema)),
  getTotalsRequest: s.optional(s.lazy(() => getTotalsRequest2Schema)),
  inputRequest: s.optional(s.lazy(() => inputRequest2Schema)),
  inputUpdate: s.optional(s.lazy(() => inputUpdate2Schema)),
  loginRequest: s.optional(s.lazy(() => loginRequest2Schema)),
  logoutRequest: s.optional(s.lazy(() => logoutRequest2Schema)),
  paymentRequest: s.optional(s.lazy(() => paymentRequest21Schema)),
  printRequest: s.optional(s.lazy(() => printRequest2Schema)),
  cardReaderApduRequest: s.optional(s.lazy(() => cardReaderApduRequest2Schema)),
  reconciliationRequest: s.optional(s.lazy(() => reconciliationRequest2Schema)),
  reversalRequest: s.optional(s.lazy(() => reversalRequest2Schema)),
  storedValueRequest: s.optional(s.lazy(() => storedValueRequest2Schema)),
  transactionStatusRequest: s.optional(s.lazy(() => transactionStatusRequest2Schema)),
  _keysMap: {
    messageHeader: "MessageHeader",
    abortRequest: "AbortRequest",
    balanceInquiryRequest: "BalanceInquiryRequest",
    cardAcquisitionRequest: "CardAcquisitionRequest",
    adminRequest: "AdminRequest",
    diagnosisRequest: "DiagnosisRequest",
    displayRequest: "DisplayRequest",
    enableServiceRequest: "EnableServiceRequest",
    eventNotification: "EventNotification",
    getTotalsRequest: "GetTotalsRequest",
    inputRequest: "InputRequest",
    inputUpdate: "InputUpdate",
    loginRequest: "LoginRequest",
    logoutRequest: "LogoutRequest",
    paymentRequest: "PaymentRequest",
    printRequest: "PrintRequest",
    cardReaderApduRequest: "CardReaderAPDURequest",
    reconciliationRequest: "ReconciliationRequest",
    reversalRequest: "ReversalRequest",
    storedValueRequest: "StoredValueRequest",
    transactionStatusRequest: "TransactionStatusRequest",
  },
});
