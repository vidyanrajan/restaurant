import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream text-stone-900 pb-20 pt-32">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
        <h1 className="text-4xl font-serif font-bold text-mutton mb-8 border-b-2 border-saffron/30 pb-4">Privacy Policy</h1>
        
        <div className="space-y-6 font-sans text-stone-700 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Mutton Raja. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          
          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. The Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling an order).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>

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
