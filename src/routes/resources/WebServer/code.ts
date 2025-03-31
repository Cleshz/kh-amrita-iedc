export let code = `
#include <WiFi.h>

const char *ssid = "ESP32_Hotspot"; // Wi-Fi SSID
const char *password = "12345678";  // Wi-Fi Password (minimum 8 characters)

WiFiServer server(80);

void setup() {
    Serial.begin(115200);
    
    // Set ESP32 as an Access Point
    WiFi.softAP(ssid, password);
    Serial.println("Wi-Fi Access Point Started");
    
    // Start the server
    server.begin();
}

void loop() {
    WiFiClient client = server.available(); // Check for incoming client
    if (client) {
        Serial.println("New Client Connected!");
        String request = "";
        
        while (client.connected()) {
            if (client.available()) {
                char c = client.read();
                request += c;
                if (c == '\\n') break; // End of request
            }
        }

        // Send HTTP Response
        client.println("HTTP/1.1 200 OK");
        client.println("Content-type:text/html");
        client.println("Connection: close");
        client.println();
        client.println("<!DOCTYPE html>");
        client.println("<html><head>");
        client.println("<title>ESP32 Web Server</title>");
        client.println("<meta name='viewport' content='width=device-width, initial-scale=1'>");
        client.println("<style>");
        client.println("body { font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 20px; background-color: #f4f4f4; }");
        client.println("h1 { color: #333; font-size: 24px; padding: 20px; background: #007BFF; color: white; border-radius: 5px; }");
        client.println("</style>");
        client.println("</head>");
        client.println("<body>");
        client.println("<h1>Hello, World!</h1>");
        client.println("</body></html>");
        client.println();
        
        client.stop(); // Close connection
        Serial.println("Client Disconnected");
    }
}
`