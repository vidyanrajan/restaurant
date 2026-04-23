import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-cream text-stone-900 pb-20 pt-32">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
        <h1 className="text-4xl font-serif font-bold text-mutton mb-8 border-b-2 border-saffron/30 pb-4">Terms and Conditions</h1>
        
        <div className="space-y-6 font-sans text-stone-700 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Mutton Raja ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          
          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. User Representations</h2>
          <p>By using the Site, you represent and warrant that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. Modifications and Interruptions</h2>
          <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.</p>

          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link href="/" className="text-saffron font-bold hover:text-mutton transition-colors">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
