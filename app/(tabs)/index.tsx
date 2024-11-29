import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function TabOneScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const [scannedCode, setScannedCode] = useState("");

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={[StyleSheet.absoluteFillObject, { flex: 1 }]}
        barcodeScannerSettings={{
          barcodeTypes: ["itf14"],
        }}
        onBarcodeScanned={
          scannedCode ? undefined : ({ data }) => setScannedCode(data)
        }
      >
        <Text
          style={{
            textAlign: "center",
            padding: 10,
          }}
        >
          {scannedCode}
        </Text>

        <Button
          disabled={!scannedCode}
          title="Scan again"
          onPress={() => setScannedCode("")}
        />
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
