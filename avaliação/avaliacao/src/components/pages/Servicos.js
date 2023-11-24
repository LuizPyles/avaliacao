import ItemServico from "./ItemServico"
import prog from "../img/dev.jpg" 
import prof from "../img/aula.jpg" 
import ator from "../img/ator.jpg" 



function Servicos() {
    return(
        <div>
            <ItemServico nome="Tutoria" img={prof} descricao="Tutoria de todas as matérias escolares até 9º ano"/>
            <ItemServico nome="Atuação" img={prog} descricao="Ator de pquenos espetáculos e contações de história"/>
            <ItemServico nome="Programador" img={ator} descricao="Programador Front-End de pequenos proojetos"/>
        </div>
    )
}

export default Servicos