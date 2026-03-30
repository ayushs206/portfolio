export default function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center p-8 py-20 relative">
      <div className="max-w-3xl w-full z-10 relative">
        <div className="absolute -inset-1 bg-warden-glow/10 blur-2xl -z-10"></div>
        <div className="bg-sculk-bg/90 border-4 border-deepslate p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl text-warden-glow mb-8 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Send a Message
          </h2>

          <form
            action="https://formspree.io/f/xaqlerbr"
            method="POST"
            className="space-y-6 flex flex-col"
          >
            <div>
              <label className="block text-xl text-sculk-teal mb-2">
                Engraver's Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-deepslate-dark border-2 border-deepslate p-3 text-xl text-white focus:outline-none focus:border-warden-glow transition-colors font-minecraft"
                placeholder="Steve..."
              />
            </div>

            <div>
              <label className="block text-xl text-sculk-teal mb-2">
                Return Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-deepslate-dark border-2 border-deepslate p-3 text-xl text-white focus:outline-none focus:border-warden-glow transition-colors font-minecraft"
                placeholder="steve@village.net"
              />
            </div>

            <div>
              <label className="block text-xl text-sculk-teal mb-2">
                Inscription
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-deepslate-dark border-2 border-deepslate p-3 text-xl text-white focus:outline-none focus:border-warden-glow transition-colors font-minecraft resize-none"
                placeholder="What brings you to the Deep Dark?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 self-center px-12 py-4 bg-sculk-dark-teal text-white text-2xl border-b-4 border-black hover:bg-warden-glow hover:text-black transition-all active:border-b-0 active:translate-y-1"
            >
              Transmit Echo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}