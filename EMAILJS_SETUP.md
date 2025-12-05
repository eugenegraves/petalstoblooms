# EmailJS Setup Instructions

## Quick Setup Guide (5-10 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account allows 200 emails/month)
3. Create account with your email

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Click **"Connect Account"** and authorize EmailJS
5. **IMPORTANT:** In the service settings, set the **"To Email"** field to the email address where you want to receive form submissions (e.g., `petalstobloomsfl@gmail.com`)
6. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **"Create New Template"**
3. Use this template structure:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Save the template**
5. **Copy the Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to **Account** → **General** in EmailJS dashboard
2. Find **"Public Key"** section
3. **Copy your Public Key**

### Step 5: Update Code
1. Open `src/components/Contact.tsx`
2. Find these lines near the top (around line 8-10):
   ```typescript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
3. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` → Your Template ID from Step 3
   - `YOUR_PUBLIC_KEY` → Your Public Key from Step 4

### Step 6: Test It!
1. Save the file
2. Run `npm run dev` if not already running
3. Go to the Contact page
4. Fill out and submit the form
5. Check your email inbox - you should receive the form submission!

---

## Template Variables Reference

The form sends these variables to EmailJS:
- `from_name` - Full name (First + Last)
- `from_email` - User's email address
- `message` - The comment/message
- `first_name` - First name only
- `last_name` - Last name only

You can use any of these in your email template with `{{variable_name}}`

---

## Troubleshooting

**Error: "The recipients address is empty" (422 error)**
- **FIX:** Go to **Email Services** → Click on your service → Set the **"To Email"** field to your desired recipient email address
- This is the most common error - the service needs to know where to send emails

**Form not sending?**
- Check browser console for errors
- Verify all three IDs/keys are correctly pasted (no extra spaces)
- Make sure EmailJS service is connected and active
- **Make sure "To Email" is set in service settings** (see above)
- Check EmailJS dashboard for error logs

**Not receiving emails?**
- Check spam folder
- Verify email service is connected in EmailJS dashboard
- **Verify "To Email" address is correct in service settings**
- Check EmailJS usage limits (free tier: 200/month)

**Need help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

