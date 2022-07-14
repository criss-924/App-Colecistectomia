const qData = [
    {
        question: "Dos Esctructuras",
        a: "Dos estructuras pueden visualizarse inmediatamente demostrando de manera clara que están conectadas a la vesícula biliar.",
        b: "Se visualizan dos estructuras conectadas a la vesícula biliar pero hay transposición de imágenes entre el conducto y la arteria o hay detalles técnicos de la fotografía, como mala iluminación, poco contraste de color, que interfiere con determinar de manera clara. La fotografía requiere estudio para poder evaluar de manera correcta.",
        c: "Debido a transposición o por detalles técnicos, no se visualizan 2 estructuras separadas.",
    },
    {
        question: "Lecho cístico",
        a: "El lecho es identificado y visualizado de manera inmediata en su primer tercio.",
        b: "El lecho se visualiza, pero se sobrepone por otras estructuras, por lo que no se expone de una manera suficiente. No se muestra suficiente superficie del lecho. La fotografía requiere estudio para poder evaluar de manera correcta.",
        c: "El lecho no es identificado debido a mal posicionamiento, luz, obstrucción por los instrumentos o tapado por coágulo.",
    },
    {
        question: "Disección del triángulo hepatocístico",
        a: "El triángulo hepatocístico está libre de tejido que permite una correcta visualización de las estructuras císticas y del lecho sin impedimentos. También el evaluador puede distinguir que no hay estructuras adicionales dentro del triángulo.",
        b: "No se visualiza de manera completa el triángulo debido a detalles técnicos que reducen la habilidad de una óptima evaluación. La fotografía requiere estudio para poder evaluar de manera correcta.",
        c: "Tejido dentro del triángulo impide la visión de las estructuras císticas y del lecho cístico. No permite una conclusión para excluir la posibilidad de que no hay más estructuras dentro del triángulo. O hay detalles técnicos que previenen la determinación correcta de que el triángulo este completamente disecado y liberado.",
    }
    
]

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const submitBtn = document.getElementById("nextBtn")
const answers = document.getElementsByClassName("answer");

var puntos = 0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = qData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // en este bucle for, buscamos el radio button que este marcado y sumamos a puntos el valor que tenga asignado dicho boton en la propiedad value.
    if(currentQuiz < qData.length){
        for(let i = 0; i< answers.length; i++){
            if(answers[i].checked){
                puntos = puntos + Number(answers[i].value) ;
            }
       }
    }
    currentQuiz++; {
        if (currentQuiz < qData.length) {
            loadQuiz();
     } else {
        document.getElementById("result").innerText = puntos;
     }
 };
  });



