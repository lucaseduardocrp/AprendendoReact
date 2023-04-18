export default function Card({title, imageUrl}) {
    return(
    <div className="grid">
        <img src={imageUrl} />
        <div>
            <h2>{title}</h2>

             <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo.</p>
            <button>Comprar Agora</button>
        </div>
    </div>
    )
 }