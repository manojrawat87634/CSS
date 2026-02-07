export {};

// Contract (what the service MUST do)
interface PaymentService {
  pay(amount: number): boolean;
  refund(transactionId: string): boolean;
}

// Implementation (how it is done)
class StripePaymentService implements PaymentService {
  pay(amount: number): boolean {
    console.log(`Paid ₹${amount} using Stripe`);
    return true;
  }

  refund(transactionId: string): boolean {
    console.log(`Refunded transaction ${transactionId}`);
    return true;
  }
}

// Usage (depends on interface, not implementation)
const paymentService: PaymentService = new StripePaymentService();

paymentService.pay(1000);
paymentService.refund("TXN123");