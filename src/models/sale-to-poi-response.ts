import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adminResponse2Schema, type AdminResponse2 } from "./admin-response2.js";
import { balanceInquiryResponse2Schema, type BalanceInquiryResponse2 } from "./balance-inquiry-response2.js";
import {
  cardAcquisitionResponse2Schema,
  type CardAcquisitionResponse2,
} from "./card-acquisition-response2.js";
import { cardReaderApduResponse2Schema, type CardReaderApduResponse2 } from "./card-reader-apdu-response2.js";
import { diagnosisResponse2Schema, type DiagnosisResponse2 } from "./diagnosis-response2.js";
import { displayResponse2Schema, type DisplayResponse2 } from "./display-response2.js";
import { enableServiceResponse2Schema, type EnableServiceResponse2 } from "./enable-service-response2.js";
import { getTotalsResponse2Schema, type GetTotalsResponse2 } from "./get-totals-response2.js";
import { inputResponse2Schema, type InputResponse2 } from "./input-response2.js";
import { loginResponse2Schema, type LoginResponse2 } from "./login-response2.js";
import { logoutResponse2Schema, type LogoutResponse2 } from "./logout-response2.js";
import { loyaltyResponse2Schema, type LoyaltyResponse2 } from "./loyalty-response2.js";
import { messageHeaderSchema, type MessageHeader } from "./message-header.js";
import { paymentResponse21Schema, type PaymentResponse21 } from "./payment-response21.js";
import { printResponse2Schema, type PrintResponse2 } from "./print-response2.js";
import { reconciliationResponse2Schema, type ReconciliationResponse2 } from "./reconciliation-response2.js";
import { reversalResponse2Schema, type ReversalResponse2 } from "./reversal-response2.js";
import { storedValueResponse2Schema, type StoredValueResponse2 } from "./stored-value-response2.js";
import {
  transactionStatusResponse2Schema,
  type TransactionStatusResponse2,
} from "./transaction-status-response2.js";

/**
 * The SaleToPOIResponse message pair is a container for the response message content. It contains a
 * MessageHeader and a message body.
 */
export type SaleToPoiResponse = {
  /**
   * Message header of the Sale to POI protocol message. It conveys Information related to the Sale
   * to POI protocol management.
   */
  messageHeader: MessageHeader;
  /** Content of the Balance Inquiry Response message. */
  balanceInquiryResponse?: BalanceInquiryResponse2;
  /** Content of the Card Acquisition Response message. */
  cardAcquisitionResponse?: CardAcquisitionResponse2;
  /** Content of the Admin Response message. */
  adminResponse?: AdminResponse2;
  /** Content of the Diagnosis Response message. */
  diagnosisResponse?: DiagnosisResponse2;
  /** Content of the Display Response message. */
  displayResponse?: DisplayResponse2;
  /** Content of the Enable Service Response message. */
  enableServiceResponse?: EnableServiceResponse2;
  /** Content of the Get Totals Response message. */
  getTotalsResponse?: GetTotalsResponse2;
  /** Content of the Input Response message. */
  inputResponse?: InputResponse2;
  /** Content of the Login Response message. */
  loginResponse?: LoginResponse2;
  /** Content of the Logout Response message. */
  logoutResponse?: LogoutResponse2;
  /** Content of the Loyalty Response message. */
  loyaltyResponse?: LoyaltyResponse2;
  /** Content of the Payment Response message. */
  paymentResponse?: PaymentResponse21;
  /** Content of the Print Response message. */
  printResponse?: PrintResponse2;
  /** Content of the Card Reader APDU Response message. */
  cardReaderApduResponse?: CardReaderApduResponse2;
  /** Content of the Reconciliation Response message. */
  reconciliationResponse?: ReconciliationResponse2;
  /** Content of the Reversal Response message. */
  reversalResponse?: ReversalResponse2;
  /** Content of the Stored Value Response message. */
  storedValueResponse?: StoredValueResponse2;
  /** Content of the TransactionStatus Response message. */
  transactionStatusResponse?: TransactionStatusResponse2;
};

export const saleToPoiResponseSchema: Schema<SaleToPoiResponse> = s.object<SaleToPoiResponse>({
  messageHeader: messageHeaderSchema,
  balanceInquiryResponse: s.optional(s.lazy(() => balanceInquiryResponse2Schema)),
  cardAcquisitionResponse: s.optional(s.lazy(() => cardAcquisitionResponse2Schema)),
  adminResponse: s.optional(s.lazy(() => adminResponse2Schema)),
  diagnosisResponse: s.optional(s.lazy(() => diagnosisResponse2Schema)),
  displayResponse: s.optional(s.lazy(() => displayResponse2Schema)),
  enableServiceResponse: s.optional(s.lazy(() => enableServiceResponse2Schema)),
  getTotalsResponse: s.optional(s.lazy(() => getTotalsResponse2Schema)),
  inputResponse: s.optional(s.lazy(() => inputResponse2Schema)),
  loginResponse: s.optional(s.lazy(() => loginResponse2Schema)),
  logoutResponse: s.optional(s.lazy(() => logoutResponse2Schema)),
  loyaltyResponse: s.optional(s.lazy(() => loyaltyResponse2Schema)),
  paymentResponse: s.optional(s.lazy(() => paymentResponse21Schema)),
  printResponse: s.optional(s.lazy(() => printResponse2Schema)),
  cardReaderApduResponse: s.optional(s.lazy(() => cardReaderApduResponse2Schema)),
  reconciliationResponse: s.optional(s.lazy(() => reconciliationResponse2Schema)),
  reversalResponse: s.optional(s.lazy(() => reversalResponse2Schema)),
  storedValueResponse: s.optional(s.lazy(() => storedValueResponse2Schema)),
  transactionStatusResponse: s.optional(s.lazy(() => transactionStatusResponse2Schema)),
  _keysMap: {
    messageHeader: "MessageHeader",
    balanceInquiryResponse: "BalanceInquiryResponse",
    cardAcquisitionResponse: "CardAcquisitionResponse",
    adminResponse: "AdminResponse",
    diagnosisResponse: "DiagnosisResponse",
    displayResponse: "DisplayResponse",
    enableServiceResponse: "EnableServiceResponse",
    getTotalsResponse: "GetTotalsResponse",
    inputResponse: "InputResponse",
    loginResponse: "LoginResponse",
    logoutResponse: "LogoutResponse",
    loyaltyResponse: "LoyaltyResponse",
    paymentResponse: "PaymentResponse",
    printResponse: "PrintResponse",
    cardReaderApduResponse: "CardReaderAPDUResponse",
    reconciliationResponse: "ReconciliationResponse",
    reversalResponse: "ReversalResponse",
    storedValueResponse: "StoredValueResponse",
    transactionStatusResponse: "TransactionStatusResponse",
  },
});
