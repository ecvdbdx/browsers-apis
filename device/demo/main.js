/* Battery */

const level = document.getElementById("level");
const charging = document.getElementById("charging");
const chargingTime = document.getElementById("chargingTime");
const dischargingTime = document.getElementById("dischargingTime");

const batteryWrapper = document.getElementById("batteryWrapper");

if ("getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    level.innerHTML = battery.level;
    charging.innerHTML = battery.charging;
    chargingTime.innerHTML = battery.chargingTime;
    dischargingTime.innerHTML = battery.dischargingTime;

    battery.addEventListener("levelchange", () => {
      level.innerHTML = battery.level;
    });

    battery.addEventListener("chargingchange", () => {
      charging.innerHTML = battery.charging;
    });

    battery.addEventListener("chargingtimechange", () => {
      chargingTime.innerHTML = battery.chargingTime;
    });

    battery.addEventListener("dischargingtimechange", () => {
      dischargingTime.innerHTML = battery.dischargingTime;
    });
  });
} else {
  batteryWrapper.innerHTML = "Battery Status API not supported.";
}

/* Network */

const type = document.getElementById("type");
const downlink = document.getElementById("downlink");
const downlinkMax = document.getElementById("downlinkMax");
const effectiveType = document.getElementById("effectiveType");
const saveData = document.getElementById("saveData");

const networkWrapper = document.getElementById("networkWrapper");

const updateNetworkValues = (network) => {
  type.innerHTML = network.type;
  downlink.innerHTML = network.downlink;
  downlinkMax.innerHTML = network.downlinkMax;
  effectiveType.innerHTML = network.effectiveType;
  saveData.innerHTML = network.saveData;
};

if ("connection" in navigator) {
  const network = navigator.connection;

  updateNetworkValues(network);

  network.addEventListener("change", () => {
    updateNetworkValues(network);
  });
} else {
  networkWrapper.innerHTML = "Network Information API not supported.";
}

/* Memory */

const memoryWrapper = document.getElementById("memoryWrapper");
const memory = document.getElementById("memory");

if ("deviceMemory" in navigator) {
  memory.innerHTML = navigator.deviceMemory;
} else {
  memoryWrapper.innerHTML = "Device Memory API not supported.";
}
