'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-space-grotesk tracking-tighter mb-4">{isMounted ? t('contact.title') : "Get In Touch"}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold font-space-grotesk tracking-tight">Let&apos;s build something <span className="text-blue-500">amazing</span> together.</h3>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-md">
              I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ibadnurulla@gmail.com", href: "mailto:ibadnurulla@gmail.com" },
                { icon: Phone, label: "Phone", value: "0104781798", href: "tel:0104781798" },
                { icon: MapPin, label: "Location", value: "Baku, Azerbaijan", href: "#" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-6 p-6 glass rounded-3xl hover:bg-accent transition-colors group"
                >
                  <div className="p-4 bg-blue-500/10 text-blue-500 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/40 font-medium mb-1">{item.label}</div>
                    <div className="text-lg font-bold font-space-grotesk">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-foreground/40 ml-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-background border border-border p-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-foreground/40 ml-2">Email Address</label>
              <input type="email" placeholder="ibadnurulla@gmail.com" className="w-full bg-background border border-border p-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-foreground/40 ml-2">Message</label>
              <textarea placeholder="Tell me about your project..." rows={5} className="w-full bg-background border border-border p-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-95">
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
