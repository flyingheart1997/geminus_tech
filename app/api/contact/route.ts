import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('Email environment variables not configured');
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            );
        }

        const body = await request.json();

        // Validate request body
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, or message' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.trim().length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters long' },
                { status: 400 }
            );
        }

        // Send emails
        await sendContactEmail({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Your inquiry has been sent successfully. We will get back to you soon.',
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send your inquiry. Please try again later.' },
            { status: 500 }
        );
    }
}

// Optional: Add OPTIONS method for CORS preflight
export async function OPTIONS(request: NextRequest) {
    return NextResponse.json({}, { status: 200 });
}
