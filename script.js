document.addEventListener('DOMContentLoaded', () => {
  let newURL = document.getElementById("shorturl");
  let copyButton = document.getElementById("copy");
  let shortenButton = document.getElementById("glow-on-hover");

  copyButton.addEventListener('click', () => {
    newURL.select();
    document.execCommand("copy");
  });

  shortenButton.addEventListener('click', async () => {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
  });
});
