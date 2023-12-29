

const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://ezzw5bexdwdkqpnd7jo2ts6kae0bzhwa.lambda-url.us-east-1.on.aws/");
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    let data = await response.json();
    counter.textContent = `Views on this page: ${data}`; // Concatenating the string with the fetched data
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}

updateCounter();