#!/bin/bash

# 📧 CONTACT FORM EMAIL API - COMPLETE SETUP GUIDE

echo "
╔════════════════════════════════════════════════════════════════════════════╗
║                  📧 CONTACT FORM EMAIL API - SETUP GUIDE                   ║
║                         Geminus Tech - Complete Setup                       ║
╚════════════════════════════════════════════════════════════════════════════╝
"

echo "✅ WHAT WAS BUILT"
echo "================="
echo "
✓ API Endpoint: POST /api/contact
✓ Email Service: Nodemailer (Gmail SMTP)
✓ Sends 2 Emails: Company + User confirmation
✓ Validation: Client + Server
✓ Security: XSS protection, input validation
✓ Status: Production Ready
✓ Build: Success (0 errors)
"

echo ""
echo "📁 FILES CREATED"
echo "================="
echo "
Core Files:
  ✓ app/api/contact/route.ts        - API endpoint handler
  ✓ lib/email.ts                    - Email service configuration

Configuration:
  ✓ .env.local.example              - Environment variables template
  ✓ setup-email.sh                  - Automated setup script

Documentation:
  ✓ EMAIL_SETUP.md                  - Detailed setup instructions
  ✓ EMAIL_QUICK_REFERENCE.txt       - Quick reference card
  ✓ EMAIL_API_SETUP_COMPLETE.md     - Setup overview
  ✓ EMAIL_API_IMPLEMENTATION.md     - Full technical details
  ✓ INSTALL_GUIDE.sh                - This file
"

echo ""
echo "🚀 QUICK START (4 MINUTES)"
echo "==========================="
echo "
STEP 1: Get Gmail App Password (2 min)
─────────────────────────────────────
1. Go to: https://myaccount.google.com/apppasswords
2. Select: Mail → Your Device
3. Copy: The 16-character app password Google shows

STEP 2: Create .env.local (1 min)
─────────────────────────────────
Create file: .env.local
Add these lines:
    EMAIL_USER=your-gmail@gmail.com
    EMAIL_PASSWORD=your-16-char-password

STEP 3: Test & Deploy (1 min)
──────────────────────────────
npm run dev
Go to: http://localhost:3000/company#contact
Test the form!
"

echo ""
echo "📧 HOW IT WORKS"
echo "==============="
echo "
When user submits form:
  1. Frontend validates (name, email format, message length)
  2. Sends POST to /api/contact
  3. Backend validates again (security)
  4. Sends 2 emails:
     - To: info@geminustech.com (Company inquiry)
     - To: User's email (Confirmation)
  5. Returns success/error response
  6. Shows message to user
"

echo ""
echo "🔧 VALIDATION RULES"
echo "==================="
echo "
Name Field:
  - Required: Yes
  - Rules: Non-empty, trimmed

Email Field:
  - Required: Yes
  - Rules: Valid email format (user@domain.com)

Message Field:
  - Required: Yes
  - Rules: Minimum 10 characters
"

echo ""
echo "💌 EMAIL TEMPLATES"
echo "=================="
echo "
Company Email:
  Subject: New Contact Form Submission from [Name]
  Contains: Visitor details, message, reply-to email

User Confirmation Email:
  Subject: We received your inquiry - Geminus Tech
  Contains: Confirmation, company info, expected response time
"

echo ""
echo "⚙️ ALTERNATIVE EMAIL SERVICES"
echo "=============================="
echo "
Currently: Gmail (via Nodemailer)
Cost: Free
Limit: 24 emails/day (Gmail account)

Can also use:
  - SendGrid (Free: 100 emails/day)
  - Mailgun (Free: 5000 emails/month)
  - AWS SES
  - Any SMTP service

To switch: Modify lib/email.ts transporter config
"

echo ""
echo "🌐 DEPLOYMENT INSTRUCTIONS"
echo "=========================="
echo "
VERCEL (Recommended for Next.js):
──────────────────────────────────
1. Go to: Project Settings → Environment Variables
2. Add:
   Name: EMAIL_USER
   Value: your-email@gmail.com
   
   Name: EMAIL_PASSWORD
   Value: your-app-password
3. Deploy

