import TitlePanel from './components/TitlePanel'
import Panel from './components/Panel'
import Graph from './components/Graph'
import graphData from './assets/graphs.json'
import Box from './components/Box'

function App() {

  return (
    <>
      <TitlePanel></TitlePanel>
      <Panel 
        Start="#FFFFFF"
        End="#FFFFFF"
        height='20vh'
        Title={"O que é?"} 
        Text={<p class="p-8 max-w-2xl">Empresas e governos adotam o Green IT por três motivos principais:<br/>  Responsabilidade Ambiental: Reduzir a pegada de carbono e o impacto nos recursos naturais.<br/>Eficiência Econômica: A economia de energia e a otimização de recursos geram uma redução de custos significativa.<br/>Competitividade: A sustentabilidade melhora a imagem da marca e atende às novas exigências de consumidores e investidores.</p>}
        Graph={<Graph data={graphData.page1.graph1.data} layout={graphData.page1.graph1.layout}></Graph>}>
      </Panel>
      <Panel
        Start="#FFFFFF"
        End="#FFFFFF"
        height='20vh'
        Title={"Pilares do Green IT"}
      >
        <div className='m-9 flex justify-center'>
          <Box text={<h1 className="text-white text-4xl text-center" >Energia</h1>}></Box>
          <Box text={<h1 className="text-white text-4xl text-center" >Resíduos (E-Waste)</h1>}></Box>
          <Box text={<h1 className="text-white text-4xl text-center" >Computação em Nuvem</h1>}></Box>
          <Box text={<h1 className="text-white text-4xl text-center" >Consumo d'água</h1>}></Box>
        </div>
        
      </Panel>
      <Panel
        Start="#FFFFFF"
        End="#45a9d1"
        height='20vh'
        Title={"Energia"} 
        Text={
          <div>
            <p class="p-8 max-w-2xl">Empresas e governos adotam o Green IT por três motivos principais:</p>
            <ul class="p-8 max-w-2xl">
              <li>Responsabilidade Ambiental: Reduzir a pegada de carbono e o impacto nos recursos naturais</li>
              <li>Eficiência Econômica: A economia de energia e a otimização de recursos geram uma redução de custos significativa.</li>
              <li>Competitividade: A sustentabilidade melhora a imagem da marca e atende às novas exigências de consumidores e investidores.</li>
            </ul>
          </div>
        }
        Graph={<Graph data={graphData.page1.graph2.data} layout={graphData.page1.graph2.layout}></Graph>}
      >
      </Panel>
      <Panel
        Start="#FFFFFF"
        End="#AEDEA7"
        height='20vh'
        Title={"Resíduos"} 
        Text={
          <div>
            <p class="p-8 max-w-2xl">O lixo eletrônico (e-waste) é um dos fluxos de resíduos que mais cresce no mundo. Ele contém tanto materiais valiosos (ouro, cobre) quanto substâncias tóxicas (chumbo, mercúrio).</p>
            <ul class="p-8 max-w-2xl">
              <li>Design Modular: Criar produtos fáceis de reparar e atualizar.</li>
              <li>Logística Reversa: Programas de devolução e reciclagem de equipamentos antigos.</li>
              <li>Descarte Correto: Garantir que materiais tóxicos não contaminem o meio ambiente.</li>
            </ul>
          </div>
        }
        Graph={<Graph data={graphData.page1.graph1.data} layout={graphData.page1.graph1.layout}></Graph>}
      >
      </Panel>
    </>
  )
}

export default App
