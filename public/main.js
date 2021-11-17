fetch("https://hpb.health.gov.lk/api/get-current-statistical")
  .then((response) => response.json())
  .then((data) => {
    chrome.runtime.sendMessage(
      { count: data.data.local_new_cases },
      function (response) {}
    );
  });
