// noticias.js
export const noticiasOriginais = [
    {
        msg: "Sorte no destino!<br>Cada jogador deve escolher um número de 1 a 6.",
        valor: "Jogue o dado e receba R$ 1.000,00<br>do jogador que possuir o número sorteado",
        tipo: "sorte"
    },
    {
        msg: "Revés inesperado!<br>Cada jogador deve escolher um número de 1 a 6.",
        valor: "Jogue o dado e pague R$ 1.000,00<br>para o jogador que possuir o número sorteado",
        tipo: "azar"
    },
    {
        msg: "Seus investimentos renderam o dobro!",
        valor: "Receba a quantidade atual de seu dinheiro<br>(Máximo R$ 25.000,00)",
        tipo: "sorte"
    },
    {
        msg: "Crise no mercado financeiro!",
        valor: "Pague metade da sua<br>quantidade atual de dinheiro",
        tipo: "azar"
    },
    {
        msg: "Taxa de manutenção predial.",
        valor: "Pague R$ 500,00 por cada casa<br>e R$ 1.000,00 por cada hotel",
        tipo: "azar"
    },
    {
        msg: "Revalorização imobiliária!",
        valor: "Receba R$ 500,00 por cada casa<br>e R$ 1.000,00 por cada hotel",
        tipo: "sorte"
    },
    {
        msg: "Você faz aniversário hoje!",
        valor: "Receba R$ 500,00 de cada jogador",
        tipo: "sorte"
    },
    {
        msg: "Grande sorte! Você venceu o torneio de Poker no Cassino.",
        valor: "Receba R$ 500,00 de cada jogador",
        tipo: "sorte"
    },
    {
        msg: "Que azar! Você causou um engavetamento no estacionamento.",
        valor: "Pague R$ 500,00 para cada jogador",
        tipo: "azar"
    },
    {
        msg: "Você perdeu uma aposta esportiva para o grupo.",
        valor: "Pague R$ 500,00 para cada jogador",
        tipo: "azar"
    },
    {
        msg: "Restituição do Imposto de Renda.",
        valor: "Receba R$ 2.000,00",
        tipo: "sorte"
    },
    {
        msg: "Prêmio por produtividade no trabalho.",
        valor: "Receba R$ 1.500,00",
        tipo: "sorte"
    },
    {
        msg: "Gastos com hospital.",
        valor: "Pague R$ 1.500,00",
        tipo: "azar"
    },
    {
        msg: "Multa por excesso de velocidade.",
        valor: "Pague R$ 1.000,00",
        tipo: "azar"
    },
    {
        msg: "Seu bilhete da loteria federal foi premiado!",
        valor: "Receba R$ 2.000,00",
        tipo: "sorte"
    },
    {
        msg: "Venda de ações na alta do mercado.",
        valor: "Receba R$ 1.500,00",
        tipo: "sorte"
    },
    {
        msg: "Dividendos de suas empresas foram liberados.",
        valor: "Receba R$ 1.000,00",
        tipo: "sorte"
    },
    {
        msg: "Você encontrou uma maleta esquecida no táxi.",
        valor: "Receba R$ 500,00",
        tipo: "sorte"
    },
    {
        msg: "Sua startup recebeu um novo aporte financeiro.",
        valor: "Receba R$ 2.000,00",
        tipo: "sorte"
    },
    {
        msg: "Vazamento na tubulação principal de sua propriedade.",
        valor: "Pague R$ 1.000,00",
        tipo: "azar"
    },
    {
        msg: "Renovação do seguro obrigatório de seus imóveis.",
        valor: "Pague R$ 500,00",
        tipo: "azar"
    },
    {
        msg: "Perda de processo judicial trabalhista.",
        valor: "Pague R$ 2.000,00",
        tipo: "azar"
    },
    {
        msg: "Conserto urgente do telhado após tempestade.",
        valor: "Pague R$ 1.500,00",
        tipo: "azar"
    },
    {
        msg: "Taxa de condomínio atrasada com juros.",
        valor: "Pague R$ 500,00",
        tipo: "azar"
    },
    {
        msg: "Você pegou um fluxo livre no trânsito.",
        valor: "Avance 1 casa",
        tipo: "neutro"
    },
    {
        msg: "O sinal abriu logo que você chegou.",
        valor: "Avance 1 casa",
        tipo: "neutro"
    },
    {
        msg: "Sua carona chegou adiantada.",
        valor: "Avance 2 casas",
        tipo: "neutro"
    },
    {
        msg: "Você decidiu correr para manter a forma.",
        valor: "Avance 2 casas",
        tipo: "neutro"
    },
    {
        msg: "O trânsito está livre na avenida principal!",
        valor: "Avance 3 casas",
        tipo: "neutro"
    },
    {
        msg: "Você pegou um atalho conhecido.",
        valor: "Avance 3 casas",
        tipo: "neutro"
    },
    {
        msg: "O GPS encontrou uma rota muito mais rápida.",
        valor: "Avance 4 casas",
        tipo: "neutro"
    },
    {
        msg: "Viagem expressa sem paradas.",
        valor: "Avance 4 casas",
        tipo: "neutro"
    },
    {
        msg: "Aproveite o atalho pelo centro da cidade.",
        valor: "Avance 5 casas",
        tipo: "neutro"
    },
    {
        msg: "Caminho livre! Siga em velocidade máxima.",
        valor: "Avance 5 casas",
        tipo: "neutro"
    },
    {
        msg: "Você parou para admirar uma vitrine.",
        valor: "Volte 1 casa",
        tipo: "neutro"
    },
    {
        msg: "Confusão na sinalização da rua.",
        valor: "Volte 1 casa",
        tipo: "neutro"
    },
    {
        msg: "Estrada bloqueada para obras de manutenção.",
        valor: "Volte 2 casas",
        tipo: "neutro"
    },
    {
        msg: "Você esqueceu de conferir o mapa antes de sair.",
        valor: "Volte 2 casas",
        tipo: "neutro"
    },
    {
        msg: "Pneu furado! Precisa parar para trocar.",
        valor: "Volte 3 casas",
        tipo: "neutro"
    },
    {
        msg: "Rua sem saída, precisa retornar.",
        valor: "Volte 3 casas",
        tipo: "neutro"
    },
    {
        msg: "Você esqueceu a sua carteira no último estabelecimento.",
        valor: "Volte 4 casas",
        tipo: "neutro"
    },
    {
        msg: "Trânsito parado devido a uma manifestação.",
        valor: "Volte 4 casas",
        tipo: "neutro"
    },
    {
        msg: "Você se perdeu e demorou a encontrar o caminho.",
        valor: "Volte 5 casas",
        tipo: "neutro"
    },
    {
        msg: "Pane seca! O guincho precisou te rebocar.",
        valor: "Volte 5 casas",
        tipo: "neutro"
    },
    {
        msg: "Decisão do comissário!<br>Escolha um dos jogadores.",
        valor: "O jogador escolhido deve ir direto para a Prisão",
        tipo: "sorte"
    },
    {
        msg: "Viagem de negócios urgente!",
        valor: "Vá direto para o Aeroporto",
        tipo: "sorte"
    },
    {
        msg: "Bônus de construtora!",
        valor: "Coloque uma casa em qualquer uma de suas propriedades sem custo",
        tipo: "sorte"
    },
    {
        msg: "Golpe de mestre!<br>Sorteie um dos jogadores.",
        valor: "Roube uma propriedade do jogador sorteado para você",
        tipo: "sorte"
    },
    {
        msg: "Sabotagem industrial!<br>Escolha uma propriedade de um adversário.",
        valor: "Destrua 1 casa. Se houver hotel, remova-o e deixe 3 casas",
        tipo: "sorte"
    },
    {
        msg: "Justiça federal!<br>Seus crimes foram descobertos.",
        valor: "Vá direto para a Prisão",
        tipo: "azar"
    },
    {
        msg: "Problemas estruturais detectados!",
        valor: "Remova uma casa de sua propriedade. Se houver hotel, deixe 3 casas",
        tipo: "azar"
    },
    {
        msg: "Acordo judicial forçado!",
        valor: "Entregue uma de suas propriedades para um jogador à sua escolha",
        tipo: "azar"
    },
    {
        msg: "Energia extra para continuar!",
        valor: "Jogue os dados novamente e avance o número de casas",
        tipo: "neutro"
    },
    {
        msg: "Cartão de Desconto Executivo!",
        valor: "Guarde esta carta: Pague apenas 50% do valor no seu próximo pagamento (Exceto negociações)",
        tipo: "totem"
    },
    {
        msg: "Escritura de Proteção Patrimonial!",
        valor: "Proteja uma propriedade sua ou negocie a proteção com outro jogador",
        tipo: "totem"
    },
    {
        msg: "Habeas Corpus Liberado!",
        valor: "Guarde esta carta: Utilize para sair da prisão imediatamente",
        tipo: "totem"
    }
];