import { Container } from "../produtos-femininos/styled";
import Cabecalho from "../../components/cabecalho";
import carrinho from "../carrinho";

export default function Masculinos() {
  return (
    <Container>
      <Cabecalho />
      <div class="titulo-pagina">PRODUTOS MASCULINOS</div>

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
          <div class="prod">
            <img src="/assets/images/camisa-sp.jpg" alt=''/>
          </div>
          <div class="nome-produto">CAMISA SÃO PAULO II 21/21 RIGONI Nº77</div>
          <div class="valor">R$ 314,99</div>
          <div class="parcelamento">ou 7x de R$ 45,00</div>
          <div class="adc-carrinho">
            <button onClick={carrinho}> Adicionar ao carrinho </button>
          </div>
        </div>
        <div class="box">
          <div class="prod">
            <img src="https://s3-alpha-sig.figma.com/img/0374/c49d/aa17c3b527e1d25a14a7df7a519a8b5b?Expires=1633910400&Signature=bQTa8KxTUpiRA1LgsskzYZCAxqiczJo-a1um-7vhcyhw2YLlDADvGBd5xgoRRjHL5R2KIx7Xw4R4YNMD4SEhCVh9UdOP4R5tYGF2LYvDBUYX31x5dT9G~9V6~ID5y0qnK42g4eYXW~SM93o8UXCbgqORaiyxYwH7u0SZaLwfxLI286bFgJeHpZ3loxrfGBv0MxiyjBqdBipRYJBGDFQEyIQZKYAM9dT-9KBSZflSrwy39GeqYaYpYN4I-vXP6erBuCSDB0zlAxU-pmA9tIQY~MSxXjgnVT0mS7GSXEW~oTRknfdMwMBFSjdzGjE7zCMMVA3peSh0WwTTDrywjqDWjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>
          </div>
          <div class="nome-produto">
            CAMISA POLO NIKE SPORTSWEAR LIVERPOOL MASCULINA
          </div>
          <div class="valor">R$ 299,99</div>
          <div class="parcelamento">ou até 7x de R$ 42,85</div>
          <div class="adc-carrinho">
            <button> Adicionar ao carrinho </button>
          </div>
        </div>
        <div class="box">
          <div class="prod">
            <img src="https://s3-alpha-sig.figma.com/img/80f7/b4fb/98c5b22d5dd92b32c396abd633f62e56?Expires=1633910400&Signature=LBFkWvZzU1EF~3KnbZvvzxdPM2xoDEFQKl1wJUAPHhDf77ymsBEXGP2Q1vI6X5ya2U98VKfdjfcAGPObNcQWQrynf47FdaiRDeY-xtI6iy4ZcsLhzZ-MfC7W~HxyX0wD912-8bp2Y5-byqt-3G3FnRhSxB1hRKfrgDTU2yQZkUlssKPyg0eEFW4PFsqZDYR0mZp9OgjdL1xGJ59IDKdxdQU9BCF53wqHvh94vDWYWP72YKHFqwnM5MwpTbZMpli4ogR0M8eD5kJxLGL0c6hmqUrvmj5AHmZdR~uNlxxNVNs3J-IFIxluEdYjLRCsMupsQDcJyzkY3wDCrbgXBi52LQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>
          </div>
          <div class="nome-produto">
            TÊNIS NIKE AIR FORCE 1 CRATER FLYKNIT MASCULINO
          </div>
          <div class="valor">R$ 749,99</div>
          <div class="parcelamento">ou até 12x de R$ 62,49</div>
          <div class="adc-carrinho">
            <button> Adicionar ao carrinho </button>
          </div>
        </div>
        <div class="box">
          <div class="prod">
            <img src="https://s3-alpha-sig.figma.com/img/e40e/a22e/36736984d75539991f3cb98f92b38f6a?Expires=1633910400&Signature=Hs8r6ESR8SZugrj9jBqzT5JW4DRnLbkC2zqB86crSHsVRflbkKXqgJCDTuetmoKKYe3QEBFwXBpAUZMa5WmFRuT1POWF5V4hy-wKFoLp9yGRWxf4v82TW4c6xSQNhWTHjUmCBsKzPFl6HasNMSbFuHR31kT-o-ptyU89KFxf9IHa6XLawnNb75LuGOz67XR9Qo7tH2KunJ9jYT5oqIXxSPK1M5GFgRIM00M~sWsZJbhjb4vAUJo2Tx11zKieOGpckAWFAmhKy8T8pbvvDjyet9juUnqJXepqEDnarZT07H6CaPnlCBJY4WAGZNn9xdVG5NF6o9W9BPcWS2DjtQGivA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>
          </div>
          <div class="nome-produto">
            CAMISA JORDAN SÓCIO-TORCEDOR PSG LOGO MASCULINA
          </div>
          <div class="valor">R$ 199,99 </div>
          <div class="parcelamento">ou até 5x de R$ 39,99</div>
          <div class="adc-carrinho">
            <button> Adicionar ao carrinho </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
