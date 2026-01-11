let emotionCount = {};
let chart;

const emotions = {
  happy: "Your happiness matters — let it spread.",
  sad: "It’s okay to feel sad. You don’t have to rush healing.",
  lonely: "Even now, you are not truly alone.",
  anxious: "Breathe. This moment will pass.",
  depressed: "You are still worthy, even on heavy days.",
  angry: "Anger is pain asking to be heard.",
  stressed: "One step at a time is enough.",
  tired: "Rest is a form of strength.",
  scared: "Fear means you care deeply.",
  confused: "Clarity comes slowly — and that’s okay.",
  hopeless: "Hope often whispers, not shouts.",
  pressure: "You’re allowed to go at your pace.",
  alone: "Your presence matters more than you know.",
  broken: "Broken does not mean finished.",
  insecure: "You are enough as you are.",
  overwhelmed: "Pause. You’re doing your best.",
  numb: "Even numbness deserves care.",
  guilty: "Forgiveness includes yourself.",
  ashamed: "Your past is not your identity.",
  nervous: "Growth feels uncomfortable at first.",
  lost: "Being lost is part of finding meaning.",
  weak: "Needing help is human.",
  empty: "Emptiness can be refilled.",
  burnout: "You deserve rest, not just results.",
  frustrated: "Progress isn’t linear — keep going."
};

document.body.classList.add("login-bg");

function handleLogin(res) {
  const user = jwt_decode(res.credential);

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("app").style.display = "block";

  document.getElementById("welcome").innerText =
    `Welcome, ${user.name} 🌟`;

  document.body.classList.remove("login-bg");
  document.body.classList.add("app-bg");
}

function respond() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "I’m here with you. Tell me more.";

  for (let emo in emotions) {
    if (input.includes(emo)) {
      reply = emotions[emo];
      emotionCount[emo] = (emotionCount[emo] || 0) + 1;
      break;
    }
  }

  document.getElementById("response").innerText = reply;
  document.getElementById("userInput").value = "";
}

function toggleGraph() {
  const box = document.getElementById("chartBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
  drawChart();
}

function drawChart() {
  const ctx = document.getElementById("emotionChart").getContext("2d");
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(emotionCount),
      datasets: [{
        label: "Emotion Frequency",
        data: Object.values(emotionCount),
        backgroundColor: "#667eea"
      }]
    }
  });
}
