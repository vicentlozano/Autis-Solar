import { ref, onMounted } from "vue";

export const useMapForecastWindy = () => {
  const options = {
    key: "Nh8SHswXmSLimJHjl2R2ReXFt5Qe42NC",
    lat: 38.9673,
    lon: -0.1833,
    zoom: 8,
    timestamp: Date.now(),
    hourFormat: "12h",
    favOverlays: ["clouds", "rainAccu", "wind", "temp", "pressure"], // Añade aquí todas las superposiciones que desees
  };

  const loadScripts = () => {
    return new Promise((resolve, reject) => {
      if (!document.querySelector(`script[src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"]`)) {
        const leafletScript = document.createElement("script");
        leafletScript.src = "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js";
        leafletScript.onload = () => {
          if (!document.querySelector(`script[src="https://api.windy.com/assets/map-forecast/libBoot.js"]`)) {
            const windyScript = document.createElement("script");
            windyScript.src = "https://api.windy.com/assets/map-forecast/libBoot.js";
            windyScript.onload = resolve;
            document.head.appendChild(windyScript);
          } else {
            resolve();
          }
        };
        leafletScript.onerror = reject;
        document.head.appendChild(leafletScript);
      } else {
        resolve();
      }
    });
  };

  const initWindy = () => {
    windyInit(options, (windyAPI) => {
      const { store } = windyAPI;
      // All the params are stored in windyAPI.store
    
      const levels = store.getAllowed('availLevels');
      // levels = ['surface', '850h', ... ]
      // Getting all available values for given key
    
      let i = 0;
      setInterval(() => {
        i = i === levels.length - 1 ? 0 : i + 1;
    
        // Changing Windy params at runtime
        store.set('level', levels[i]);
      }, 500);
    
      // Observing change of .store value
      store.on('level', level => {
        console.log(`Level was changed: ${level}`);
      });
    });
  };

  onMounted(() => {
    loadScripts().then(() => {
      initWindy();
    });
  });

  return {
    options,
    loadScripts,
    initWindy,
  };
};