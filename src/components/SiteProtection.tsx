import { useEffect } from "react";

export default function SiteProtection() {
  useEffect(() => {
    // Block right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block keyboard shortcuts for dev tools and source view
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+I (Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+C (Element picker)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return;
      }
      // Ctrl+U (View source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return;
      }
      // Ctrl+S (Save page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        return;
      }
      // Ctrl+A (Select all)
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        return;
      }
      // Ctrl+C (Copy) - block when selecting page content
      if (e.ctrlKey && e.key === "c") {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
          e.preventDefault();
          return;
        }
      }
    };

    // Block drag on images
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // DevTools detection via debugger timing
    let devtoolsOpen = false;
    const detectDevTools = () => {
      const threshold = 160;
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const end = performance.now();
      if (end - start > threshold) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
          document.body.innerHTML = `
            <div style="
              display:flex;align-items:center;justify-content:center;
              height:100vh;background:#0a0a0c;color:#e8c547;
              font-family:sans-serif;text-align:center;padding:2rem;
            ">
              <div>
                <h1 style="font-size:2rem;margin-bottom:1rem;">⚠️ 접근 차단</h1>
                <p style="color:#c8c6c1;font-size:1.1rem;">개발자 도구 사용이 감지되었습니다.<br/>페이지를 새로고침해주세요.</p>
              </div>
            </div>
          `;
        }
      } else {
        devtoolsOpen = false;
      }
    };

    // Console warning
    const warningStyle = "color:#e8c547;font-size:24px;font-weight:bold;";
    const textStyle = "color:#c8c6c1;font-size:14px;";
    console.log("%c⚠️ 경고!", warningStyle);
    console.log(
      "%c이 사이트의 콘텐츠는 저작권으로 보호됩니다.\n무단 복제 및 도용은 법적 조치의 대상이 될 수 있습니다.",
      textStyle
    );

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    // Run devtools detection periodically (only in production)
    let interval: ReturnType<typeof setInterval> | null = null;
    if (import.meta.env.PROD) {
      interval = setInterval(detectDevTools, 2000);
    }

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
