#!/bin/bash

# Email Configuration Setup Script for Geminus Tech Contact Form

echo "🚀 Geminus Tech - Email Setup Wizard"
echo "======================================"
echo ""
echo "This script will help you set up the contact form email functionality."
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local file found"
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Skipping environment variable setup"
        exit 0
    fi
fi

echo ""
echo "📧 Gmail Setup Instructions:"
echo "1. Go to https://myaccount.google.com/apppasswords"
echo "2. Select 'Mail' and your device"
echo "3. Google will generate a 16-character app password"
echo ""

read -p "Enter your Gmail email address: " EMAIL_USER
read -sp "Enter your Gmail App Password (16 characters): " EMAIL_PASSWORD
echo ""

# Create or update .env.local
cat > .env.local << EOF
# Email Configuration for Contact Form
EMAIL_USER=$EMAIL_USER
EMAIL_PASSWORD=$EMAIL_PASSWORD
EOF

echo ""
echo "✅ .env.local created successfully!"
echo ""
echo "📝 Configuration saved:"
echo "   EMAIL_USER=$EMAIL_USER"
echo "   EMAIL_PASSWORD=****** (hidden)"
echo ""
echo "🔄 Restart your development server for changes to take effect:"
echo "   npm run dev"
echo ""
echo "✅ Setup complete! Test the contact form on http://localhost:3000/company"
