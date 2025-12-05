# EmailJS Quick Reference Card

## What You Need (3 Values)

1. **Service ID** - From Email Services page
2. **Template ID** - From Email Templates page  
3. **Public Key** - From Account → General page

## Where to Update Code

**File:** `src/components/Contact.tsx`  
**Lines:** 8-10

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'        // ← Replace this
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'      // ← Replace this
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'        // ← Replace this
```

## Quick Steps During Call

1. ✅ Go to emailjs.com and sign up/login
2. ✅ Add Email Service (Gmail) → Copy Service ID
3. ✅ Create Email Template → Copy Template ID
4. ✅ Get Public Key from Account → General
5. ✅ Paste all 3 values into Contact.tsx (lines 8-10)
6. ✅ Test the form!

## Email Template Variables Available

- `{{from_name}}` - Full name
- `{{from_email}}` - User's email
- `{{message}}` - User's comment
- `{{first_name}}` - First name
- `{{last_name}}` - Last name

---

**That's it! The code is already prepared and ready to go.**

