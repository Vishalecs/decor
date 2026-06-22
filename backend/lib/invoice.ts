export interface InvoiceData {
  bookingId: string
  invoiceNumber: string
  invoiceDate: string
  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  serviceName: string
  serviceDescription: string
  eventDate: string
  eventTime: string
  eventLocation: string
  amount: number
  gstRate?: number
  gstAmount?: number
  totalAmount: number
  paymentMethod: string
  paymentStatus: 'Paid' | 'Pending'
  notes?: string
}

export function generateInvoiceHTML(invoice: InvoiceData): string {
  const gstAmount = invoice.gstAmount || 0
  const subtotal = invoice.amount

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice - ${invoice.invoiceNumber}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px;
          background: white;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 40px;
          border-bottom: 3px solid #c1216e;
          padding-bottom: 20px;
        }
        .company-info h1 {
          font-size: 32px;
          color: #c1216e;
          margin-bottom: 5px;
        }
        .company-info p {
          color: #666;
          font-size: 14px;
        }
        .invoice-meta {
          text-align: right;
        }
        .invoice-meta p {
          margin-bottom: 8px;
          font-size: 14px;
        }
        .invoice-meta strong {
          color: #c1216e;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 12px;
          font-weight: bold;
          color: #999;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .section-content {
          font-size: 14px;
          color: #333;
        }
        .two-columns {
          display: flex;
          gap: 40px;
          margin-bottom: 30px;
        }
        .two-columns .section {
          flex: 1;
          margin-bottom: 0;
        }
        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .details-table th {
          background-color: #f5f5f5;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          font-size: 12px;
          border-bottom: 2px solid #d4a574;
        }
        .details-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }
        .details-table tr:last-child td {
          border-bottom: none;
        }
        .summary {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        .summary-box {
          width: 300px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 14px;
          border-bottom: 1px solid #eee;
        }
        .summary-row.total {
          font-weight: bold;
          font-size: 16px;
          color: #c1216e;
          border-bottom: 2px solid #c1216e;
          padding-top: 15px;
          padding-bottom: 15px;
        }
        .payment-status {
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          margin-top: 10px;
        }
        .status-paid {
          background-color: #e6f5e0;
          color: #2d5d1f;
        }
        .status-pending {
          background-color: #fff4e6;
          color: #8d5e00;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 12px;
          color: #999;
        }
        .notes {
          margin-top: 30px;
          padding: 15px;
          background-color: #f9f9f9;
          border-left: 4px solid #d4a574;
          font-size: 13px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="company-info">
            <h1>DECOR</h1>
            <p>We Decor, You Celebrate</p>
            <p style="margin-top: 10px;">Email: support@decor.com</p>
            <p>Phone: +91-XXXXXXXXXX</p>
          </div>
          <div class="invoice-meta">
            <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
            <p><strong>Invoice Date:</strong> ${new Date(invoice.invoiceDate).toLocaleDateString('en-IN')}</p>
            <p><strong>Booking ID:</strong> ${invoice.bookingId}</p>
          </div>
        </div>

        <!-- Customer & Event Info -->
        <div class="two-columns">
          <div class="section">
            <div class="section-title">Bill To</div>
            <div class="section-content">
              <p><strong>${invoice.customerName}</strong></p>
              <p>${invoice.customerAddress}</p>
              <p>Email: ${invoice.customerEmail}</p>
              <p>Phone: ${invoice.customerPhone}</p>
            </div>
          </div>
          <div class="section">
            <div class="section-title">Event Details</div>
            <div class="section-content">
              <p><strong>Service:</strong> ${invoice.serviceName}</p>
              <p><strong>Date:</strong> ${new Date(invoice.eventDate).toLocaleDateString('en-IN')} at ${invoice.eventTime}</p>
              <p><strong>Location:</strong> ${invoice.eventLocation}</p>
            </div>
          </div>
        </div>

        <!-- Services Table -->
        <table class="details-table">
          <thead>
            <tr>
              <th style="width: 50%;">Description</th>
              <th style="width: 25%; text-align: right;">Amount</th>
              <th style="width: 25%; text-align: right;">Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${invoice.serviceDescription}</td>
              <td style="text-align: right;">₹${subtotal.toLocaleString()}</td>
              <td style="text-align: right;">₹${invoice.gstAmount || 0}</td>
            </tr>
          </tbody>
        </table>

        <!-- Summary -->
        <div class="summary">
          <div class="summary-box">
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>₹${subtotal.toLocaleString()}</span>
            </div>
            ${invoice.gstAmount ? `
            <div class="summary-row">
              <span>GST (${invoice.gstRate || 18}%):</span>
              <span>₹${invoice.gstAmount.toLocaleString()}</span>
            </div>
            ` : ''}
            <div class="summary-row total">
              <span>Total Amount:</span>
              <span>₹${invoice.totalAmount.toLocaleString()}</span>
            </div>
            <div class="summary-row">
              <span>Payment Method:</span>
              <span>${invoice.paymentMethod}</span>
            </div>
            <div>
              <span class="payment-status ${invoice.paymentStatus === 'Paid' ? 'status-paid' : 'status-pending'}">
                Payment Status: ${invoice.paymentStatus}
              </span>
            </div>
          </div>
        </div>

        ${invoice.notes ? `
        <div class="notes">
          <strong>Notes:</strong><br/>
          ${invoice.notes}
        </div>
        ` : ''}

        <!-- Footer -->
        <div class="footer">
          <p>Thank you for choosing DECOR for your event decoration needs!</p>
          <p style="margin-top: 10px;">This is a computer-generated invoice and does not require a signature.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate invoice as PDF (requires a PDF library - using HTML for now)
export function generateInvoiceId(bookingId: string): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  return `INV-${bookingId}-${timestamp}`
}
