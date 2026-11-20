import React, { useRef, useEffect } from 'react';

interface NeuralNetworkCanvasProps {
  className?: string;
  mousePos?: { x: number; y: number };
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface Packet {
  startNode: number;
  endNode: number;
  progress: number;
  speed: number;
}

interface Notation {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
}

export const NeuralNetworkCanvas: React.FC<NeuralNetworkCanvasProps> = ({ className = '', mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Neural nodes configuration
    const nodeCount = Math.min(Math.floor((width * height) / 9500), 42);
    const nodes: Node[] = [];
    const colors = ['#FF172F', '#FF612E', '#FFFFFF', '#E52B35'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Synaptic packets traveling along connections
    const packets: Packet[] = [];
    for (let i = 0; i < 6; i++) {
      packets.push({
        startNode: Math.floor(Math.random() * nodeCount),
        endNode: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: Math.random() * 0.008 + 0.005,
      });
    }

    // Subtle AI mathematical & tensor notation glyphs
    const notationsList = ['∇L', 'W·x + b', 'σ(z)', 'ReLU', 'softmax', 'ŷ', '∂L/∂W', 'E[X]', 'f(x; θ)', 'arg max'];
    const notations: Notation[] = notationsList.slice(0, 5).map((txt, idx) => ({
      text: txt,
      x: ((idx + 0.5) / 5) * width + (Math.random() - 0.5) * 40,
      y: (Math.random() * 0.7 + 0.15) * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.12 + 0.08,
    }));

    const maxDistance = 115;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle floating AI mathematical notations
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(255, 23, 47, 0.16)';
      for (const n of notations) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 10 || n.x > width - 40) n.vx *= -1;
        if (n.y < 20 || n.y > height - 20) n.vy *= -1;
        ctx.fillStyle = `rgba(255, 97, 46, ${n.alpha * (Math.sin(time + n.x) * 0.3 + 0.7)})`;
        ctx.fillText(n.text, n.x, n.y);
      }

      // 2. Update and draw neural nodes
      const cursorX = mousePos ? (mousePos.x + 0.5) * width : width / 2;
      const cursorY = mousePos ? (mousePos.y + 0.5) * height : height / 2;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from canvas edges
        if (node.x <= node.radius || node.x >= width - node.radius) node.vx *= -1;
        if (node.y <= node.radius || node.y >= height - node.radius) node.vy *= -1;

        // Gentle cursor deflection / attraction
        const dx = cursorX - node.x;
        const dy = cursorY - node.y;
        const distToCursor = Math.sqrt(dx * dx + dy * dy);
        if (distToCursor < 130 && distToCursor > 0) {
          const force = (130 - distToCursor) / 130;
          node.x += (dx / distToCursor) * force * 0.35;
          node.y += (dy / distToCursor) * force * 0.35;
        }

        node.pulsePhase += node.pulseSpeed;
        const pulse = Math.sin(node.pulsePhase) * 0.25 + 0.75;
        const alpha = node.baseAlpha * pulse;

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = node.color === '#FFFFFF' ? `rgba(255, 255, 255, ${alpha})` : `rgba(255, 23, 47, ${alpha})`;
        ctx.fill();

        // Node subtle halo glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 23, 47, ${alpha * 0.18})`;
        ctx.fill();
      }

      // 3. Connect close nodes with synaptic lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 23, 47, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // 4. Draw moving synaptic data packets
      for (const p of packets) {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.startNode = Math.floor(Math.random() * nodes.length);
          p.endNode = Math.floor(Math.random() * nodes.length);
        }

        const start = nodes[p.startNode];
        const end = nodes[p.endNode];
        if (start && end) {
          const dx = end.x - start.x;
          const dy = end.y - start.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance * 1.5) {
            const px = start.x + dx * p.progress;
            const py = start.y + dy * p.progress;

            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#FF612E';
            ctx.shadowColor = '#FF172F';
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};
