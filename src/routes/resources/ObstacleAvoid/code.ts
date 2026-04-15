export let code = `
#include <ESP32Servo.h>

// Ultrasonic sensor
#define TRIG_PIN  4
#define ECHO_PIN  5

// Servo
#define SERVO_PIN 3

// Right motor
#define enableRightMotor 6
#define rightMotorPin1   7
#define rightMotorPin2   8

// Left motor
#define enableLeftMotor  20
#define leftMotorPin1    10
#define leftMotorPin2    9

#define MOTOR_SPEED      150
#define TURN_SPEED       120
#define SAFE_DISTANCE    20   // cm
#define TURN_DELAY       400  // ms

#define PWM_FREQ         20000
#define PWM_RESOLUTION   8

Servo scanner;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
  pinMode(leftMotorPin1,  OUTPUT);
  pinMode(leftMotorPin2,  OUTPUT);

  ledcAttach(enableRightMotor, PWM_FREQ, PWM_RESOLUTION);
  ledcAttach(enableLeftMotor,  PWM_FREQ, PWM_RESOLUTION);

  scanner.attach(SERVO_PIN);
  scanner.write(90);  // Center the servo (facing forward)
  delay(500);

  rotateMotor(0, 0);
}

void loop() {
  long frontDist = getDistance();

  if (frontDist > SAFE_DISTANCE) {
    rotateMotor(MOTOR_SPEED, MOTOR_SPEED);  // Go straight
  } else {
    // Obstacle detected — stop and scan
    rotateMotor(0, 0);
    delay(200);

    // Scan left and right
    int leftDist  = scanAt(150);
    int rightDist = scanAt(30);

    // Return servo to center
    scanner.write(90);
    delay(300);

    if (leftDist > rightDist) {
      // More space on left — turn left
      rotateMotor(-TURN_SPEED, TURN_SPEED);
      delay(TURN_DELAY);
    } else if (rightDist > leftDist) {
      // More space on right — turn right
      rotateMotor(TURN_SPEED, -TURN_SPEED);
      delay(TURN_DELAY);
    } else {
      // Equal on both sides — reverse and turn right
      rotateMotor(-MOTOR_SPEED, -MOTOR_SPEED);
      delay(300);
      rotateMotor(TURN_SPEED, -TURN_SPEED);
      delay(TURN_DELAY);
    }
  }
}

int scanAt(int angle) {
  scanner.write(angle);
  delay(400);  // Wait for servo to reach position
  return getDistance();
}

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000);  // 30ms timeout (~5m max)
  if (duration == 0) return 999;  // No echo = open space, return large value

  return duration * 0.034 / 2;
}

void rotateMotor(int rightSpeed, int leftSpeed) {
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
