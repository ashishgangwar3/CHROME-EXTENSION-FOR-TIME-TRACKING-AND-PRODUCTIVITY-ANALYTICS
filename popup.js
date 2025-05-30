
chrome.storage.local.get("log", (result) => {
  const log = result.log || {};
  const ul = document.getElementById("log");
  Object.entries(log).forEach(([domain, time]) => {
    const li = document.createElement("li");
    li.textContent = `${domain}: ${Math.round(time / 1000)}s`;
    ul.appendChild(li);
  });
});
