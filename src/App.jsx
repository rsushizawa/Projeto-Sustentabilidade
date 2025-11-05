import TitlePanel from './components/TitlePanel'
import Panel from './components/Panel'
import Graph from './components/Graph'
import graphData from './assets/graphs.json'
import Box from './components/Box'
import InfoBox from './components/InfoBox'
import ThreeColumn from './components/ThreeColumn'

function App() {

  return (
    <>
      {/* Página Inicial */}
      <TitlePanel></TitlePanel>

      {/* Página 1 - O que é? */}
      <Panel 
        Start="#FFFFFF"
        End="#FFFFFF"
        height='auto'
        Title={"O que é?"} 
        Text={
          <div class="font-Text text-xl">
            <p class="p-8">TI Verde (Green IT) é a prática de aplicar a sustentabilidade a tecnologia.</p>
            <p class="p-8">Envolve projetar, fabricar, usar e descartar computadores e servidores de forma a minimizar o impacto ambiental, otimizar o consumo de energia e reduzir o desperdicio.</p>
          </div>
        }
      >
      </Panel>
      <Panel
        Start="#FFFFFF"
        End="#FFFFFF"
        height='auto'
        Title={"Por Que as Empresas Adotam a Ti Verde?"}
        Text={
          <p class="p-8 max-w-2xl font-Text text-xl">
            Empresas e governos adotam o Green IT por três motivos principais:<br/>
            <ul class="list-disc pl-6 mt-4">
              <li><b>Responsabilidade Ambiental:</b> Reduzir a pegada de carbono e o impacto nos recursos naturais.</li>
              <li><b>Eficiência Econômica:</b> A economia de energia e a otimização de recursos geram uma redução de custos significativa.</li>
              <li><b>Competitividade:</b> A sustentabilidade melhora a imagem da marca e atende às novas exigências de consumidores e investidores.</li>
            </ul>
          </p>
        }
        Graph={<Graph data={graphData.page1_porQueAdotam.data} layout={graphData.page1_porQueAdotam.layout}></Graph>}
      >
      </Panel>
      
      {/* Página 1 - Pilares */}
      <Panel
        Start="#FFFFFF"
        End="#FFFFFF"
        height='auto'
        Title={"Pilares do Green IT"}
      >
        <div className='m-9 flex flex-wrap justify-center'>
          <Box text={<h1 className="text-white text-4xl text-center font-Title" >Energia</h1>}></Box>
          <Box text={<h1 className="text-white text-4xl text-center font-Title" >Resíduos (E-Waste)</h1>}></Box>
          <Box text={<h1 className="text-white text-4xl text-center font-Title" >Computação em Nuvem</h1>}></Box>
          <Box text={<h1 className="text-white text-4xl text-center font-Title" >Consumo d'água</h1>}></Box>
        </div>
      </Panel>

      {/* Página 1 - Detalhe Pilares */}
      <Panel Start="#FFFFFF" End="#45a9d1" height='auto' Title={"Pilar: Energia"} 
        Text={
          <div class="p-8 max-w-2xl font-Text text-xl text-black">
            <p>Para as empresas conseguirem melhorar a eficiência energética nos centros de computação, devem ser integradas novas solüções como:</p>
            <ul class="list-disc pl-6 mt-4">
              <li>Virtualização de servidores</li>
              <li>Tecnologias de resfriamento</li>
              <li>Fontes renováveis de energia</li>
            </ul>
          </div>
        }
        Graph={<Graph data={graphData.page1_projecaoConsumoEnergia.data} layout={graphData.page1_projecaoConsumoEnergia.layout}></Graph>}
      />
      <Panel Start="#FFFFFF" End="#AEDEA7" height='auto' Title={"Pilar: Resíduos (E-Waste)"} 
        Text={
          <div class="p-8 max-w-2xl font-Text text-xl text-black">
            <p>O lixo eletrônico (e-waste) é um dos fluxos de resíduos que mais cresce no mundo. Ele contém tanto materiais valiosos (ouro, cobre) quanto substâncias tóxicas (chumbo, mercúrio).</p>
            <ul class="list-disc pl-6 mt-4">
              <li><b>Design Modular:</b> Criar produtos fáceis de reparar e atualizar.</li>
              <li><b>Logística Reversa:</b> Programas de devolução e reciclagem de equipamentos antigos.</li>
              <li><b>Descarte Correto:</b> Garantir que materiais tóxicos não contaminem o meio ambiente.</li>
            </ul>
          </div>
        }
        Graph={<Graph data={graphData.page1_composicaoLixo.data} layout={graphData.page1_composicaoLixo.layout}></Graph>}
      />
      <Panel Start="#FFFFFF" End="#a4c2f4" height='auto' Title={"Pilar: Computação em Nuvem"} 
        Text={
          <div class="p-8 max-w-2xl font-Text text-xl text-black">
            <p>Os grandes consumidores de recursos energéticos não são as grandes corporações, mas os pequenos e médios datacenters juntamente com as demais empresas corporativas.</p>
            <p class="mt-4">O relatório aponta que estes servidores não são utilizados de maneira eficiente o tempo todo, muitas vezes eles realizam tarefas que exigem poucos recursos. Logo, esses servidores gastam muita energia, mas são pouco exigidos.</p>
          </div>
        }
        Graph={<Graph data={graphData.page1_utilizacaoDatacenters.data} layout={graphData.page1_utilizacaoDatacenters.layout}></Graph>}
      />
      <Panel Start="#FFFFFF" End="#6fa8dc" height='auto' Title={"Pilar: Consumo d'água"} 
        Text={
          <div class="p-8 max-w-2xl font-Text text-xl text-black">
            <p>A tecnologia moderna consome grandes volumes de água, desde a fabricação de equipamentos até o resfriamento de data centers.</p>
            <p class="mt-4">Entender a distribuição dos gastos d'água na TI é essencial para direcionar esforços e implementar práticas de Computação Verde que reduzam o consumo e promovam o uso responsável desse recurso vital.</p>
          </div>
        }
        Graph={<Graph data={graphData.page1_gastosAguaTI.data} layout={graphData.page1_gastosAguaTI.layout}></Graph>}
      />

      {/* Página 2 - Energia Deep Dive */}
      <Panel Start="#FFFFFF" End="#45a9d1" height='auto' Title={"Energia"}>
        <div className="w-full flex flex-col items-center p-8 text-black">
          <p className="font-Text text-2xl max-w-3xl text-center mb-12">
            Com o avanço da tecnologia, cresce também o consumo de energia, tornando essencial a busca pela redução dos gastos energéticos para equilibrar o desenvolvimento, a economia e a preservação ambiental.
          </p>
          <div className="flex flex-wrap justify-center items-start gap-12 w-full">
            <Graph data={graphData.page1_projecaoConsumoEnergia.data} layout={graphData.page1_projecaoConsumoEnergia.layout} />
            <Graph data={graphData.page2_distribuicaoConsumoDC.data} layout={graphData.page2_distribuicaoConsumoDC.layout} />
            <Graph data={graphData.page2_impactoVirtualizacao.data} layout={graphData.page2_impactoVirtualizacao.layout} />
            <Graph data={graphData.page1_utilizacaoDatacenters.data} layout={graphData.page1_utilizacaoDatacenters.layout} />
          </div>
          <p className="font-Text text-xl max-w-4xl text-center my-12">
            O desafio: garantir a eficiência desses novos hyperscalers e, ao mesmo tempo, otimizar as milhões de pequenas e médias salas de servidores corporativas que, somadas, representam uma imensa (e muitas vezes ineficiente) demanda de energia.
          </p>
          <h2 className="font-Title text-5xl font-bold text-black mt-8 mb-4">O que deve ser feito</h2>
          <ThreeColumn columns={[
            { title: "Fabricantes", items: ["Obsolescência Programada", "Direito ao Reparo", "Hardware de baixo consumo"] },
            { title: "Empresas", items: ["Virtualização", "Enegia Sustentável em Data Centers"] },
            { title: "Consumidores", items: ["Preferência ao armazenamento em nuvem", "Dispositivos duráveis e de baixo consumo"] }
          ]} />
        </div>
      </Panel>

      {/* Página 3 - Água Deep Dive */}
      <Panel Start="#FFFFFF" End="#6fa8dc" height='auto' Title={"Consumo d'água"}>
        <div className="w-full flex flex-col items-center p-8 text-black">
          <p className="font-Text text-2xl max-w-3xl text-center mb-12">
            A Tecnologia da informação (TI) é essencial na sociedade moderna, mas seu uso crescente também gera impactos ambientais, tal como maior redução de água potável. A TI Verde busca minimizar esses impactos.
          </p>
          <h2 className="font-Title text-5xl font-bold text-black mt-8 mb-4">CONSUMO EM DADOS</h2>
          <div className="flex flex-wrap justify-center">
            <InfoBox title="Uso pela Microsoft" data="+6,4" unit="milhões de litros (com IAs)" color="text-red-500" />
            <InfoBox title="Uso individual de IAs" data="500ml" unit="a cada 20-50 interações" color="text-blue-500" />
            <InfoBox title="Interações ChatGPT" data="+1 Bilhão" unit="por dia" color="text-green-500" />
            <InfoBox title="Consumo Diário (Chat)" data="10-25" unit="milhões de litros de água" color="text-blue-700" />
          </div>
          <div className="flex flex-wrap justify-center items-start gap-12 w-full mt-12">
            <Graph data={graphData.page1_gastosAguaTI.data} layout={graphData.page1_gastosAguaTI.layout} />
            <Graph data={graphData.page3_consumoRelativoAgua.data} layout={graphData.page3_consumoRelativoAgua.layout} />
            <Graph data={graphData.page3_reusoAgua.data} layout={graphData.page3_reusoAgua.layout} />
            <Graph data={graphData.page3_eficienciaEnergeticaAgua.data} layout={graphData.page3_eficienciaEnergeticaAgua.layout} />
          </div>
        </div>
      </Panel>

      {/* Página 4 - E-Waste Deep Dive */}
      <Panel Start="#FFFFFF" End="#AEDEA7" height='auto' Title={"Redução de Lixo Eletrônico"}>
        <div className="w-full flex flex-col items-center p-8 text-black">
          <p className="font-Text text-2xl max-w-3xl text-center mb-12">
            Para colocar em perspectiva, o lixo eletrônico mundial poderia encher mais de 1,5 milhão de caminhões de 40 toneladas, os quais, se alinhados... dariam a volta ao redor da linha do equador.
          </p>
          <div className="flex flex-wrap justify-center items-start gap-12 w-full">
            <Graph data={graphData.page4_aumentoLixoEletronico.data} layout={graphData.page4_aumentoLixoEletronico.layout} />
            <Graph data={graphData.page4_vidaUtilComputadores.data} layout={graphData.page4_vidaUtilComputadores.layout} />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 w-full mt-8">
            <div className="max-w-md">
              <h3 className="font-Title text-3xl font-bold text-black mb-4">Obsolescência Programada</h3>
              <InfoBox data="1 trilhão" unit="de dólares desperdiçados" color="text-red-600" />
              <InfoBox data="80%" unit="dos produtos descartados prematuramente" color="text-red-600" />
              <InfoBox data="25%" unit="do lixo eletrônico no Brasil" color="text-red-600" />
            </div>
            <Graph data={graphData.page4_vidaUtilRealIdeal.data} layout={graphData.page4_vidaUtilRealIdeal.layout} />
          </div>
          <h2 className="font-Title text-5xl font-bold text-black mt-16 mb-4">A Responsabilidade da Indústria</h2>
          <ThreeColumn columns={[
            { title: "Durabilidade", items: ["Abandonar a obsolescência programada", "Projetar produtos para durar"] },
            { title: "Direito ao Reparo", items: ["Projetar produtos fáceis de consertar"] },
            { title: "Logística Reversa", items: ["Responsabilidade pelo ciclo de vida completo"] },
            { title: "Suporte Prolongado", items: ["Estender atualizações de sistema e segurança"] }
          ]} />
        </div>
      </Panel>

      {/* Página 5 - Consumo Consciente */}
      <Panel Start="#FFFFFF" End="#1f2a68" height='auto' Title={"Consumo Consciente"}>
        <div className="w-full flex flex-col items-center p-8 text-white">
          <p className="font-Text text-2xl max-w-3xl text-center mb-12">
            O mundo virtual consome grandes quantidades de energia e recursos naturais. Cada video assistido, arquivo armazenado ou pesquisa realizada utiliza servidores que demandam eletricidade.
          </p>
          <div className="flex flex-wrap justify-center items-start gap-12 w-full">
            <Graph data={graphData.page5_energiaEcosistemaDigital.data} layout={{...graphData.page5_energiaEcosistemaDigital.layout, titlefont: {color: 'white'}, yaxis: {title: "Consumo (TWh/ano)", color: 'white'}, xaxis: {color: 'white'}, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)"}} />
            <Graph data={graphData.page5_dadosArmazenados.data} layout={{...graphData.page5_dadosArmazenados.layout, titlefont: {color: 'white'}, legend: {font: {color: 'white'}}, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)"}} />
          </div>
          <div className="flex flex-wrap justify-center items-start gap-12 w-full mt-12">
            <div className="max-w-xl">
              <h3 className="font-Title text-3xl font-bold mb-4">Principais Desafios</h3>
              <ul className="list-disc pl-6 font-Text text-lg">
                <li>Grande parte das pessoas desconhece o impacto ambiental das atividades online.</li>
                <li>Cada 1 GB armazenado consome até 0,0046 kWh, gera 28-63 g de CO₂, e usa até 35 L de água.</li>
                <li>O avanço rápido da tecnologia aumenta o lixo eletrônico.</li>
              </ul>
              <InfoBox title="Impacto de 1GB" data="28-63g CO₂" unit="0,0046 kWh | até 35L Água" color="text-red-500" />
            </div>
             <div className="max-w-xl">
              <h3 className="font-Title text-3xl font-bold mb-4">Benefícios Sociais</h3>
              <ul className="list-disc pl-6 font-Text text-lg">
                <li>Reduz o consumo de energia, poluição e lixo eletrônico.</li>
                <li>Impulsiona a economia circular e gera empregos verdes.</li>
                <li>Promove educação digital sustentável.</li>
              </ul>
              <InfoBox title="Ganhos Reais" data="5,26 Mt/ano" unit="CO₂ evitado" color="text-green-500" />
              <InfoBox data="41.65 GL/ano" unit="Água economizada" color="text-blue-500" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 w-full mt-12">
            <p className="font-Text text-xl max-w-xl">
              <b>O papel das empresas:</b> As empresas são essenciais. Medidas como usar energia renovável, otimizar data centers e eliminar dados desnecessários podem reduzir as emissões em até 95% e o lixo eletrônico em 80%.
            </p>
            <Graph data={graphData.page5_usoEnergiasRenovaveis.data} layout={{...graphData.page5_usoEnergiasRenovaveis.layout, titlefont: {color: 'white'}, legend: {font: {color: 'white'}}, yaxis: {title: "%", color: 'white', range: [0, 100]}, xaxis: {color: 'white'}, paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)"}} />
          </div>
        </div>
      </Panel>
    </>
  )
}

export default App