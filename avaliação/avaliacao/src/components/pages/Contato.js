import ItemFormulario from "./ItemFormulario"

function Contato() {
    return(
        <div>
           <ItemFormulario nome="luiz" tipo="text" ph="Nome: "/>
           <ItemFormulario nome="lcpylesneto@gmail.com" tipo="email" ph="Email: "/>
           <ItemFormulario nome="recursos" tipo="text" ph="Assunto: "/>
           <ItemFormulario nome="recursos" tipo="textarea" ph="Deixe sua mensagem: "/>
        </div>
    )
}

export default Contato