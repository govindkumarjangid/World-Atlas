import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {

    const handleFormSubmit = (formData) => {
        const formInputdata = Object.fromEntries(formData.entries());
        console.log(formInputdata);
    }

    return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center font-display text-3xl font-bold text-white sm:text-4xl"
        >
            Contact Us
        </motion.h2>

        <div
            className="grid gap-6 lg:grid-cols-2"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur"
            >
                <form action={handleFormSubmit} className="space-y-3">
                    <input type="text"
                        required
                        className="w-full rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                        autoComplete="off"
                        placeholder="Enter your name"
                        name="username" />
                    <input type="email"
                        required
                        className="w-full rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                        autoComplete="off"
                        placeholder="Enter your email"
                        name="email" />

                    <textarea
                        className="min-h-40 w-full rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300 resize-none"
                        rows="10"
                        name="message"
                        required
                        autoComplete="off"
                        placeholder="Enter your message"
                    />
                    <motion.button
                        whileHover={{ scale: 1.03, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        value="send"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700"
                    >
                        Send <Send size={16} />
                    </motion.button>
                </form>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-2 sm:h-[460px]"
            >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.2496655505236!2d75.79508137310131!3d26.870511426090943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50ca7161f9b%3A0x59f955fad9e97381!2sPooja%20Kirana!5e1!3m2!1sen!2sin!4v1758907565235!5m2!1sen!2sin"
                    width='100%' height='100%'
                    className="rounded-2xl"
                    style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
        </div>
    </section>
}