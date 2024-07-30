async function fetchData(url: string, method = "GET", data = {}) {
  // CON LA ASIGNACION LE DEFINO EL VALOR POR DEFECTO QUE TOMARÁ EL PARAMETRO CUANDO NO ME ENVIEN NADA AL INVOCAR LA FUNCIÓN
  const response = await fetch(`http:localhost:8080/${url}`, {
    method: method, // SE PUEDE SIMPLIFICAR DEJANDO SOLO METHOD Y COMO VALOR LE COLOCARÁ LA VARIABLE CON ESE MISMO NOMBRE
    body: JSON.stringify(data),
    headers: {
        "content-type":"application/json"
    }
  });

  console.log(response.status);

  return await response.json();
}

async function main() {
  const data = await fetchData(
    "api/movies/fa0be0d2-c8bf-4d92-96c6-45b5f6d477c3",
    "PATCH",
    { name: "Nombre modificado" }
  );
  console.log(data);
}

main();
