import { useEffect } from "react";

export default function ParticlesBackground() {
    useEffect(() => {
        const canvas = document.getElementById("particlesField");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let particlesArray = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class SmokeParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 70 + 30; // smaller max size for faster visual response
                this.speedY = Math.random() * -0.7 - 0.5; // increased upward speed
                this.alpha = Math.random() * 0.2 + 0.05;
            }

            update() {
                this.y += this.speedY;
                if (this.y < -this.size) this.reset();
            }

            draw() {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, `rgba(217, 231, 251, ${this.alpha})`);
                gradient.addColorStop(1, "rgba(217, 231, 251, 0)");

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        function initParticles() {
            particlesArray = [];
            for (let i = 0; i < 50; i++) {
                particlesArray.push(new SmokeParticle());
            }
        }

        let lastTime = 0;
        const fpsInterval = 1000 / 30;

        function animate(time) {
            const elapsed = time - lastTime;
            if (elapsed > fpsInterval) {
                lastTime = time;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particlesArray.forEach((p) => {
                    p.update();
                    p.draw();
                });
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        initParticles();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            id="particlesField"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none"
            }}
        />
    );
}

// export default function ParticlesBackground() {
//     useEffect(() => {
//         const canvas = document.getElementById("particlesField");
//         if (!canvas) return;
//         const ctx = canvas.getContext("2d");

//         let particlesArray = [];

//         const resizeCanvas = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };
//         resizeCanvas();
//         window.addEventListener("resize", resizeCanvas);

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = canvas.height + Math.random() * 100;
//                 this.size = Math.random() * 15 + 5;
//                 this.speedY = Math.random() * -1 - 0.5;
//                 this.opacity = Math.random() * 0.2 + 0.05;
//             }

//             update() {
//                 this.y += this.speedY;
//                 if (this.y < -this.size) {
//                     this.y = canvas.height + this.size;
//                     this.x = Math.random() * canvas.width;
//                 }
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//                 ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//                 ctx.fill();
//             }
//         }

//         function initParticles() {
//             particlesArray = [];
//             for (let i = 0; i < 100; i++) {
//                 particlesArray.push(new Particle());
//             }
//         }

//         function animateParticles() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particlesArray.forEach((p) => {
//                 p.update();
//                 p.draw();
//             });
//             requestAnimationFrame(animateParticles);
//         }

//         initParticles();
//         animateParticles();

//         return () => {
//             window.removeEventListener("resize", resizeCanvas);
//         };
//     }, []);

//     return (
//         <canvas
//             id="particlesField"
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 pointerEvents: "none",
//                 zIndex: 0,
//             }}
//         />
//     );
// }
