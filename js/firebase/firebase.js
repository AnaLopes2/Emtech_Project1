// firebase.js

// Import the functions you need from the SDKs you need
import { onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };

// Referência para os dados do PLC (ajuste conforme necessário)
const plcRef = ref(database, "dadosPLC");

// Escutar mudanças no banco de dados
onValue(plcRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    atualizarTabela(data);
  }
});

// Função para atualizar os valores na tabela
function updateGrid(data) {
  Object.keys(data).forEach((setterId) => {
    // Para o setter-1 (ou qualquer outro), atualizar os elementos com as informações do setter
    document.getElementById(`status-${setterId}`).textContent =
      data[setterId].status;
    document.getElementById(`setpoint-${setterId}`).textContent =
      data[setterId].setpoint;
    document.getElementById(`temp-${setterId}-1`).textContent =
      data[setterId].temp1;
    document.getElementById(`temp-${setterId}-2`).textContent =
      data[setterId].temp2;
    document.getElementById(`humidity-${setterId}`).textContent =
      data[setterId].humidity;
    document.getElementById(
      `co2-${setterId}`
    ).textContent = `${data[setterId].co2}%`;
    document.getElementById(
      `fanSpeed-${setterId}`
    ).textContent = `${data[setterId].fanSpeed}%`;
    document.getElementById(
      `damper-${setterId}`
    ).textContent = `${data[setterId].damper}%`;
  });
}
