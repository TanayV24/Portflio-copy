import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <style>{`
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes fadeOut {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes highlight {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(139, 92, 246, 0.2); }
        }

        .loader-code-block {
          position: relative;
          font-family: 'Monaco', monospace;
          font-size: 14px;
          line-height: 1.8;
          color: rgb(139, 92, 246);
          background: rgba(139, 92, 246, 0.05);
          padding: 20px;
          border-radius: 8px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          animation: fadeOut 1s ease-out forwards;
          overflow: hidden;
        }

        .code-line {
          display: flex;
          gap: 12px;
          padding: 4px 0;
          animation: highlight 1.5s ease-in-out infinite;
        }

        .code-line:nth-child(1) { animation-delay: 0s; }
        .code-line:nth-child(2) { animation-delay: 0.3s; }
        .code-line:nth-child(3) { animation-delay: 0.6s; }
        .code-line:nth-child(4) { animation-delay: 0.9s; }

        .line-number {
          color: rgba(139, 92, 246, 0.4);
          min-width: 24px;
        }

        .scan-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgb(139, 92, 246), transparent);
          animation: scanLine 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="loader-code-block">
        <div className="scan-overlay" />
        <div className="code-line">
          <span className="line-number">01</span>
          <span>const loading = true;</span>
        </div>
        <div className="code-line">
          <span className="line-number">02</span>
          <span>while (loading) {`{`}</span>
        </div>
        <div className="code-line">
          <span className="line-number">03</span>
          <span>  render portfolio...</span>
        </div>
        <div className="code-line">
          <span className="line-number">04</span>
          <span>{`}`}</span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
