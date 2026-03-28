export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-2xl tracking-[0.15em] text-text font-bold mb-3">
          DAYLIGHT
        </p>
        <a
          href="mailto:daylight0822@naver.com"
          className="text-text-dim text-xs tracking-wider mb-8 block hover:text-accent transition-colors"
        >
          daylight0822@naver.com
        </a>
        <div className="divider-line mb-8" />
        <p className="text-text-muted/40 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} DAYLIGHT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
