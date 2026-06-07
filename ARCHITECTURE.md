# Project Structure & Architecture

## 🏗️ Complete File Tree

```
Nexa Agency/
│
├── README.md                    # Main documentation
├── QUICKSTART.md               # Quick setup guide
├── ARCHITECTURE.md             # This file
│
├── frontend/                   # React website
│   ├── index.html             # Entry HTML
│   ├── package.json           # Dependencies
│   ├── tsconfig.json          # TypeScript config
│   ├── tailwind.config.js     # Tailwind setup + colors
│   ├── postcss.config.js      # PostCSS config
│   ├── vite.config.ts         # Vite build config
│   ├── .gitignore             # Git ignore rules
│   │
│   └── src/
│       ├── main.tsx           # Entry point
│       ├── App.tsx            # Main app component
│       ├── index.css          # Global styles
│       │
│       ├── components/
│       │   ├── ui/           # Reusable components
│       │   │   ├── OrangeButton.tsx      # Orange CTA
│       │   │   ├── OutlinedButton.tsx    # Secondary button
│       │   │   ├── OrangePill.tsx        # Orange highlight
│       │   │   ├── ServiceCard.tsx       # Service display
│       │   │   ├── PricingCard.tsx       # Price card
│       │   │   ├── BlogCard.tsx          # Blog preview
│       │   │   ├── Navigation.tsx        # Sticky navbar
│       │   │   └── Footer.tsx            # Footer
│       │   │
│       │   └── sections/      # 7 main content areas
│       │       ├── Hero.tsx           # Section 1
│       │       ├── WhyChooseUs.tsx    # Section 2
│       │       ├── Services.tsx       # Section 3
│       │       ├── Pricing.tsx        # Section 4
│       │       ├── FAQ.tsx            # Section 5
│       │       ├── Blog.tsx           # Section 6
│       │       └── Contact.tsx        # Section 7
│       │
│       ├── types/
│       │   └── index.ts       # TypeScript interfaces
│       │
│       └── hooks/
│           └── (for future scroll animation hooks)
│
└── backend/                    # Node.js API server
    ├── package.json           # Dependencies
    ├── tsconfig.json          # TypeScript config
    ├── .env.example           # Environment template
    ├── .gitignore             # Git ignore rules
    │
    └── src/
        ├── server.ts          # Express app setup
        ├── types/
        │   └── index.ts       # TypeScript interfaces
        ├── routes/
        │   └── contact.ts     # POST /api/contact endpoint
        └── middleware/
            └── validation.ts   # Form validation logic
```

## 🔄 Data Flow

### Frontend to Backend

```
User fills Contact Form
        ↓
Form validates (client-side)
        ↓
POST request to /api/contact
        ↓
Backend receives data
        ↓
Backend validates (server-side)
        ↓
Success: Store & return 200
Error: Return 400 with message
        ↓
Frontend shows success/error message
```

## 📦 Component Hierarchy

```
App
├── Navigation (sticky header)
├── Hero
├── WhyChooseUs
│   └── 3x FeatureCard
├── Services
│   └── 6x ServiceCard
├── Pricing
│   └── 8x PricingCard
├── FAQ
│   └── 7x AccordionItem
├── Blog
│   └── 3x BlogCard
├── Contact
│   └── Form with validation
└── Footer
```

## 🎨 Styling Architecture

### Tailwind CSS Setup
- Custom colors in `frontend/tailwind.config.js`
- Colors used via class names: `bg-nexa-orange`, `text-nexa-dark`, etc.
- Global styles in `src/index.css`
- Framer Motion for animations

### Color System
```
Primary Accent: #F97316 (Orange)
  → Used for: CTA buttons, icons, highlights, pills
  
Text Color: #1A1A2E (Dark Navy)
  → Used for: Headings, body text, navigation
  
Background: #F3F4F6 (Light Grey)
  → Used for: Section backgrounds
  
Card Background: #FFFFFF (White)
  → Used for: Service cards, pricing cards, blog cards
```

## 🚀 Backend Architecture

### Express Server Structure
```
app.use(cors)           // Enable cross-origin requests
app.use(express.json()) // Parse JSON bodies
│
├── GET /api/health          // Health check
└── POST /api/contact        // Contact form submission
    ├── Middleware: Validate form
    └── Route handler: Store & respond
```

### Form Validation Flow
1. Client-side: React form validation (email, required fields)
2. Server-side: Middleware validates again
3. Success: Store in memory (demo) → Database (production)
4. Response: JSON with success/error

## 🔐 Validation Rules

| Field | Type | Rules |
|-------|------|-------|
| fullName | string | Required, min 2 chars |
| businessName | string | Required |
| email | email | Required, valid format |
| website | url | Optional, valid format |
| businessType | string | Required |
| phone | string | Required, 10+ digits |
| services | textarea | Required, min 10 chars |
| funded | dropdown | Required |
| teamSize | dropdown | Required |
| role | string | Required |

## 📱 Responsive Breakpoints

```
Mobile:  320px - 640px   (1 column, hamburger menu)
Tablet:  641px - 1024px  (2 columns)
Desktop: 1025px+         (3-4 columns, full nav)
```

## 🎬 Animation Patterns

### Entrance Animations
- Sections fade in on scroll (whileInView)
- Staggered children animations
- Duration: 0.4-0.8s

### Interaction Animations
- Buttons: scale 1.05 on hover, 0.98 on tap
- Cards: y-offset -8px on hover
- Icons: rotate 10° on hover
- FAQ: smooth height expand/collapse

### Variants Used
```
containerVariants: stagger children 0.1-0.2s
itemVariants: fade in + slide up 20-30px
```

## 🔗 API Contract

### POST /api/contact

**Request:**
```typescript
{
  fullName: string;
  businessName: string;
  email: string;
  website?: string;
  businessType: string;
  phone: string;
  services: string;
  funded: string;
  teamSize: string;
  role: string;
}
```

**Response (200 OK):**
```typescript
{
  success: true;
  message: string;
  data: {
    id: number;
    timestamp: string;
  };
}
```

**Response (400 Bad Request):**
```typescript
{
  error: string; // "Email is required" etc.
}
```

## 🛠️ Tech Stack Summary

| Layer | Tech |
|-------|------|
| **Frontend Framework** | React 18 + TypeScript |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion 10 |
| **Build Tool** | Vite 5 |
| **Backend** | Express 4 + TypeScript |
| **HTTP Client** | Axios 1.6 |
| **Environment** | Node 16+ |

## 🚀 Deployment Strategy

### Frontend (Vercel/Netlify)
1. Push code to Git
2. Connect repository to Vercel
3. Auto-deploy on push
4. Update FRONTEND_URL in backend .env

### Backend (Railway/Render/Heroku)
1. Set environment variables (PORT, FRONTEND_URL)
2. Run `npm run build && npm run start`
3. Expose port to the internet

### Database (Future)
- Replace in-memory submissions array with MongoDB/PostgreSQL
- Add environment variables for DB connection

## 📈 Scalability Considerations

### Current (Demo)
- ✅ In-memory storage for form submissions
- ✅ No database required
- ✅ Single process server

### Production Ready
- 🔜 Add MongoDB/PostgreSQL for persistence
- 🔜 Add Redis for caching
- 🔜 Email notifications (SendGrid/Nodemailer)
- 🔜 Rate limiting middleware
- 🔜 Logging & monitoring
- 🔜 Error tracking (Sentry)

---

This architecture is clean, modular, and ready to scale! 🎉
