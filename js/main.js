window.onload = () => {
  const canvas = document.querySelector("canvas");
  const form = document.querySelector("form");
  const button = document.querySelector("button");
  const ctx = canvas.getContext("2d");
  const srcImage = new Image();
  srcImage.src = srcImage.src =
    "data:image/png;base64,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";
  // Used to reflect relative brightnesses of rgb in black and white
  const calculateRelativeBrightness = (R, G, B) => {
    return Math.sqrt(R * R * 0.299 + G * G * 0.587 + B * B * 0.114);
  };

  const setRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  scaler = (height, width) => {
    let maxDimension = 1000;
    let division = 1;
    if (height > maxDimension || width > maxDimension) {
      if (height > width) {
        division = height / maxDimension;
      } else {
        division = width / maxDimension;
      }
    }
    return { height: height / division, width: width / division };
  };

  // console.log(form);

  form.onsubmit = async (e) => {
    e.preventDefault();
    newImg = new Image();
    const newSrc = e.target[0].value;
    newImg.src = newSrc;

    await newImg.decode();
    render(newImg);
  };

  srcImage.onload = () => {
    render(srcImage);
  };

  const render = (srcImg) => {
    button.disabled = true;
    const completedRaindrops = new Map();

    letAnimationComplete = false;

    const { height, width } = scaler(srcImg.height, srcImg.width);
    srcImg.height = height;
    srcImg.width = width;
    canvas.height = height;
    canvas.width = width;

    // debugger;

    // Once the image is loaded, render it
    ctx.drawImage(srcImg, 0, 0, width, height);
    // Strip all the pixel data out of it [R, G, B, A, R, G, B, A...]
    const pixels = ctx.getImageData(0, 0, width, height);
    // Determine how many pixels we want to sample and keep, and how big the final rendered drops/pixels are
    console.log(pixels);
    const samplingRate = 1;
    const mappedImage = [];
    const pixelMap = new Map();

    // Iterating steps of 4 due to the RGBA structure of getImageData, and by sample rate
    for (let i = 0; i < pixels.data.length; i += 4 * samplingRate) {
      const red = pixels.data[i];
      const green = pixels.data[i + 1];
      const blue = pixels.data[i + 2];
      const opacity = pixels.data[i + 3];

      // Ignore transparent values for performance
      if (opacity !== 0) {
        const pixelIndex = i / 4;
        const x = Math.floor(pixelIndex % width);
        const y = Math.floor(pixelIndex / width);

        // Store pixel data with x,y key for fast lookup when evaluating during travel
        pixelMap.set(`${x},${y}`, {
          red,
          green,
          blue,
          opacity: opacity / 255,
        });

        mappedImage.push({ x, y, red, green, blue, opacity: opacity / 255 });
      }
    }

    // Use an offscreen canvas for better performance
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const offscreenCtx = offscreenCanvas.getContext("2d");

    class Raindrop {
      constructor({ x, y, targetX, targetY, velocity, opacity }) {
        this.x = x || Math.random() * width;
        this.y = y || 0;
        this.targetX = Math.round(targetX); // Ensure rounded
        this.targetY = Math.round(targetY); // Ensure rounded
        this.velocity = velocity || Math.random() * 5 + 7;
        this.opacity = opacity || 0.5;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.color = { red: 0, green: 0, blue: 0 };
        this.reachedTarget = false;
        this.fadeStartTime = 0;
        this.fadeDuration = 1000;
        this.startTime = Date.now();
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const animationTime = (performance.now() - this.startTime) / 1000;

        // Force the animations to end relatively quickly when velocities are overshooting
        if (distance < 50 || animationTime > 200) {
          this.reachedTarget = true;
        }

        // If it's hit its target, force its x/y (in case we forced an animation end, and fade it in over x ms)
        if (this.reachedTarget) {
          this.x = this.targetX;
          this.y = this.targetY;
          const fadeProgress =
            (Date.now() - this.fadeStartTime) / this.fadeDuration;
          this.opacity = Math.min(1, fadeProgress);
          return;
        }

        // Gets the colour value of its final target
        const finalPixelData = pixelMap.get(`${this.targetX},${this.targetY}`);
        this.color = finalPixelData;

        // Calculate next position
        const vx = (dx / distance) * this.velocity;
        const vy = (dy / distance) * this.velocity;
        const nextX = this.x + vx;
        const nextY = this.y + vy;

        // Check if next position would overshoot
        const nextDx = this.targetX - nextX;
        const nextDy = this.targetY - nextY;

        // If signs are different, we're overshooting
        if (dx * nextDx <= 0 || dy * nextDy <= 0) {
          this.reachedTarget = true;
          this.x = this.targetX;
          this.y = this.targetY;
          this.position1 = this.targetY;
          this.position2 = this.targetX;
          this.fadeStartTime = Date.now();
          return;
        }

        // Normal movement if not overshooting
        this.x = nextX;
        this.y = nextY;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);

        // const pixelData = pixelMap.get(`${this.position2},${this.position1}`);
        // if (pixelData) {
        //   this.color = pixelData;
        // }
      }
    }

    // Create a raindrop for every pixel we created
    const raindrops = [];
    pixelMap.forEach((rgbValue, xy) => {
      const x = parseInt(xy.split(",")[0]);
      const y = parseInt(xy.split(",")[1]);
      raindrops.push(
        new Raindrop({
          x: setRange(x + width / 1.5, x - width / 1.5),
          // x: target.x,
          y: setRange(-50, -250),
          targetX: x,
          targetY: y,
          velocity: setRange(5, 10),
          opacity: setRange(0.1, 0.03),
        })
      );
    });

    function animate() {
      offscreenCtx.clearRect(0, 0, width, height);

      // Filter raindrops first
      const activeRaindrops = raindrops.filter(
        (drop) => !drop.reachedTarget || drop.opacity < 0.8
      );
      const completedRaindrops = raindrops.filter(
        (drop) => drop.reachedTarget && drop.opacity >= 0.8
      );

      // Draw active raindrops first
      for (const drop of activeRaindrops) {
        drop.update();
        // console.log(`hsla(${setRange(360, 0)}, 100, 100, ${drop.opacity})`);
        offscreenCtx.fillStyle = `rgba(${drop.color.red},${drop.color.green},${drop.color.blue},${drop.opacity})`;
        // offscreenCtx.fillStyle = `hsla(${setRange(360, 0)}, 100%, 50%, 1)`;
        offscreenCtx.fillRect(
          Math.round(drop.x),
          Math.round(drop.y),
          setRange(samplingRate, samplingRate * 5),
          setRange(samplingRate, samplingRate * 5)
        );
      }

      // Draw completed raindrops last
      for (const drop of completedRaindrops) {
        offscreenCtx.fillStyle = `rgba(${drop.color.red},${drop.color.green},${drop.color.blue},${drop.opacity})`;
        offscreenCtx.fillRect(
          drop.targetX,
          drop.targetY,
          samplingRate,
          samplingRate
        );
      }

      // Copy to main canvas
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(offscreenCanvas, 0, 0);

      // Only stop when ALL raindrops are fully completed (including fade)
      if (activeRaindrops.length === 0) {
        console.log("Animation complete");
        cancelAnimationFrame(animationId);
        button.disabled = false;
        return;
      }

      requestAnimationFrame(animate);
    }

    // console.log(pixelMap);
    const animationId = requestAnimationFrame(animate);
  };
};
