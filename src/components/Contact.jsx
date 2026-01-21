import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 rounded-xl border dark:border-gray-600 bg-white dark:bg-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-4 rounded-xl border dark:border-gray-600 bg-white dark:bg-gray-900"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-4 rounded-xl border dark:border-gray-600 bg-white dark:bg-gray-900"
            required
          />
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-8 mt-12">
          <a
            href="mailto:kumarbharatenduarya@gmail.com"
            className="p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/shastriarya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/arya-kumar-shastree-4a59a8277/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
