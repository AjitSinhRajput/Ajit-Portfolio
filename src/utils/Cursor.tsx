import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

const Cursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const colors = ["#0ef", "#08f7fe", "#09fbd3"];

    const handleMove = (e: MouseEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      if ((e.target as HTMLElement).closest(".no-cursor-effect")) return;
      // Spawn only 1 particle per movement
      const count = 1;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 50, // slightly wider area
          y: e.clientY + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 0.3, // slower movement
          vy: (Math.random() - 0.5) * 0.3,
          alpha: 1,
          size: Math.random() * 3 + 2, // slightly bigger
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        ctx.fillStyle = `rgba(14, 239, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect lines only if closer
        for (let j = i - 1; j >= 0; j--) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            // increase distance slightly
            ctx.strokeStyle = `rgba(14, 239, 255, ${0.5 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Update
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.008; // slower fade
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("mousemove", handleMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
