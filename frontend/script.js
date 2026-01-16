const API_URL = "https://qcv1vr1uy7.execute-api.us-east-1.amazonaws.com/dev/testid";

function readData() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      operation: "read",
      payload: {
        TableName: "test001",
        Key: { ID: 30 }
      }
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText =
      JSON.stringify(data, null, 2);
  })
  .catch(err => console.error(err));
}
