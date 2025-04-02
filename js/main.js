// Função para salvar os dados com os novos campos (heat/cool, turning)
function salvarDados(
  temperatura,
  humidade,
  co2,
  alarme,
  estagio,
  fanSpeed,
  heatCool,
  turning
) {
  const referencia = ref(database, "leituras/");
  const novaLeitura = push(referencia);

  set(novaLeitura, {
    temperatura: temperatura,
    humidade: humidade,
    co2: co2, // Será armazenado como um número
    alarme: alarme,
    estagio: estagio,
    fanSpeed: fanSpeed, // Será armazenado como um número
    heatCool: heatCool,
    turning: turning,
    timestamp: new Date().toISOString(),
  })
    .then(() => {
      console.log("✅ Dados salvos com sucesso!");
    })
    .catch((error) => {
      console.error("⚠️ Erro ao salvar dados: ", error);
    });
}

// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Função para exibir os dados no site
function mostrarDados(isCelsius = true) {
  const referencia = ref(database, "leituras/");
  get(referencia)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const leituras = snapshot.val(); // Aqui estão todas as leituras
        console.log("🔍 Leituras recuperadas:", leituras);

        // Iterando sobre as leituras para exibir as informações
        for (const id in leituras) {
          const leitura = leituras[id];

          // Exibindo os dados no console
          let temperaturaExibida = isCelsius
            ? leitura.temperatura
            : celsiusParaFahrenheit(leitura.temperatura);
          let temperaturaUnidade = isCelsius ? "°C" : "°F";

          // Formatando CO2 e Fan Speed como porcentagem
          let co2Porcentagem = `${leitura.co2}%`;
          let fanSpeedPorcentagem = `${leitura.fanSpeed}%`;

          console.log(`Leitura ${id}:`);
          console.log(
            `Temperatura: ${temperaturaExibida}${temperaturaUnidade}`
          );
          console.log(`Humidade: ${leitura.humidade}%`);
          console.log(`CO2: ${co2Porcentagem}`);
          console.log(`Alarme: ${leitura.alarme}`);
          console.log(`Estágio: ${leitura.estagio}`);
          console.log(`FanSpeed: ${fanSpeedPorcentagem}`);
          console.log(`Heat/Cool: ${leitura.heatCool}`);
          console.log(`Turning: ${leitura.turning}`);
          console.log(`Timestamp: ${leitura.timestamp}`);
        }
      } else {
        console.log("⚠️ Nenhuma leitura encontrada.");
      }
    })
    .catch((error) => {
      console.error("⚠️ Erro ao recuperar dados: ", error);
    });
}

// Exemplo de uso (Mostra em Celsius por padrão)
salvarDados(25.4, 60, 50, "Alarme Ligado", "Estágio 2", 80, "Heat", "Turning");
mostrarDados(true);
