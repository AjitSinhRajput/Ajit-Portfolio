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
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d")!;
    const particles = particlesRef.current;
    let animationFrame = 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const getColor = () => {
      const isLight = document.body.classList.contains("light-theme");
      return isLight ? "0, 0, 0" : "45, 212, 191";
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getColor();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines
        for (let j = i - 1; j >= 0; j--) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(${color}, ${0.5 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.018;
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      if (particles.length) {
        animationFrame = requestAnimationFrame(draw);
      } else {
        animationFrame = 0;
      }
    };

    const handleMove = (e: MouseEvent) => {
      particles.push({
        x: e.clientX + (Math.random() - 0.5) * 28,
        y: e.clientY + (Math.random() - 0.5) * 28,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: 0.8,
        size: Math.random() * 2 + 1.5,
      });

      if (particles.length > 45) {
        particles.splice(0, particles.length - 45);
      }

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("mousemove", handleMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrame) cancelAnimationFrame(animationFrame);
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
        contain: "strict",
      }}
    />
  );
};

export default Cursor;
