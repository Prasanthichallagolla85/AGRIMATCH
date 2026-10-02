export const CATEGORIES = [
  "Fruits", "Vegetables", "Cereals / Grains", "Pulses / Seeds", 
  "Commercial / Cash Crops", "Plants / Nursery"
];

export const PRODUCTS = [
  // Fruits
  { id: "p-1", name: "Alphonso Mango", category: "Fruits", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop" },
  { id: "p-2", name: "Banganapalli Mango", category: "Fruits", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=600&auto=format&fit=crop" },
  { id: "p-3", name: "Kesar Mango", category: "Fruits", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop" },
  { id: "p-4", name: "Banana", category: "Fruits", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format&fit=crop" },
  { id: "p-5", name: "Papaya", category: "Fruits", image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=600&auto=format&fit=crop" },
  { id: "p-6", name: "Guava", category: "Fruits", image: "https://images.unsplash.com/photo-1552689486-f6773047d953?q=80&w=600&auto=format&fit=crop" },
  { id: "p-7", name: "Pomegranate", category: "Fruits", image: "https://images.unsplash.com/photo-1528659580196-85e8d98dcf6f?q=80&w=600&auto=format&fit=crop" },
  
  // Vegetables
  { id: "p-8", name: "Tomato", category: "Vegetables", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop" },
  { id: "p-9", name: "Onion", category: "Vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop" },
  { id: "p-10", name: "Potato", category: "Vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop" },
  { id: "p-11", name: "Green Chilli", category: "Vegetables", image: "https://images.unsplash.com/photo-1551608832-6804a60029b3?q=80&w=600&auto=format&fit=crop" },
  { id: "p-12", name: "Brinjal", category: "Vegetables", image: "https://images.unsplash.com/photo-1601072935293-21c607a9096f?q=80&w=600&auto=format&fit=crop" },
  
  // Cereals
  { id: "p-13", name: "Sona Masoori Rice", category: "Cereals / Grains", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop" },
  { id: "p-14", name: "Paddy", category: "Cereals / Grains", image: "https://images.unsplash.com/photo-1627914872658-00624a0d8ff0?q=80&w=600&auto=format&fit=crop" },
  { id: "p-15", name: "Maize", category: "Cereals / Grains", image: "https://images.unsplash.com/photo-1616892644265-27a13c41ef5e?q=80&w=600&auto=format&fit=crop" },
  { id: "p-16", name: "Wheat", category: "Cereals / Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop" },

  // Cash Crops
  { id: "p-17", name: "Raw Cotton", category: "Commercial / Cash Crops", image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=600&auto=format&fit=crop" },
  { id: "p-18", name: "Sugarcane", category: "Commercial / Cash Crops", image: "https://images.unsplash.com/photo-1522049439611-e7be7dcbcc35?q=80&w=600&auto=format&fit=crop" },
  { id: "p-19", name: "Turmeric", category: "Commercial / Cash Crops", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=600&auto=format&fit=crop" },

  // Pulses
  { id: "p-20", name: "Groundnut", category: "Pulses / Seeds", image: "https://images.unsplash.com/photo-1567375253303-3453b34b9d03?q=80&w=600&auto=format&fit=crop" },
  { id: "p-21", name: "Chickpea", category: "Pulses / Seeds", image: "https://images.unsplash.com/photo-1589332240974-bc4879de7613?q=80&w=600&auto=format&fit=crop" },
];

export const SUPPLIERS = [
  { id: "s-1", name: "Ramesh Farms", verified: true, location: "Eluru, Andhra Pradesh", since: 2021, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Family-operated agricultural producer specializing in premium mangoes and rice." },
  { id: "s-2", name: "Lakshmi Farms", verified: true, location: "Vijayawada, Andhra Pradesh", since: 2018, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=200&auto=format&fit=crop", description: "Large scale producer of Sona Masoori Rice and Paddy." },
  { id: "s-3", name: "Sri Venkateswara Farms", verified: true, location: "Guntur, Andhra Pradesh", since: 2015, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=200&auto=format&fit=crop", description: "Leading cotton and chilli producer in Guntur district." },
  { id: "s-4", name: "Krishna Agro", verified: false, location: "Tenali, Andhra Pradesh", since: 2023, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Emerging producer of tomatoes and fresh vegetables." },
  { id: "s-5", name: "Godavari Growers", verified: true, location: "Rajahmundry, Andhra Pradesh", since: 2010, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Specialized in Banana and Papaya cultivation along the Godavari." },
  { id: "s-6", name: "Green Valley Farms", verified: true, location: "Anantapur, Andhra Pradesh", since: 2019, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Quality pomegranate and fruit producers." },
  { id: "s-7", name: "Eastern Fields", verified: false, location: "Kakinada, Andhra Pradesh", since: 2022, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=200&auto=format&fit=crop", description: "Groundnut and oil seed specialists." },
  { id: "s-8", name: "Sai Harvest", verified: true, location: "Khammam, Telangana", since: 2017, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Premium Chilli and Turmeric producers." },
  { id: "s-9", name: "Andhra Fresh Farms", verified: true, location: "Kurnool, Andhra Pradesh", since: 2020, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Large scale onion and vegetable farming." },
  { id: "s-10", name: "Delta Agro", verified: true, location: "Bhimavaram, Andhra Pradesh", since: 2012, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=200&auto=format&fit=crop", description: "Paddy and aquaculture integrated farming." },
  { id: "s-11", name: "Prakasam Producers", verified: true, location: "Ongole, Andhra Pradesh", since: 2016, image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop", description: "Cotton and tobacco, shifting to vegetables." },
  { id: "s-12", name: "Nizamabad Farmers Hub", verified: true, location: "Nizamabad, Telangana", since: 2014, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=200&auto=format&fit=crop", description: "Turmeric and Maize production." }
];

export const LISTINGS = [
  { id: "l-1", supplierId: "s-1", productId: "p-2", quality: "Grade A", quantity: 20, unit: "tonnes", location: "Eluru, Andhra Pradesh", availability: "Available Now", priceRange: "₹48–₹54/kg", aiConfidence: 87, organic: false },
  { id: "l-2", supplierId: "s-1", productId: "p-13", quality: "Grade A", quantity: 35, unit: "tonnes", location: "Eluru, Andhra Pradesh", availability: "Oct 15 - Oct 25", priceRange: "₹42–₹46/kg", aiConfidence: 91, organic: false },
  { id: "l-3", supplierId: "s-2", productId: "p-13", quality: "Grade A+", quantity: 150, unit: "tonnes", location: "Vijayawada, AP", availability: "Available Now", priceRange: "₹44–₹48/kg", aiConfidence: 94, organic: true },
  { id: "l-4", supplierId: "s-3", productId: "p-17", quality: "Grade B", quantity: 18, unit: "tonnes", location: "Guntur, AP", availability: "Nov 1 - Nov 10", priceRange: "₹65–₹70/kg", aiConfidence: 82, organic: false },
  { id: "l-5", supplierId: "s-4", productId: "p-8", quality: "Grade A", quantity: 5, unit: "tonnes", location: "Tenali, AP", availability: "Available Now", priceRange: "₹18–₹22/kg", aiConfidence: 88, organic: false },
  { id: "l-6", supplierId: "s-5", productId: "p-4", quality: "Grade A", quantity: 12, unit: "tonnes", location: "Rajahmundry, AP", availability: "Available Now", priceRange: "₹12–₹15/kg", aiConfidence: 85, organic: false },
  { id: "l-7", supplierId: "s-6", productId: "p-7", quality: "Premium", quantity: 8, unit: "tonnes", location: "Anantapur, AP", availability: "Available Now", priceRange: "₹120–₹140/kg", aiConfidence: 96, organic: true },
  { id: "l-8", supplierId: "s-7", productId: "p-20", quality: "Grade A", quantity: 25, unit: "tonnes", location: "Kakinada, AP", availability: "Oct 20", priceRange: "₹55–₹60/kg", aiConfidence: 89, organic: false },
  { id: "l-9", supplierId: "s-8", productId: "p-11", quality: "Grade A", quantity: 3, unit: "tonnes", location: "Khammam, TS", availability: "Available Now", priceRange: "₹35–₹40/kg", aiConfidence: 90, organic: false },
  { id: "l-10", supplierId: "s-9", productId: "p-9", quality: "Grade B", quantity: 40, unit: "tonnes", location: "Kurnool, AP", availability: "Available Now", priceRange: "₹25–₹30/kg", aiConfidence: 84, organic: false },
  { id: "l-11", supplierId: "s-10", productId: "p-14", quality: "Grade A", quantity: 200, unit: "tonnes", location: "Bhimavaram, AP", availability: "Nov 5", priceRange: "₹20–₹24/kg", aiConfidence: 92, organic: false },
  { id: "l-12", supplierId: "s-12", productId: "p-19", quality: "Premium", quantity: 10, unit: "tonnes", location: "Nizamabad, TS", availability: "Available Now", priceRange: "₹140–₹160/kg", aiConfidence: 95, organic: true },
  { id: "l-13", supplierId: "s-3", productId: "p-11", quality: "Grade A", quantity: 8, unit: "tonnes", location: "Guntur, AP", availability: "Available Now", priceRange: "₹32–₹38/kg", aiConfidence: 86, organic: false },
  { id: "l-14", supplierId: "s-2", productId: "p-14", quality: "Grade B", quantity: 80, unit: "tonnes", location: "Vijayawada, AP", availability: "Available Now", priceRange: "₹18–₹21/kg", aiConfidence: 81, organic: false },
  { id: "l-15", supplierId: "s-1", productId: "p-17", quality: "Grade A", quantity: 18, unit: "tonnes", location: "Eluru, AP", availability: "Nov 1", priceRange: "₹68–₹72/kg", aiConfidence: 87, organic: false },
  { id: "l-16", supplierId: "s-6", productId: "p-5", quality: "Grade A", quantity: 15, unit: "tonnes", location: "Anantapur, AP", availability: "Available Now", priceRange: "₹16–₹20/kg", aiConfidence: 89, organic: false },
  { id: "l-17", supplierId: "s-8", productId: "p-19", quality: "Premium", quantity: 5, unit: "tonnes", location: "Khammam, TS", availability: "Available Now", priceRange: "₹150–₹165/kg", aiConfidence: 97, organic: false },
  { id: "l-18", supplierId: "s-11", productId: "p-17", quality: "Grade A", quantity: 45, unit: "tonnes", location: "Ongole, AP", availability: "Oct 15", priceRange: "₹66–₹71/kg", aiConfidence: 90, organic: false },
  { id: "l-19", supplierId: "s-4", productId: "p-12", quality: "Grade A", quantity: 2, unit: "tonnes", location: "Tenali, AP", availability: "Available Now", priceRange: "₹22–₹26/kg", aiConfidence: 83, organic: false },
  { id: "l-20", supplierId: "s-12", productId: "p-15", quality: "Grade A", quantity: 60, unit: "tonnes", location: "Nizamabad, TS", availability: "Oct 25", priceRange: "₹22–₹25/kg", aiConfidence: 91, organic: false },
];

export const BUYERS = [
  { id: "b-1", name: "ABC Foods", type: "Food Processing", location: "Vijayawada, AP", verified: true },
  { id: "b-2", name: "FreshHarvest Retail", type: "Retail Chain", location: "Hyderabad, TS", verified: true },
  { id: "b-3", name: "South India Foods", type: "Wholesaler", location: "Chennai, TN", verified: true },
  { id: "b-4", name: "Andhra Agro Processing", type: "Processing", location: "Guntur, AP", verified: true },
  { id: "b-5", name: "Deccan Fresh", type: "Retail Chain", location: "Bengaluru, KA", verified: false },
  { id: "b-6", name: "Coastal Foods", type: "Export", location: "Visakhapatnam, AP", verified: true },
  { id: "b-7", name: "GreenBasket Procurement", type: "E-Commerce", location: "Hyderabad, TS", verified: true },
  { id: "b-8", name: "Sri Foods & Grains", type: "Wholesaler", location: "Kakinada, AP", verified: true },
  { id: "b-9", name: "FarmSource Retail", type: "Retail Chain", location: "Pune, MH", verified: false },
  { id: "b-10", name: "Eastern Agro Industries", type: "Processing", location: "Kolkata, WB", verified: true },
  { id: "b-11", name: "Harvest Kitchen Supply", type: "B2B Supply", location: "Mumbai, MH", verified: true },
  { id: "b-12", name: "Bharat Commodity Foods", type: "Wholesaler", location: "Delhi, NCR", verified: true },
];

export const REQUIREMENTS = [
  { id: "r-1", buyerId: "b-1", productId: "p-2", quantity: 20, unit: "tonnes", quality: "Grade A", location: "Andhra Pradesh", deadline: "Oct 15", active: true, matchCount: 12 },
  { id: "r-2", buyerId: "b-2", productId: "p-2", quantity: 10, unit: "tonnes", quality: "Grade A", location: "Any", deadline: "Weekly", active: true, matchCount: 8 },
  { id: "r-3", buyerId: "b-3", productId: "p-13", quantity: 50, unit: "tonnes", quality: "Grade A", location: "South India", deadline: "Oct 20", active: true, matchCount: 5 },
  { id: "r-4", buyerId: "b-4", productId: "p-11", quantity: 5, unit: "tonnes", quality: "Grade A", location: "Guntur Region", deadline: "Oct 12", active: true, matchCount: 3 },
  { id: "r-5", buyerId: "b-6", productId: "p-7", quantity: 15, unit: "tonnes", quality: "Premium", location: "Andhra/Telangana", deadline: "Oct 25", active: true, matchCount: 2 },
  { id: "r-6", buyerId: "b-1", productId: "p-8", quantity: 8, unit: "tonnes", quality: "Grade A", location: "Vijayawada Region", deadline: "Oct 10", active: true, matchCount: 6 },
  { id: "r-7", buyerId: "b-7", productId: "p-9", quantity: 100, unit: "tonnes", quality: "Grade B or above", location: "Any", deadline: "Oct 30", active: true, matchCount: 15 },
  { id: "r-8", buyerId: "b-10", productId: "p-17", quantity: 30, unit: "tonnes", quality: "Grade A", location: "Telangana / Andhra", deadline: "Nov 5", active: true, matchCount: 6 },
];

export const OFFERS = [
  { id: "o-1", requirementId: "r-1", listingId: "l-1", status: "Pending", price: "₹51/kg", quantity: 20, logistics: "Buyer Pickup", payment: "Payment on Delivery" },
  { id: "o-2", requirementId: "r-3", listingId: "l-2", status: "Accepted", price: "₹43/kg", quantity: 35, logistics: "Seller Delivery", payment: "Advance + Delivery" },
];

export const ORDERS = [
  { id: "ord-1", offerId: "o-2", orderNumber: "AM-2026-0001", status: "Confirmed", date: "Oct 5", pickupDate: "Oct 10", totalValue: "₹15,05,000" }
];
