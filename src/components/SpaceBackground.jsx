import { useEffect, useRef } from "react";

export const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars = [];
    const comets = [];

    // Initialize stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
        twinkleSpeed: Math.random() * 0.05 + 0.01, // Random speed for twinkling
        twinklePhase: Math.random() * Math.PI * 2, // Random starting phase
      });
    }

    const createComet = () => {
      comets.push({
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 3 + 2,
        angle: Math.PI / 4, // 45 degrees
        opacity: 1,
      });
    };

    // Create a comet every 2 seconds
    const cometInterval = setInterval(createComet, 2000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        // Update twinkle using sine wave
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5; // Map -1..1 to 0..1
        const currentOpacity = star.opacity * twinkle;

        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw comets
      comets.forEach((comet, index) => {
        comet.x -= comet.speed * Math.cos(comet.angle); // Move left
        comet.y += comet.speed * Math.sin(comet.angle); // Move down
        comet.opacity -= 0.005;

        if (comet.opacity <= 0 || comet.x < 0 || comet.y > canvas.height) {
          comets.splice(index, 1);
          return;
        }

        // Draw comet head
        ctx.globalAlpha = comet.opacity;
        ctx.fillStyle = "rgba(59, 130, 246, 1)"; // Blue-500
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw comet tail
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x + comet.length * Math.cos(comet.angle),
          comet.y - comet.length * Math.sin(comet.angle)
        );
        gradient.addColorStop(0, "rgba(59, 130, 246, 1)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x + comet.length * Math.cos(comet.angle),
          comet.y - comet.length * Math.sin(comet.angle)
        );
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      clearInterval(cometInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};
