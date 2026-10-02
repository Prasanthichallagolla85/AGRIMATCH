# AGRIMATCH

Where agricultural supply meets real business demand.

AGRIMATCH is an AI-powered agricultural commerce platform connecting farmers directly with verified businesses. Built for the NexLayer AVIRBHAV 2026 Hackathon.

## Core Features
- AI-Assisted Produce Assessment
- Procurement Copilot (NLP requirement parser)
- Algorithmic Supplier Matching
- End-to-End Direct Commerce (Offers & Orders)
- Multilingual Architecture

## Architecture
- **Frontend**: Next.js 15 (App Router), Tailwind CSS
- **Design**: Mobile-first for Farmers, Desktop-first for Businesses
- **Data Layer**: Mocked Service Architecture ready for Supabase / PostgreSQL
- **AI Integration**: AI abstractions ready for Vision/NLP APIs

## How to Run Locally
1. `npm install --legacy-peer-deps`
2. `npm run dev`
3. Open `http://localhost:3000`

*Note: For the purpose of the MVP demonstration, core backend calls and AI processing steps are deterministically mocked in the `services.ts` abstraction layer to ensure a reliable offline presentation.*