NETLIFY:
────────
1. Go to: Site settings → Build & deploy → Environment
2. Add the same 2 variables
3. Deploy

AWS/AZURE/OTHER:
────────────────
Refer to your provider's documentation for env variables
"

echo ""
echo "🧪 TESTING CHECKLIST"
echo "===================="
echo "
Local Testing:
  ☐ npm run dev
  ☐ Visit http://localhost:3000/company#contact
  ☐ Fill form with valid data
  ☐ Click 'Send Your Inquiry'
  ☐ See loading state (shows 'Sending...')
  ☐ See success message
  ☐ Check email inbox for inquiry
  ☐ Check email inbox for confirmation
  ☐ Check spam/junk folder if not received

Error Testing:
  ☐ Try invalid email (e.g., 'test@test')
  ☐ Try short message (< 10 chars)
  ☐ Try empty fields
  ☐ Verify error messages display
  ☐ Verify can correct and resubmit

API Testing (curl):
  ☐ curl -X POST http://localhost:3000/api/contact \\
      -H 'Content-Type: application/json' \\
      -d '{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"This is a test\"}'
"

echo ""
echo "🔐 SECURITY NOTES"
echo "================="
echo "
✓ Never commit .env.local (already in .gitignore)
✓ Use App Passwords, not regular Gmail password
✓ Enable 2-Step Verification on Gmail first
✓ XSS protection: HTML escaping implemented
✓ Input validation: Both client and server
✓ Environment variables: Use platform's secure storage

In Production:
  - Use hosting platform's env var storage
  - Enable HTTPS/SSL
  - Consider adding CAPTCHA
  - Monitor email logs
  - Set up rate limiting
"

echo ""
echo "🐛 TROUBLESHOOTING"
echo "=================="
echo "
Problem: 'Email service is not configured'
Solution:
  - Check .env.local exists in project root
  - Verify EMAIL_USER and EMAIL_PASSWORD are set
  - Restart dev server (npm run dev)

Problem: 'Failed to send email'
Solution:
  - Use Gmail App Password (not regular password)
  - Enable 2-Step Verification on Gmail
  - Check internet connection
  - Verify Gmail credentials are correct

Problem: Emails going to spam
Solution:
  - Check spam/junk folder first
  - Add company domain to sender email
  - Use custom domain email (if available)

Problem: Form takes too long
Solution:
  - Email service may be slow (normal: 2-5 seconds)
  - Check network tab in DevTools
  - Verify email service status
"

echo ""
echo "📊 API RESPONSE EXAMPLES"
echo "======================="
echo "
Success Response (200):
{
  \"success\": true,
  \"message\": \"Your inquiry has been sent successfully...\"
}

Validation Error (400):
{
  \"error\": \"Invalid email format\"
}

Server Error (500):
{
  \"error\": \"Failed to send your inquiry...\"
}
"

echo ""
echo "📋 NEXT STEPS"
echo "=============="
echo "
NOW:
  1. Read this guide carefully
  2. Get Gmail App Password
  3. Create .env.local file
  4. Run: npm run dev
  5. Test the form

BEFORE PRODUCTION:
  1. Verify emails work locally
  2. Add env variables to hosting platform
  3. Test in production
  4. Check spam folder
  5. Monitor first submissions

ENHANCEMENTS (Optional):
  1. Add CAPTCHA for spam protection
  2. Add file attachments
  3. Implement rate limiting
  4. Create admin dashboard
  5. Set up CRM webhook
"

echo ""
echo "📚 DOCUMENTATION FILES"
echo "====================="
echo "
Read these files for more info:
  - EMAIL_SETUP.md              (Detailed setup)
  - EMAIL_QUICK_REFERENCE.txt   (Quick reference)
  - EMAIL_API_IMPLEMENTATION.md (Technical details)
"

echo ""
echo "✨ YOU'RE ALL SET!"
echo "=================="
echo "
Your email API is ready to use. Just need to:
  1. Create .env.local with credentials
  2. npm run dev
  3. Test at http://localhost:3000/company#contact

Questions? Check EMAIL_SETUP.md for detailed troubleshooting.

Happy emailing! 🚀
"
