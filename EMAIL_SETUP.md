# Email Setup Guide for Contact Form

This guide explains how to configure the contact form email functionality.

## Quick Setup (Gmail)

### Step 1: Create a Gmail Account (if you don't have one)
- Go to https://accounts.google.com/signup

### Step 2: Enable 2-Step Verification
1. Go to https://myaccount.google.com/security
2. Find "2-Step Verification" and enable it
3. Follow Google's instructions to set it up

### Step 3: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character app password
4. Copy this password

### Step 4: Add Environment Variables
1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add these lines:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

### Step 5: Test the Form
1. Run `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check both your email and info@geminustech.com for confirmation

## What Happens When Form Is Submitted

1. **Validation**: Form data is validated on the client side
2. **API Call**: Data is sent to `/api/contact` endpoint
3. **Server Processing**: Server validates data again
4. **Email Sending**: Two emails are sent:
   - **To Company**: `info@geminustech.com` receives inquiry details
   - **To User**: Confirmation email with contact information
5. **Response**: User sees success/error message

## Production Deployment

### For Vercel:
1. Go to Project Settings → Environment Variables
2. Add `EMAIL_USER` and `EMAIL_PASSWORD`
3. Deploy

### For Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Add `EMAIL_USER` and `EMAIL_PASSWORD`
3. Deploy

### For Other Hosting:
Refer to your hosting provider's environment variable documentation.

## Alternative Email Services

To use a different email provider (SendGrid, Mailgun, etc.), modify `lib/email.ts`:

### Example: SendGrid
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendContactEmail(data: ContactFormData) {
    const msg = {
        to: 'info@geminustech.com',
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: `New Contact Form Submission from ${data.name}`,
        html: `...`,
    };
    
    await sgMail.send(msg);
}
```

## Troubleshooting

### "Email service is not configured"
- Ensure `.env.local` file exists
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` are set correctly
- Check that environment variables are loaded (restart dev server)

### "Failed to send email"
- Gmail: Verify you used an App Password, not your regular password
- Gmail: Check 2-Step Verification is enabled
- Gmail: Allow less secure apps (if using regular password)

### Form shows error but no email is sent
1. Check browser console for error messages
2. Check server terminal for error logs
3. Verify SMTP credentials are correct

### Emails not arriving
1. Check spam/junk folder
2. Verify sender email address is correct
3. Check email service logs

## Security Notes

- ⚠️ Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use App Passwords, not regular account passwords
- For production, use secure environment variable management from your hosting provider

## API Response Examples

### Success (200):
```json
{
    "success": true,
    "message": "Your inquiry has been sent successfully. We will get back to you soon."
}
```

### Validation Error (400):
```json
{
    "error": "Invalid email format"
}
```

### Server Error (500):
```json
{
    "error": "Failed to send your inquiry. Please try again later."
}
```
