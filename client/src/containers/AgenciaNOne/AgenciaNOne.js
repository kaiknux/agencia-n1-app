import React, { Component } from 'react';
import classes from './AgenciaNOne.css';

class AgenciaNOne extends Component {
    state = {

    }

render () {
    return ( 
        <div className={classes.AgenciaNOne}>
            <h2>Comentários do Exercício (readme):</h2>
            <p>Oi pessoal, meu nome é Eron Oliveira. O desafio proposto é refererente a DESIGN RESPONSIVO, mas como meu estudo é de ReactJS resolvi usá-lo, como pretendo fazer daqui em diante.</p>
            <p>Meu github: <a href="https://github.com/kaiknux">https://github.com/kaiknux</a></p>
            <p>Repositório deste desafio: <a href="https://github.com/kaiknux/agencia-n1-app">https://github.com/kaiknux/agencia-n1-app</a></p>
            <p>Este desafio hospedado no Netlify: <a href="https://serene-yonath-2e29cf.netlify.com">https://serene-yonath-2e29cf.netlify.com</a></p>
            <p>Meu site pessoal (work in progress): <a href="https://zealous-yonath-d830ee.netlify.com">https://zealous-yonath-d830ee.netlify.com</a></p>
            <p>Desenvolvido no VSCode, versionado no Github.</p>
            <h2>Comentários do ReacTJS:</h2>
            <h1>Posição almejada na Agencia N1</h1>
            <p>Estudei a empresa de vocês, gostei e me interesso pelo que vocês fazem. Quero trabalhar com vocês - embora com pouca experiência em programação web busco as melhores práticas de programação e conhecimeto para melhor ajudar.</p>
            <p>Me propus a fazer os componentes de ReactJS porque meu objetivo profissional e de vida para os próximos 3 anos é ganhar experiência e o máximo de conhecimento possível em NodeJS, ReactJS, React Native.</p>
            <h1>Reaproveitamento de componentes X hard coding</h1>
            <p>Me propus a fazer os componentes de ReactJS porque meu objetivo profissional para os próximos 3 anos é ganhar experiência e o máximo de conhecimento possível em NodeJS, ReactJS, React Native.</p>
            <p>Reaproveitei os componentes de backdrop, modal e sidedrawer. Reaproveitei formatação do axios + firebase.</p>
            <p>Me propus a fazer em 'hard code' o máximo possível, a fim de me expor ao teste do exercício. Não almejo a vaga 'chefão', mas busco isso no ReactJS: desenvolvimento na área de programação web.</p>
            <p>Creio que a solução do campo de busca não é a melhor possível, coloquei pouquíssimas regras nos forms (por ser um projeto com prazo de mais ou menos uma semana evitei investir em regras de avaliação dos forms, etc)</p>
            <p>Creio que a melhor solução para o projeto seria desenvolver com Redux ou Context API desde o inicio, porém prefiri trabalhar com jQuery por ter mais experiência e mais previsibilidade com essa ferramenta.</p>
            <p>À medida em que tiver mais experiência pretendo melhorar este projeto a fim de compor meu portifólio.</p>
            <h2>Comentários do CSS:</h2>
            <h1>Cores dos tons de cinza (e demais cores)</h1>
            <p>Usei o conta-gotas do Adobe Photoshop para estimar cada tom de cinza proposto pelo exercício.</p>
            <h1>Fonte e font-weight dos botões 'COMPRA AE' e 'CALCULAR'</h1>
            <p>Percebi que os botões 'COMPRA AE' e 'CALCULAR' do meu app não tem o mesmo font-weight e aspecto proposto pelo exercício, porém não consegui pensar de maneira rápida em
                uma solução de 'font', 'font-weight' ou algo que igualasse ao proposto pelo exercício.</p>
            <h2>App features:</h2>
            <h1>Cadastro de novos presentes</h1>
            <p>Não foram feitas regras para os inputs.</p>
            <h1>Presentes</h1>
            <p>Banco de dados simples no Firebase. Configuração mínima do Firebase, não há feature de delete.</p>
            <h1>Modal</h1>
            <p>Modal renderizando props children. 3 possibilidades de modal: Mensagem para compra realizada (desafio), mensagem de aviso que não fiz
                 feature de cálculo de frete e mensagem de aviso de carrinho desativado.</p>
            <h1>"Presentes" relacionados</h1>
            <p>Componente reaproveitado do github. Por se tratar de um projeto desenvolvido em 1 semana - o banco de dados não apresenta categorização de produtos, portanto o componente não passa por demais
                avaliações pré renderização do mesmo.</p>
            <h1>Breadcrumbs</h1>
            <p> Não responsivo, só texto </p>
        </div>
    )
}
}

export default AgenciaNOne;