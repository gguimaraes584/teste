import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";

export default function Feminino(){
  return(
    <Container>
        <Cabecalho/>
        <div class="titulo-pagina">PRODUTOS FEMININOS</div>

      <div class="classificar-container">
        <div class="classificar">

        <select id="classificar">
          <option value="class1">Classificar por</option>
          <option value="class1">Mais relevantes</option>
          <option value="class2">Menor preço</option>
          <option value="class3">Maior preço</option>
        </select>
    </div>

        <div class="classificar2">

          <select id="classificar">
              <option value="class1">Gênero</option>
              <option value="class1">Feminino</option>
              <option value="class2">Masculino</option>
              <option value="class3">Lançamento</option>
              <option value="class4">Infantil</option>
          </select>
        </div>
      </div>

    <div class="container-produto">
      
      <div class="box">
        <div class="prod"> <img src="https://s3-alpha-sig.figma.com/img/05bb/0205/27e14aba60462c93253b0cf5b379c4d7?Expires=1633910400&Signature=CjKGFZkvK0iEnSDgceRcZoKf83HmrTgBs28MeHeg92ubwIpBbI7HxK8dRnn4eOOPj577cqhDQrn1sc7f16imIYTPj1naoWUWSIg7uxPDnVF0ixBR9Xhk2HHApT-BvH~iG-~aBMB0RbpekSiSOyAV9jJNumHOw3BPoCwkOVeT8BCHgD62Qtz6iumZGJKobP~ADFFn3ANeBQQ8DLvMdgK5hPucgn~06RIzZBe-BfPh~3Ra2EGSMVTroXKPuUExpgUP9j78I6pTreyGFH1DW8rtDKzyfH1DLGBJ869q18X1kv4ouHmVZkZtKWi~rFYfyR~0Y~KMlLwyAB6hizLrjb4dBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/> </div>
        <div class="nome-produto">CAMISA SÃO PAULO PRÉ-JOGO 21/22 ADIDAS FEMININA – VERMELHO + BRANCO </div>
        <div class="valor">R$ 269.99</div>
        <div class="parcelamento">ou 6x de R$ 45,00</div>
        <div class="adc-carrinho"> <button> Adicionar ao carrinho </button> </div>
      </div> 
      <div class="box">
        <div class="prod"> <img src="https://s3-alpha-sig.figma.com/img/0cc9/1a2c/12a68834c6eae9a3e6ca1a4c31788c9d?Expires=1633910400&Signature=SSZDrKNLiyzdE~XMGrewbknsgZ6RximfAwaRNDEh8JpiAUT~Rx8lnslg9KzvHnTOXYV9kCzWyrMTdvAACCLhfIX5Z8iWvdRFd2vasVjCLC8a5Kw7SfNOMozJuR3Zf1Ek2Q3icJxKOh2zXB7RgI0RPdP8TL3VlhfABwa~6T24n8eaBG7l3yUlOSMwIka9SBZXAXDsES82SoBeoVdBndBuPjjpGJsQchuPp1c-SUquEc9vgOQKZs9iivVPzHTH-N5ltcd6BwuWXAChj5DFmAIIOIkAlkGVSjstzj5BDw49gAAlgrQZkjLk4QZylqsh4y5OjTuGqiFhqmZQsIHq22NeFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/> </div>
        <div class="nome-produto">CAMISA MANCHESTER CITY I TORCEDORA FEMININA</div>
        <div class="valor">R$169,90</div>
        <div class="parcelamento">até 5x de R$ 33,98</div>
        <div class="adc-carrinho"> <button> Adicionar ao carrinho </button> </div>
      </div> 
      <div class="box">
        <div class="prod"> <img src="https://s3-alpha-sig.figma.com/img/f4c2/c879/ff34974df218e11e2b419de72e901a2e?Expires=1633910400&Signature=AqDBL56x9XzRcZ2ZHcCR8xSr97a5vHskYT65e88UeCVh0qbjOfpzJhimuvrbKYMdUGF1SxuIaeBUD6PJUvkzpgvKlxEv2~cn3NkYp2~TYi19Sm38clEJGm-pKrbMT7HpH4KiC028vMwGZi4rkEBJMzMkaqAYgTmOHrNZUpYZhWhAjrHxjqwJxDYRH4mdlp3YXv8xORup7qRsDOqiAo-xVpAZ1SmeYL5Q40niuw5BvO6CCIsVolFbq4CA~xL3QDPUS2WeXl8DC05aBt3onV0~O-rIuF7lOq~jb4KjmL6mv4U1ZabJxR7ZoDVXaKlLI3sHm6TnmN2EbwWSRTkSm5YG-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/> </div>
        <div class="nome-produto">AGASALHO CORINTHIANS TRILOBAL FEMININO - PRETO</div>
        <div class="valor">R$ 259,90</div>
        <div class="parcelamento">até 6x de R$ 43,32</div>
        <div class="adc-carrinho"> <button> Adicionar ao carrinho </button> </div>
      </div> 
    </div>
    </Container>
  )

}