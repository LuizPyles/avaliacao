import foto from "../img/livros.jpg" 

function Home() {
    return (
        <div>
            <h1>Bem vindo a LuizServiços!</h1>
            <img src={foto} alt="Livros" />
            <p>Aqui você terá acesso a informações referentes a áreas na qual eu presto serviço assim como também poderá entar em contato comigo.</p>
        </div>
    )
}

export default Home