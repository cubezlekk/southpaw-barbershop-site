import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-paper text-ink px-6 py-24 max-w-3xl mx-auto">
      <Link to="/" className="eyebrow">&larr; Back home</Link>
      <h1 className="font-display text-4xl font-extrabold mt-6 mb-6">Terms of Service</h1>
      <p className="font-body text-muted leading-relaxed mb-4">
        This website provides general information about Southpaw Barbershop's services.
        Appointment requests submitted through this site are not confirmed until we respond
        directly.
      </p>
      <p className="font-body text-muted leading-relaxed">
        Contact us directly for the most accurate pricing and scheduling information.
      </p>
    </div>
  );
}
