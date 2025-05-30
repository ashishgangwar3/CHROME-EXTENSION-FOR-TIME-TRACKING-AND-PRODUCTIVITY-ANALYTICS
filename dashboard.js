
fetch("http://localhost:3000/log")
  .then(res => res.json())
  .then(data => {
    const domains = {};
    data.forEach(log => {
      domains[log.domain] = (domains[log.domain] || 0) + log.duration;
    });
    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(domains),
        datasets: [{
          label: "Time Spent",
          data: Object.values(domains),
        }],
      },
    });
  });
