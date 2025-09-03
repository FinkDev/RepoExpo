import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    setResultado(`IMC: ${imcFormatado} - ${classificacao}`);
  };

  return (
    <View style={styles.app}>
      <View>
        <Text style={styles.texto}>NU</Text>
        <Text style={styles.texto2}>Calculadora</Text>
      </View>

      <View style={{ alignItems: 'center', }}>
        <Text style={styles.texto3}>Calcule o seu IMC:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="Digite a altura (m)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        {resultado !== "" && (
          <Text style={styles.resultado}>{resultado}</Text>
        )}
      </View>

      <View>
        <Pressable
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.9 }]}
          onPress={calcularIMC}
        >
          <Text style={styles.btnTexto}>Calcular</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8830c5',
    paddingVertical: 50,
  },
  texto: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 90,
  },
  texto2: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  texto3: {
    marginBottom: 5,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: 220,
    height: 50,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#fff',
    padding: 15,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 100,
    marginTop: 30,
  },
  btnTexto: {
    fontSize: 20,
    color: '#8830c5',
    fontWeight: 'bold',
  },
  lastInput: {
    marginBottom: 20,
  },
  resultado: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20,
  },
});
