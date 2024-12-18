import { Resend } from 'resend';
import EmailTemplate from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, companyName, message } = await req.json();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'info@flowsensesolutions.com', 
      to: ['Elan@flowsensesolutions.com'],  
      subject: `New Inquiry from ${companyName || 'Unknown Company'}`,
      react: (
        <EmailTemplate
          name={name}
          email={email}
          phone={phone}
          companyName={companyName}
          message={message}
        />
      ),
    });

    if (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
