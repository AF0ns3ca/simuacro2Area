/**
 * @author Alvaro Fonseca Hernandez
 * @GitHub
 */

const calcula = () => {
  const area = document.getElementById("area");
  const perimetro = document.getElementById("perimetro");
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  if (isNaN(base) || isNaN(altura)) {
    alert("Introduce los dos valores correctamente");
  } else {
    let resultA = base * altura;
    let resultP = 2 * (base + altura);
    area.innerText = "Area del rectangulo: " + resultA;
    perimetro.innerText = "Perimetro del rectangulo: " + resultP;
  }
};
