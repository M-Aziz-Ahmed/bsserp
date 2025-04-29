export async function POST(request) {
    const { email, userName, message, services } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    try {
        // Email to your company
        await transport.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `Message from ${userName} (${email}) for ${services}`,
            text: message,
        });

        // Auto-response to user
        await transport.sendMail({
            from: process.env.MY_EMAIL,
            to: email,
            subject: `We Hear You!`,
            text: `Dear ${userName},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nBizSoft Solution`,
        });

        return NextResponse.json({ message: 'Emails sent successfully' });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}