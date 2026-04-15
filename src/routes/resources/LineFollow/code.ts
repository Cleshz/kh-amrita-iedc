export let code = `
// IR Sensors
#define IR_SENSOR_RIGHT 4
#define IR_SENSOR_LEFT  3

#define MOTOR_SPEED 150  // PWM range is 0-255

// Right motor (L298N)
#define enableRightMotor 6
#define rightMotorPin1   7
#define rightMotorPin2   8

// Left motor (L298N)
#define enableLeftMotor  20
#define leftMotorPin1    10
#define leftMotorPin2    9

// LEDC PWM config
#define PWM_FREQ     20000  // 20 kHz, above audible range
#define PWM_RESOLUTION   8  // 8-bit → 0–255

#define RIGHT_PWM_CHANNEL 0
#define LEFT_PWM_CHANNEL  1

void setup() {
  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
  pinMode(leftMotorPin1,  OUTPUT);
  pinMode(leftMotorPin2,  OUTPUT);

  pinMode(IR_SENSOR_RIGHT, INPUT);
  pinMode(IR_SENSOR_LEFT,  INPUT);

  // ESP32 uses LEDC for PWM (no analogWrite on ESP32-C3)
  ledcAttach(enableRightMotor, PWM_FREQ, PWM_RESOLUTION);
  ledcAttach(enableLeftMotor,  PWM_FREQ, PWM_RESOLUTION);

  rotateMotor(0, 0);
}

void loop() {
  int rightIR = digitalRead(IR_SENSOR_RIGHT);
  int leftIR  = digitalRead(IR_SENSOR_LEFT);

  if (rightIR == LOW && leftIR == LOW) {
    rotateMotor(MOTOR_SPEED, MOTOR_SPEED);   // Go straight
  } else if (rightIR == HIGH && leftIR == LOW) {
    rotateMotor(-MOTOR_SPEED, MOTOR_SPEED);  // Turn right
  } else if (rightIR == LOW && leftIR == HIGH) {
    rotateMotor(MOTOR_SPEED, -MOTOR_SPEED);  // Turn left
  } else {
    rotateMotor(0, 0);                       // Stop
  }
}

void rotateMotor(int rightSpeed, int leftSpeed) {
  // Right motor direction
  if (rightSpeed < 0) {
    digitalWrite(rightMotorPin1, LOW);
    digitalWrite(rightMotorPin2, HIGH);
  } else if (rightSpeed > 0) {
    digitalWrite(rightMotorPin1, HIGH);
    digitalWrite(rightMotorPin2, LOW);
  } else {
    digitalWrite(rightMotorPin1, LOW);
    digitalWrite(rightMotorPin2, LOW);
  }

  // Left motor direction
  if (leftSpeed < 0) {
    digitalWrite(leftMotorPin1, LOW);
    digitalWrite(leftMotorPin2, HIGH);
  } else if (leftSpeed > 0) {
    digitalWrite(leftMotorPin1, HIGH);
    digitalWrite(leftMotorPin2, LOW);
  } else {
    digitalWrite(leftMotorPin1, LOW);
    digitalWrite(leftMotorPin2, LOW);
  }

  ledcWrite(enableRightMotor, abs(rightSpeed));
  ledcWrite(enableLeftMotor,  abs(leftSpeed));
}
`;
