import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAcquisitionTransaction1Schema,
  type CardAcquisitionTransaction1,
} from "./card-acquisition-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

/**
 * It conveys Information related to the payment and loyalty cards to read and analyse. This message
 * pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card
 * Acquisition message pair. Content of the Card Acquisition Request message.
 */
export type CardAcquisitionRequest = {
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the payment and loyalty card acquisition. */
  cardAcquisitionTransaction: CardAcquisitionTransaction1;
};

export const cardAcquisitionRequestSchema: Schema<CardAcquisitionRequest> = s.object<CardAcquisitionRequest>({
  saleData: saleData1Schema,
  cardAcquisitionTransaction: cardAcquisitionTransaction1Schema,
  _keysMap: {
    saleData: "SaleData",
    cardAcquisitionTransaction: "CardAcquisitionTransaction",
  },
});
