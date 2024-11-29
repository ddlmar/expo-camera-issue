# How to Run the Project

1. Clone the project using HTTPS: `git clone https://github.com/ddlmar/expo-camera-issue.git`
2. Install the dependencies using `yarn install`, `npm install`, or `pnpm install`.
3. Run the project on a physical device using the following command:  
   `npx expo run:android --device` or `npx expo run:ios --device`.
4. On the app's home screen, allow camera access and scan a barcode with 44 or more digits.

## Code for Testing

![image](https://github.com/user-attachments/assets/468382ec-2900-4741-ae98-a36ae6092c02)

- When scanning the code, it should return the following result: `26091057275555777876286700000002899150000000600`, but it often returns different codes. In some cases, the code is returned with shuffled characters.
