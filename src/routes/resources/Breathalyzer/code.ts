export let code = `
#include <WiFi.h>
#include <WebServer.h>

#define LED1 26
#define LED2 27

const char* ssid = "ESP32-AP";
const char* password = "12345678";

WebServer server(80);

void handleRoot() {
  String html = "<!DOCTYPE html>\\n";
  html += "<html>\\n<head>\\n<title>ESP32 LED Control</title>\\n";
  html += "<script>\\n";
  html += "function toggleLED(led) {\\n";
  html += "  fetch('/toggle?led=' + led)\\n";
  html += "  .then(response => response.text())\\n";
  html += "  .then(state => document.getElementById(led).innerHTML = state);\\n";
  html += "}\\n</script>\\n</head>\\n<body>\\n";
  html += "<h2>ESP32 LED Control</h2>\\n";
  html += "<button onclick=\\"toggleLED('LED1')\\">Toggle LED 1</button> <span id='LED1'>" + String(digitalRead(LED1)) + "</span><br>\\n";
  html += "<button onclick=\\"toggleLED('LED2')\\">Toggle LED 2</button> <span id='LED2'>" + String(digitalRead(LED2)) + "</span><br>\\n";
  html += "</body></html>\\n";
  server.send(200, "text/html", html);
}

void handleToggle() {
  if (server.hasArg("led")) {
    String led = server.arg("led");
    if (led == "LED1") {
      digitalWrite(LED1, !digitalRead(LED1));
      server.send(200, "text/plain", String(digitalRead(LED1)));
    } else if (led == "LED2") {
      digitalWrite(LED2, !digitalRead(LED2));
      server.send(200, "text/plain", String(digitalRead(LED2)));
    }
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);

  WiFi.softAP(ssid, password);
  Serial.println("Access Point Started");
  Serial.print("IP Address: ");
  Serial.println(WiFi.softAPIP());

  server.on("/", handleRoot);
  server.on("/toggle", handleToggle);
  server.begin();
}

void loop() {
  server.handleClient();
}
`;
