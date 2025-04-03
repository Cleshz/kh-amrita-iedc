export let code = `
const int mq3DO = 13; // MQ-3 digital output connected to ESP32 pin D13
const int buzzerPin = 12; // Buzzer connected to ESP32 pin D12

void setup() {
  // Initialize the digital pin as an input for MQ-3 DO
  pinMode(mq3DO, INPUT);
  // Initialize the digital pin as an output for the buzzer
  pinMode(buzzerPin, OUTPUT);
  // Ensure the buzzer is off initially
  digitalWrite(buzzerPin, LOW);
}

void loop() {
  // Read the digital output from the MQ-3 sensor
  int alcoholDetected = digitalRead(mq3DO);
  // If alcohol is detected, turn on the buzzer
  if (alcoholDetected == HIGH) {
    digitalWrite(buzzerPin, HIGH);
  } else {
    // Otherwise, turn off the buzzer
    digitalWrite(buzzerPin, LOW);
  }
  // Small delay to avoid rapid toggling
  delay(100);
}
`;
