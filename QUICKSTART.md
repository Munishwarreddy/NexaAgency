# 🚀 Quick Start Guide - MediaManager4U

## ⚡ Get Running in 2 Minutes

### Terminal 1: Start Backend
```bash
cd "c:\Users\kathi\OneDrive\Documents\Nexa Agency\backend"
npm install
npm run dev
```
✅ Backend running on http://localhost:5000

### Terminal 2: Start Frontend
```bash
cd "c:\Users\kathi\OneDrive\Documents\Nexa Agency\frontend"
npm install
npm run dev
```
✅ Frontend running on http://localhost:3000

### Test It
1. Open http://localhost:3000 in browser
2. Scroll through all 7 sections
3. Fill out contact form
4. Submit and see success message
5. Check backend terminal for form data

---

## 📋 What You'll See

### Navigation Bar (Sticky at Top)
- Logo: "Media Manager" + "4U" (orange)
- Links: Why Us? | Services | Pricing | FAQ | Blog | Contact
- CTA Button: "Book a Free Strategy Call" (orange)

### 7 Sections
1. **Hero** - Headline + orange pills + 2 buttons
2. **Why Choose Us** - 3 cards with 🎛️🎥📈 icons
3. **Services** - 6 service cards (3x2 grid)
4. **Pricing** - 8 package cards with ₹ prices
5. **FAQ** - 7 expandable questions
6. **Blog** - 3 article previews
7. **Contact** - Full form with validation

### Footer
- Links, social icons, copyright

---

## 🎨 Brand Colors (Already Applied)
- Orange: #F97316 (CTAs, accents)
- Dark: #1A1A2E (Text)
- Light BG: #F3F4F6 (Sections)
- White: #FFFFFF (Cards)

---

## 📝 Form Fields (All with Validation)
```
Row 1: Full Name | Business Name
Row 2: Email | Website (optional)
Row 3: Business Type | Phone
Row 4: Services needed (textarea)
Row 5: Is business funded? | Team size
Row 6: Your role
       Submit button (orange, full-width)
```

---

## 💡 Key Files to Know

### Frontend
- `src/App.tsx` - Main component that renders all sections
- `src/components/ui/` - Reusable buttons, cards, navigation
- `src/components/sections/` - 7 main content sections
- `tailwind.config.js` - Brand colors defined here
- `src/index.css` - Global animations & scrollbar

### Backend
- `src/server.ts` - Express server setup
- `src/routes/contact.ts` - POST /api/contact endpoint
- `src/middleware/validation.ts` - Form validation logic
- `.env.example` - Environment setup

---

## 🔧 Troubleshooting

**Port 3000 already in use?**
```bash
# Find process using port 3000
netstat -ano | findstr :3000
# Kill it or change port in vite.config.ts
```

**Port 5000 already in use?**
```bash
# Change PORT in backend/.env to 6000
# And update vite.config.ts proxy target
```

**Dependencies not installing?**
```bash
# Delete and reinstall
rm -r node_modules package-lock.json
npm install
```

**Form not submitting?**
- Check both servers are running
- Open DevTools (F12) → Network tab
- Watch request to /api/contact
- Check backend console for logs

---

## ✨ Next Steps

1. **Test Everything Locally** - Verify all sections work
2. **Customize Content** - Update services, pricing, FAQ
3. **Add Email** - Integrate Sendgrid/Nodemailer
4. **Deploy** - Vercel (frontend) + Railway/Heroku (backend)

---

**All 7 sections + navigation + footer + form validation already implemented! 🎉**
