const messages = [
  "You make me the happiest person in the world.",
  "I love the way you laugh.",
  "You’re my favorite person to talk to.",
  "I can’t wait to see you again.",
  "You’re my everything.",
  "Every moment with you is a treasure.",
  "I love you more than words can express.",
  "You’re the best thing that ever happened to me.",
  "I’m so grateful to have you in my life.",
  "You’re my sunshine on a cloudy day."
];

function showMessage() {
  const messageContainer = document.getElementById("message-container");
  const messageElement = document.getElementById("message");
  const soundEffect = document.getElementById("sound-effect");

  // Play sound effect
  soundEffect.play();

  // Pick a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageElement.innerText = randomMessage;

  // Show the message container
  messageContainer.classList.remove("hidden");

  // Hide the message after 5 seconds (optional)
  setTimeout(() => {
    messageContainer.classList.add("hidden");
  }, 5000);
}
