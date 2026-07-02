# 06 — Data Model

A starting relational schema (PostgreSQL via Prisma). Not final — evolve via migrations.
Money is stored in the smallest unit as integers to avoid floating-point errors:
**store amounts in poisha (int), i.e. ৳1 = 100.** Format to ৳ in the UI only.

## Core entities

### Product
- id, slug (unique), name, description
- basePrice (int, poisha), currency = "BDT"
- status (draft / active / archived)
- categoryId → Category
- createdAt, updatedAt

### ProductVariant (for size/color etc.)
- id, productId → Product
- name (e.g. "Red / L"), sku (unique)
- price (int, poisha; overrides base if set)
- stock (int)
- attributes (json: { color, size, ... })

### ProductImage
- id, productId → Product
- url, alt, sortOrder

### Category
- id, slug (unique), name, parentId (nullable, for subcategories), sortOrder

### Customer (optional account; guest checkout allowed)
- id, name, email (unique, nullable for guest), phone (BD format), passwordHash (nullable)
- role (customer / admin)
- createdAt

### Address
- id, customerId → Customer (nullable for guest)
- recipientName, phone
- division, district, thana, addressLine, landmark (helps rural delivery)
- isDefault

### Cart / CartItem
- Cart: id, customerId (nullable), sessionId, updatedAt
- CartItem: id, cartId, variantId, quantity, unitPrice (int, snapshot)

### Order
- id, orderNumber (human-friendly, unique)
- customerId (nullable), guest contact (name, phone, email)
- shippingAddress (embedded or → Address)
- status: new / processing / dispatched / delivered / returned / cancelled
- subtotal, shippingFee, discount, total (all int poisha)
- paymentMethod: cod / sslcommerz
- paymentStatus: pending / paid / failed / refunded
- phoneVerified (bool) — for COD gating
- createdAt, updatedAt

### OrderItem
- id, orderId → Order
- variantId, productName (snapshot), unitPrice (int), quantity

### Payment
- id, orderId → Order
- provider (sslcommerz / cod / bkash …)
- providerRef (transaction/session id)
- amount (int), status, rawResponse (json, for reconciliation), createdAt

### Shipment
- id, orderId → Order
- courier (steadfast / pathao / redx / paperfly)
- consignmentId / trackingId (from courier API)
- status, codAmount (int), remittedAt (nullable)
- createdAt, updatedAt

### OTPVerification (COD phone gate)
- id, phone, codeHash, orderId (nullable), expiresAt, consumedAt

## Relationships (quick view)
- Category 1—* Product 1—* ProductVariant
- Product 1—* ProductImage
- Customer 1—* Address, 1—* Order
- Order 1—* OrderItem, 1—* Payment, 1—* Shipment
- Cart 1—* CartItem

## Rules
- All money = integer poisha. Convert only at display.
- Snapshot price and product name onto OrderItem at purchase time (so later price/name
  edits don't rewrite historical orders).
- Never hard-delete orders/payments — use status fields; keep an audit trail.
