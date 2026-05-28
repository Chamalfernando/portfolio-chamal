import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Plus, Minus, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const FloatingFrap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'Introductory' | 'Project-based' | 'Full-Time'>('Project-based');
  const [workspace, setWorkspace] = useState('Full Remote');
  const [urgencyShots, setUrgencyShots] = useState(1);
  const [sweeteners, setSweeteners] = useState(true); // Flexible schedule terms
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sizes = [
    { name: 'Introductory', desc: 'Quick Sync', duration: '15 min chat', iconSize: 18 },
    { name: 'Project-based', desc: 'Collaboration', duration: 'Specific Scope', iconSize: 22 },
    { name: 'Full-Time', desc: 'Employment', duration: 'Long-term Role', iconSize: 26 },
  ] as const;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      toast.error("Please fill in your email and specifications.");
      return;
    }
    
    // Simulate sending inquiry
    setIsSubmitted(true);
    toast.success("Inquiry submitted successfully! Chamal will review your specifications.");
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setMessage('');
      setEmail('');
      setUrgencyShots(1);
      setSize('Project-based');
    }, 2000);
  };

  return (
    <>
      {/* Floating Button (Contact Assistant Button) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-sb-accent text-white rounded-full flex items-center justify-center shadow-sb-frap hover:shadow-sb-frap-active active:scale-95 transition-all z-40 focus:outline-none focus:ring-2 focus:ring-sb-green focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
        {/* Active badge indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-sb-gold rounded-full border border-white" />
      </motion.button>

      {/* Slide-in Drawer Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />

            {/* Customize Panel Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[440px] bg-white z-50 shadow-2xl flex flex-col border-l border-sb-border/40"
            >
              {/* Header */}
              <div className="bg-sb-house text-white p-6 flex justify-between items-center border-b border-white/10">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-sb-gold" />
                  <div>
                    <h3 className="font-serif font-bold text-lg">Configure Inquiry</h3>
                    <p className="text-xs text-sb-text-white-soft">Submit custom project or role requirements</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-sb-cream/20">
                
                {/* Size Selector (PDP style cup row converted to Engagement Type) */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-3 border-b border-sb-border/30 pb-2">
                    Engagement Level
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {sizes.map((s) => {
                      const isSelected = size === s.name;
                      return (
                        <button
                          key={s.name}
                          type="button"
                          onClick={() => setSize(s.name)}
                          className={`flex flex-col items-center justify-between p-3 rounded-2xl border transition-all min-h-[110px] ${
                            isSelected
                              ? 'border-sb-accent bg-sb-light/35 shadow-sm text-sb-house'
                              : 'border-sb-border bg-white text-sb-text-black-soft hover:bg-sb-ceramic/20'
                          }`}
                        >
                          <MessageSquare
                            style={{ width: s.iconSize, height: s.iconSize }}
                            className={`mb-2 ${isSelected ? 'text-sb-accent' : 'text-sb-text-black-soft/70'}`}
                          />
                          <div className="text-center">
                            <p className="text-xs font-bold">{s.name}</p>
                            <p className="text-[9px] text-sb-text-black-soft/80">{s.desc}</p>
                            <p className="text-[8px] text-sb-accent font-semibold">{s.duration}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Workspace Preference (Milk Options -> Location) */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-3 border-b border-sb-border/30 pb-2">
                    Work Environment
                  </h4>
                  <div className="space-y-2">
                    {['On-site', 'Hybrid Office', 'Full Remote'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                          workspace === option
                            ? 'border-sb-accent bg-sb-light/20 font-semibold text-sb-house'
                            : 'border-sb-border bg-white text-sb-text-black-soft hover:bg-sb-ceramic/25'
                        }`}
                      >
                        <span className="text-sm">{option}</span>
                        <input
                          type="radio"
                          name="workspace"
                          value={option}
                          checked={workspace === option}
                          onChange={() => setWorkspace(option)}
                          className="w-4 h-4 text-sb-accent focus:ring-sb-accent border-sb-border"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Espresso Shots Urgency (Numeric Stepper -> Priority) */}
                <div>
                  <div className="flex justify-between items-center mb-3 border-b border-sb-border/30 pb-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft">
                      Project Priority
                    </h4>
                    <span className="text-xs font-bold text-sb-accent">Level {urgencyShots}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-sb-border">
                    <div>
                      <p className="text-sm font-semibold text-sb-house">
                        {urgencyShots === 1 && "Normal Priority (Standard timeline)"}
                        {urgencyShots === 2 && "High Priority (Expedited review)"}
                        {urgencyShots === 3 && "Urgent Priority (Rapid kick-off)"}
                        {urgencyShots === 4 && "Critical Priority (Immediate action)"}
                      </p>
                      <p className="text-[10px] text-sb-text-black-soft">Sets response queue precedence</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setUrgencyShots((prev) => Math.max(1, prev - 1))}
                        disabled={urgencyShots <= 1}
                        className="w-8 h-8 rounded-full border border-sb-border hover:bg-sb-ceramic/40 flex items-center justify-center text-sb-house disabled:opacity-30 disabled:pointer-events-none"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setUrgencyShots((prev) => Math.min(4, prev + 1))}
                        disabled={urgencyShots >= 4}
                        className="w-8 h-8 rounded-full border border-sb-border hover:bg-sb-ceramic/40 flex items-center justify-center text-sb-house disabled:opacity-30 disabled:pointer-events-none"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add-ins Checkboxes (Flavors -> Add-ons) */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-3 border-b border-sb-border/30 pb-2">
                    Inquiry Specifications
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 bg-white p-3 rounded-xl border border-sb-border cursor-pointer hover:bg-sb-ceramic/15">
                      <input
                        type="checkbox"
                        checked={sweeteners}
                        onChange={() => setSweeteners((prev) => !prev)}
                        className="w-4 h-4 rounded text-sb-accent focus:ring-sb-accent border-sb-border"
                      />
                      <div>
                        <p className="text-sm font-semibold text-sb-house">Flexible scheduling agreements</p>
                        <p className="text-[10px] text-sb-text-black-soft">Check if your timeline has flexibility</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Contact details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-1 border-b border-sb-border/30 pb-2">
                    Your Specifications
                  </h4>
                  <div>
                    <label className="block text-xs font-bold text-sb-house mb-2">Primary Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-sb-border focus:border-sb-accent focus:ring-1 focus:ring-sb-accent outline-none px-4 py-2.5 rounded-xl text-sm text-sb-house"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-sb-house mb-2">Detailed Requirements *</label>
                    <textarea
                      required
                      placeholder="Describe your project requirements, technology stack, or role details..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-sb-border focus:border-sb-accent focus:ring-1 focus:ring-sb-accent outline-none px-4 py-2.5 rounded-xl text-sm resize-none text-sb-house"
                    />
                  </div>
                </div>

              </div>

              {/* Submit Area */}
              <div className="p-6 border-t border-sb-border bg-white flex flex-col gap-2">
                <Button
                  onClick={handleOrderSubmit}
                  variant="sbFilled"
                  className="w-full py-6 text-sm font-semibold tracking-tight shadow-md"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
                <p className="text-[10px] text-center text-sb-text-black-soft">
                  Submitting sends your request directly to Chamal's contact inbox.
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFrap;
