import nodemailer from 'nodemailer';

// Configure your email service here
// Using Gmail as example - you can switch to any SMTP service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData) {
    try {
        // Email to company
        const companyMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@geminustech.com',
            subject: `New Contact Form Submission from ${data.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #379888;">New Contact Form Submission</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
                        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(data.message)}</p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                    <p style="color: #666; font-size: 12px;">This is an automated email from your contact form.</p>
                </div>
            `,
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: 'We received your inquiry - Geminus Tech',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #379888;">Thank you for reaching out!</h2>
                    <p>Hi ${escapeHtml(data.name)},</p>
                    <p>We have received your inquiry and appreciate you contacting Geminus Tech. Our team will review your message and get back to you as soon as possible, typically within 24-48 hours.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Your Message:</strong></p>
                        <p style="white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(data.message)}</p>
                    </div>

                    <p>If you have any urgent matters, feel free to reach out to us:</p>
                    <ul>
                        <li><strong>Phone:</strong> +91 878709098</li>
                        <li><strong>Email:</strong> info@geminustech.com</li>
                    </ul>

                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                    <p style="color: #666; font-size: 12px;">Best regards,<br />Geminus Tech Team</p>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(companyMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return { success: true, message: 'Emails sent successfully' };
    } catch (error) {
        console.error('Email sending error:', error);
        throw error;
    }
}

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}
