# AGRIMATCH Hackathon Demo Guide

## Sequence

1. **Farmer Persona (Ramesh Kumar)**
   - Open `http://localhost:3000/farmer/home`
   - Click "Sell Produce"
   - Step through the wizard: Select Mango, 20 tonnes, Andhra Pradesh.
   - Upload image -> Trigger AI Analysis (Wait for 87% Grade A assessment).
   - Review Market Context (₹48-54/kg).
   - Click Publish.

2. **Business Persona (ABC Foods)**
   - Open `http://localhost:3000/business/requirements/new`
   - Use AI Parser: Type "I need 20 tonnes of Grade A Mango in Andhra Pradesh".
   - Confirm Requirement.
   - Go to `/business/supply` to view matches.
   - Click "Make Offer" on Ramesh's Listing.
   - Send offer of ₹51/kg.

3. **Transaction (Farmer accepts)**
   - Farmer opens `http://localhost:3000/farmer/offers`
   - Views ₹51/kg offer from ABC Foods.
   - Clicks "Accept Offer".
   - System creates Order #AM-2026-0001.

4. **Order Tracking**
   - Both Farmer and Business view Order timeline tracking.

## Resetting Data
- Visit `/admin` and click "Reset Demo State" to wipe offers/orders and start fresh.
