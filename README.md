![GitHub](https://img.shields.io/github/license/marcelofilipov/filipov-Orgs-Cesta) ![GitHub repo size](https://img.shields.io/github/repo-size/marcelofilipov/filipov-orgs-cesta) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/marcelofilipov/filipov-orgs-cesta)

# Orgs-Cesta 
## Projeto
Este projeto é resultado do treinamento em **React Native** realizado na [Alura](https://www.alura.com.br/).
Basicamente é implementada uma tela de detalhes da cesta do e-commerce *orgs*. Nesta tela são mostrados dados estáticos do nome da cesta, fazenda, preço e itens da cesta.

<img src="https://user-images.githubusercontent.com/9091491/123982988-e3ccb700-d999-11eb-880e-872881ee8b10.gif" width="350" />

## Técnicas e Tecnologias

As técnicas e tecnologias utilizadas no projeto são:

- `Expo`: tecnologia para simplificar o ambiente de desenvolvimento
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
  - `Text`: componente para exibir textos
  - `View`: container para blocos de componentes
  - `ScrollView`: container para blocos de componentes com barra de rolagem
  - `Image`: componente para exibir imagens
  - `TouchableOpacity`: componente para criar áreas clicáveis
- `Componentes customizados`: criação e utilização de componentes customizados
- `Suporte a telas`: não permitir que conteúdos estejam sob a *StatusBar* (barra superior nativa) ou barra de gestos do iPhone
- `Expo Google Fonts`: suporte a fontes do google via Expo
- `StyleSheet`: estilização básica de componentes
- `Dimensions`: captura de dados das dimenções da tela


## Executando o projeto
### Pré-requisitos
Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:
- Git para clonar o projeto e acessar as branches. Você pode instalar [aqui](https://git-scm.com/downloads);
- Node para podermos rodar `expo` e `npm`. Você pode instala-lo [aqui](https://nodejs.org/en/);
- Um celular Android ou iOS com o aplicativo Expo instalado, ou então algum simulador Android ou iOS no computador;

Com o `npm` instalado podemos instalar o `expo` :
```bash
# Instalando o expo-cli
$ npm install --global expo-cli
```
### Clonando o projeto
Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:
```
git clone https://github.com/marcelofilipov/filipov-orgs-cesta.git
```
### Rodando o Projeto
Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```
npm install
```
Então podemos rodar o projeto:
```
npm start
```
Uma guia no navegador irá abrir, geralmente [neste endereço](http://localhost:19002/).

Caso estiver com o celular, **escaneie o QR code com o aplicativo do Expo** ou a câmera.

Se seu celular estiver em outra rede diferente do computador, troque a "CONNECTION" para "Tunnel", que o app será transmitido via internet.

Se tiver um simulador, clique na opção do sistema operacional do seu simulador no menu esquerdo.
  
Pronto! Sua aplicação se encontra em execução.
