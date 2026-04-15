export let code = `
#include <esp_now.h>
#include <WiFi.h>

// ===================== CONFIG =====================
// Replace with the OTHER ESP's MAC address
uint8_t peerMAC[] = {0x80, 0xF1, 0xB2, 0x6D, 0xD9, 0x10}; //change this to the recievers MAC


const char* DEVICE_NAME = "ESP_A"; // change to ESP_B on other board

typedef struct {
  char sender[20];
  char msg[200];
} Message;

Message outgoing;
Message incoming;


void onSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("Send Status: ");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Success" : "Fail");
}


void onReceive(const esp_now_recv_info_t *info, const uint8_t *data, int len) {
  memcpy(&incoming, data, sizeof(incoming));

  Serial.print("\\nFrom: ");
  for (int i = 0; i < 6; i++) {
    Serial.printf("%02X", info->src_addr[i]);
    if (i < 5) Serial.print(":");
  }

  Serial.print("\\n");
  Serial.print(incoming.sender);
  Serial.print(": ");
  Serial.println(incoming.msg);

  Serial.println("\\nType message:");
}


void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  Serial.println("\\nESP-NOW Bidirectional Chat");

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("ESP-NOW init failed");
    return;
  }


  esp_now_register_send_cb(onSent);
  esp_now_register_recv_cb(onReceive);


  esp_now_peer_info_t peerInfo = {};
  memcpy(peerInfo.peer_addr, peerMAC, 6);
  peerInfo.channel = 0;
  peerInfo.encrypt = false;

  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("Failed to add peer");
    return;
  }

  Serial.println("Ready. Type message and press ENTER:");
}

void loop() {
  if (Serial.available()) {
    String input = Serial.readStringUntil('\n');
    input.trim();

    if (input.length() > 0) {
      // Fill struct
      strcpy(outgoing.sender, DEVICE_NAME);
      input.toCharArray(outgoing.msg, sizeof(outgoing.msg));

      // Send
      esp_err_t result = esp_now_send(peerMAC, (uint8_t *)&outgoing, sizeof(outgoing));

      if (result != ESP_OK) {
        Serial.println("Error sending message");
      }
    }
  }
}

`;

export let maccode = `
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  Serial.println(WiFi.macAddress());
}

void loop() {
  Serial.println(WiFi.macAddress());
}
`