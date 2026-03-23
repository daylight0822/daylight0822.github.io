export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl tracking-[0.15em] text-cinema-white font-bold mb-3">
          DAYLIGHT
        </p>
        <p className="text-cinema-muted text-xs tracking-wider mb-8">
          Cinematic Storyteller & AI Visual Creator
        </p>
        <div className="divider-line mb-8" />
        <p className="text-cinema-muted/40 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} DAYLIGHT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
