import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [fireflies, setFireflies] = useState([]);
  const [floatingFireflies, setFloatingFireflies] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    generateFireflies();
    generateFloatingFireflies();

    const handleResize = () => {
      generateFireflies();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateFireflies = () => {
    const numberOfFireflies = Math.floor(
      (window.innerWidth * window.innerHeight) / 14000
    );

    const newFireflies = [];

    for (let i = 0; i < numberOfFireflies; i++) {
      newFireflies.push({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.4,
        animationDuration: Math.random() * 3 + 2,
      });
    }

    setFireflies(newFireflies);
  };

  const generateFloatingFireflies = () => {
    const numberOfFloatingFireflies = 10;
    const newFloatingFireflies = [];

    for (let i = 0; i < numberOfFloatingFireflies; i++) {
      newFloatingFireflies.push({
        id: i,
        size: Math.random() * 5 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 6 + 6,
      });
    }

    setFloatingFireflies(newFloatingFireflies);
  };

  return (
    <>
      {/* LIGHT MODE */}
      {!isDark && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 tech-grid-light" />
        </div>
      )}

      {/* DARK MODE */}
      {isDark && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {fireflies.map((firefly) => (
            <div
              key={firefly.id}
              className="firefly animate-firefly-pulse"
              style={{
                width: firefly.size + "px",
                height: firefly.size + "px",
                left: firefly.x + "%",
                top: firefly.y + "%",
                opacity: firefly.opacity,
                animationDuration: firefly.animationDuration + "s",
              }}
            />
          ))}

          {floatingFireflies.map((firefly) => (
            <div
              key={firefly.id}
              className="firefly firefly-floating animate-firefly-float"
              style={{
                width: firefly.size + "px",
                height: firefly.size + "px",
                left: firefly.x + "%",
                top: firefly.y + "%",
                animationDelay: firefly.delay + "s",
                animationDuration: firefly.animationDuration + "s",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};