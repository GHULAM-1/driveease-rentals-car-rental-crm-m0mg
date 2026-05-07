# Build Plan: Car Rental CRM

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Develop Fleet Management Module

_Category: `feature` · Priority: `high`_

Create a fleet management module where each car has a detailed profile including registration, model, year, current location, availability status, and service history.

**Acceptance criteria:**
- Each car in the fleet can be individually added and edited in the system with all specified attributes.
- The service history can be updated and viewed for each vehicle.
- The system accurately reflects the current status and location of each vehicle.

---

### 2. Implement Booking System with Availability Calendar

_Category: `feature` · Priority: `high`_

Build a booking system to manage car rentals, prevent double bookings, and check vehicle availability by date range.

**Acceptance criteria:**
- Staff can check car availability for specific dates without double booking issues.
- The system prevents double bookings by locking availability in real-time as bookings are made.
- Booking records capture all customer information and booking details correctly.

---

### 3. Create Customer Management Module

_Category: `feature` · Priority: `high`_

Develop a CRM module that maintains customer profiles with document uploads and rental history tracking.

**Acceptance criteria:**
- Customer profiles can be created and managed in the system which include personal information and document uploads (CNIC, license).
- Rental history with past bookings and notes is accessible under each customer profile.
- Documents can be uploaded and viewed within the customer profile section.

---

### 4. Design Branch-Level Access Control

_Category: `infra` · Priority: `medium`_

Set up access controls so each branch views only its data, while the owner has visibility across all branches.

**Acceptance criteria:**
- Users associated with a branch can only view bookings, fleet, and customers linked to their branch.
- Owner account has access to view and manage data across all branches.

---

### 5. Develop Payments and Invoicing Module

_Category: `feature` · Priority: `medium`_

Create a module to record manual payments, generate invoices, and provide daily/monthly financial reports.

**Acceptance criteria:**
- Payments can be recorded against each booking in the system.
- Invoices can be generated upon booking completion.
- Daily and monthly financial reports can be generated easily, showing collections from different payment methods.

---

### 6. Build Vehicle Handover and Return Checklist

_Category: `ui` · Priority: `medium`_

Implement a digital checklist for vehicle handover and return including photo uploads for condition verification.

**Acceptance criteria:**
- Staff can complete a checklist for car handover and return on a mobile-friendly interface.
- Checklist includes fields for fuel level, mileage, exterior condition, and interior cleanliness.
- Photos can be attached to the checklist documenting the condition of the vehicle.

---

### 7. Develop Public Booking Inquiry Form

_Category: `feature` · Priority: `low`_

Build a simple public-facing booking inquiry form on the website where customers can check availability and request a booking.

**Acceptance criteria:**
- A booking inquiry form is available on the client's website where customers can input request details.
- Inquiries are logged into the CRM for staff review and follow-up.
- Customers receive an acknowledgment upon form submission.

---

### 8. Create Owner Dashboard and Reports Section

_Category: `ui` · Priority: `low`_

Design a dashboard for the owner with widgets summarizing daily operational data and access to detailed weekly/monthly reports.

**Acceptance criteria:**
- Dashboard shows real-time data including cars rented, daily collections, booking returns, and overdue status.
- Weekly and monthly reports are accessible summarizing revenue and usage statistics.

