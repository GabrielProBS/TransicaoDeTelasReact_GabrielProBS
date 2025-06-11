# Guia de Uso: AsyncStorage, Stack Overflow e Instalação

## 📌 Introdução

Este README fornece uma visão geral sobre como utilizar o **AsyncStorage** no React Native, como buscar ajuda no **Stack Overflow** e como instalar o AsyncStorage corretamente.

---

## 📂 O que é AsyncStorage?

**AsyncStorage** é uma API assíncrona do React Native que permite armazenar dados de forma persistente no dispositivo do usuário. Ele funciona como um banco de dados simples baseado em chave-valor.

### 🔹 Características do AsyncStorage:
- Armazena dados persistentes no dispositivo
- Funciona de forma assíncrona
- Ideal para salvar pequenas configurações ou dados temporários

### 📜 Exemplo de uso:

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar um dado
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Dados salvos!");
  } catch (error) {
    console.error("Erro ao salvar:", error);
  }
};

// Função para recuperar um dado
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? value : "Nenhum dado encontrado";
  } catch (error) {
    console.error("Erro ao recuperar:", error);
  }
};
