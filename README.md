# MediaManager4U - Complete Website Setup Guide

## 🚀 Project Overview

This is a complete, production-ready single-page website for MediaManager4U, a digital media & personal branding agency. Built with modern tech stack:

- **Frontend**: React 18 + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Node.js (Express) + TypeScript
- **Animations**: Smooth scroll triggers with Framer Motion
- **Styling**: Custom brand colors (#F97316 orange, #1A1A2E dark, #F3F4F6 light bg)

## 📁 Project Structure

```
Nexa Agency/
├── frontend/           # React + TypeScript website
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/       # 7 main sections (Hero, Services, etc.)
│   │   │   └── ui/             # Reusable components
│   │   ├── types/              # TypeScript interfaces
│   │   ├── App.tsx             # Main component
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── index.html
│
└── backend/            # Express.js API server
    ├── src/
    │   ├── routes/             # Contact form route
    │   ├── middleware/         # Validation middleware
    │   ├── types/              # TypeScript interfaces
    │   └── server.ts           # Main server file
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

## 🎨 Features Implemented

### Frontend Features
✅ **All 7 Sections**:
1. **Hero** - Large headline with orange pills + 2 CTA buttons
2. **Why Choose Us** - 3 feature cards with icons + animations
3. **Core Services** - 6 service cards in responsive grid (3x2)
4. **Pricing/Packages** - 8 pricing cards with ₹ prices
5. **FAQ** - 7 expandable accordion items
6. **Latest Insights** - 3 blog preview cards
7. **Contact** - Full form with validation

✅ **Navigation & Footer**:
- Sticky navigation with logo ("4U" in orange)
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Footer with social links

✅ **Design & Animations**:
- Orange (#F97316) accents on all CTAs and cards
- Light background (#F3F4F6) for sections
- White card backgrounds (#FFFFFF)
- Dark text (#1A1A2E)
- Framer Motion animations on scroll
- Hover states on buttons & cards
- Fully responsive (mobile → tablet → desktop)

### Backend Features
✅ **Contact Form API**:
- POST `/api/contact` endpoint
- Form validation (email, phone, required fields)
- CORS enabled for frontend
- Error handling & success responses
- In-memory storage for submissions (demo)

✅ **Development Server**:
- Express server on port 5000
- TypeScript support
- Environment variables (.env)
- Health check endpoint `/api/health`

## 🔧 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Step 1: Frontend Setup

```bash
cd "c:\Users\kathi\OneDrive\Documents\Nexa Agency\frontend"

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on **http://localhost:3000**

### Step 2: Backend Setup

```bash
cd "c:\Users\kathi\OneDrive\Documents\Nexa Agency\backend"

# Install dependencies
npm install

# Create .env file from example
copy .env.example .env

# Start backend server
npm run dev
```

Backend will run on **http://localhost:5000**

## 🎯 Components Breakdown

### UI Components (Reusable)
- `OrangeButton` - Orange bg, white text, rounded
- `OutlinedButton` - White fill, orange outline
- `OrangePill` - Orange background text highlight
- `ServiceCard` - Service with icon, title, features, button
- `PricingCard` - Package price, features list, CTA
- `BlogCard` - Blog preview with category, title, author
- `Navigation` - Sticky nav with mobile menu
- `Footer` - Links, social icons, copyright

### Section Components
- `Hero` - Main headline with CTAs
- `WhyChooseUs` - 3 feature cards with icons
- `Services` - 6 service offerings
- `Pricing` - 8 package options
- `FAQ` - 7 accordion items
- `Blog` - 3 latest insights
- `Contact` - Lead capture form

## 📝 Form Validation

The contact form validates:
- ✅ Full Name (required)
- ✅ Business Name (required)
- ✅ Email (valid email format required)
- ✅ Business Type (required)
- ✅ Phone (valid 10+ digit format)
- ✅ Services needed (required textarea)
- ✅ Funding status (required dropdown)
- ✅ Team size (required dropdown)
- ✅ Role (required)

Optional fields:
- Website

## 🎬 Animations Included

- Scroll-triggered section entrances (fade + slide)
- Button hover & tap animations (scale)
- Card hover lifts & shadows
- Icon rotations on hover
- FAQ accordion smooth expand/collapse
- Form field stagger animation on load
- Orange pill highlights in hero
- Navigation fade-in on page load

## 🌐 Responsive Design

- **Mobile** (320px): 1-column layouts, hamburger menu
- **Tablet** (768px): 2-column grids
- **Desktop** (1024px+): 3-4 column grids, full navigation

All sections adapt smoothly to screen size.

## 🔗 API Endpoints

### Frontend to Backend Communication

**POST `/api/contact`**
```
Request body:
{
  fullName: string,
  businessName: string,
  email: string,
  website?: string,
  businessType: string,
  phone: string,
  services: string,
  funded: string,
  teamSize: string,
  role: string
}

Response (success):
{
  success: true,
  message: "Thank you for reaching out!",
  data: {
    id: number,
    timestamp: string
  }
}

Response (error):
{
  success: false,
  error: "Validation error message"
}
```

**GET `/api/health`**
- Returns `{ status: 'OK', message: 'Server is running' }`

## 📦 Dependencies

### Frontend
- `react@18.2.0` - UI framework
- `react-dom@18.2.0` - DOM rendering
- `framer-motion@10.16.4` - Animations
- `tailwindcss@3.3.0` - Utility CSS
- `axios@1.6.0` - HTTP client
- `typescript@5.0.0` - Type safety

### Backend
- `express@4.18.2` - Web server
- `cors@2.8.5` - CORS handling
- `typescript@5.0.0` - Type safety
- `dotenv@16.3.1` - Environment variables

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Orange | #F97316 | CTAs, accents, icons |
| Dark | #1A1A2E | Text, headings |
| Light BG | #F3F4F6 | Section backgrounds |
| White | #FFFFFF | Cards, footer |

## 📱 Customization Tips

### Change Colors
Edit `frontend/tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'nexa-orange': '#F97316',  // Change hex here
      'nexa-dark': '#1A1A2E',
      'nexa-bg': '#F3F4F6',
      'nexa-white': '#FFFFFF',
    },
  },
}
```

### Update Content
- **Services**: Edit `frontend/src/components/sections/Services.tsx`
- **Pricing**: Edit `frontend/src/components/sections/Pricing.tsx`
- **FAQ**: Edit `frontend/src/components/sections/FAQ.tsx`
- **Blog**: Edit `frontend/src/components/sections/Blog.tsx`

### Add Email Notifications (Future)
Uncomment and integrate in `backend/src/routes/contact.ts`:
- Use SendGrid, Nodemailer, or AWS SES
- Add SMTP config to `.env`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder to Vercel/Netlify
```

### Backend (Heroku/Railway/Render)
```bash
cd backend
npm run build
# Deploy to your hosting platform
# Set environment variables in hosting dashboard
```

**Update FRONTEND_URL in backend `.env` for your production domain**

## ✨ Next Steps

1. ✅ Install and run both frontend & backend locally
2. ✅ Test the contact form end-to-end
3. ✅ Customize content (pricing, services, FAQ answers)
4. ✅ Add email notifications (SendGrid API)
5. ✅ Connect to database (MongoDB/PostgreSQL) instead of in-memory
6. ✅ Add analytics (Google Analytics / Plausible)
7. ✅ Deploy to production (Vercel + backend server)

## 🎓 Final Year Project Notes

This project demonstrates:
- ✅ **Modern Frontend**: React + TypeScript + Tailwind + Framer Motion
- ✅ **Production-Ready Code**: Type safety, validation, error handling
- ✅ **Full-Stack Architecture**: Frontend + Backend separation
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Component Reusability**: Modular, scalable structure
- ✅ **API Integration**: Frontend-backend communication
- ✅ **Form Validation**: Client & server-side
- ✅ **Animations**: Smooth, performance-optimized

## 📞 Support

For setup issues:
1. Ensure Node.js 16+ is installed
2. Clear `node_modules` and reinstall: `rm -r node_modules && npm install`
3. Check port availability (3000, 5000)
4. Verify CORS is enabled in backend

---

**Built with ❤️ for MediaManager4U**
