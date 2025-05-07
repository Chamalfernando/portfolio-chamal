import React from "react";
import { useState } from "react";

// src/components/Contact.tsx
const Contact = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Collaborator email submitted:", email);
    setSubmitted(true);
    setEmail(""); // reset
  };

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Let's Collaborate
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Got an interesting idea or want to team up on a project? Drop your
          email below!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Connect with Me
          </button>
          {submitted && (
            <p className="text-green-600 text-sm text-center">
              Thanks! I'll reach out soon ✨
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
