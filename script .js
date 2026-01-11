
let userName = "";
let emotionCount = {};
let chart;

const emotions = {
  happy: "I’m glad you’re feeling happy. Hold onto that warmth.",
  sad: "It’s okay to feel sad. I’m here with you.",
  lonely: "You may feel alone, but you’re not unseen.",
  anxious: "Take a slow breath. You’re safe right now.",
  depressed: "Even heavy days don’t erase your worth.",
  angry: "Anger often hides pain. Be kind to yourself.",
  stressed: "You don’t have to solve everything today.",
  tired: "Rest is not quitting — it’s healing.",
  scared: "Fear means you care deeply.",
  confused: "Not knowing is part of growing.",
  hopeless: "Hope sometimes whispers — listen closely.",
  pressure: "You’re allowed to move at your own pace.",
  alone: "Connection can start right here.",
  broken: "Broken doesn’t mean finished.",
  insecure: "You are enough, even now.",
  overwhelmed: "One step is enough today.",
  numb: "Even numbness deserves care.",
  guilty: "Forgiving yourself is powerful.",
  ashamed: "Your past doesn’t define you.",
  nervous: "New paths feel scary before they feel right.",
  lost: "Being lost can lead to something new.",
  weak: "Needing support is human.",
  empty: "Emptiness can be refilled.",
  burnout: "You deserve rest, not just results.",
  frustrated: "Progress is rarely straight."
};

function startApp() {
  const nameInput = document.getElementById("username").value.trim();
  if (!nameInput) {
    alert("Please enter your name");
    return;
  }

  userName = nameInput;

  document.getElementById("nameBox").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.body.classList.remove("intro-bg");
  document.body.classList.add("app-bg");

  document.getElementById("welcome").innerText =
    `Welcome, ${userName} 🌟`;
}

function respond() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = `${userName}, I’m here with you. Tell me more.`;

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
