    //https://economia.awesomeapi.com.br/


    //Valor das moedas em ultimos Periodos
    //data atual 13/08/2019

    var message = null;
    var dolar = [{
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Comercial",
        "high": "4.0125",
        "low": "3.9827",
        "varBid": "0.0087",
        "pctChange": "0.22",
        "bid": "3.9937",
        "ask": "3.9943",
        "timestamp": "1565703866",
        "create_date": "2019-08-13 10:44:27"
    }, {
        "high": "3.9855",
        "low": "3.9849",
        "varBid": "-0.0004",
        "pctChange": "-0.01",
        "bid": "3.9848",
        "ask": "3.985",
        "timestamp": "1565649003"
    }, {
        "high": "3.9497",
        "low": "3.9191",
        "varBid": "-0.0004",
        "pctChange": "-0.01",
        "bid": "3.9391",
        "ask": "3.9412",
        "timestamp": "1565550072"
    }, {
        "high": "3.9497",
        "low": "3.9191",
        "varBid": "0.0233",
        "pctChange": "0.6",
        "bid": "3.9418",
        "ask": "3.9425",
        "timestamp": "1565384396"
    }, {
        "high": "3.9497",
        "low": "3.9191",
        "varBid": "0.0234",
        "pctChange": "0.6",
        "bid": "3.941",
        "ask": "3.9435",
        "timestamp": "1565384368"
    }, {
        "high": "3.9196",
        "low": "3.9191",
        "varBid": "0.0003",
        "pctChange": "0.01",
        "bid": "3.919",
        "ask": "3.9192",
        "timestamp": "1565303403"
    }, {
        "high": "3.971",
        "low": "3.9685",
        "varBid": "0.0003",
        "pctChange": "0.01",
        "bid": "3.9684",
        "ask": "3.9686",
        "timestamp": "1565217003"
    }, {
        "high": "3.9617",
        "low": "3.9602",
        "varBid": "-0.0001",
        "pctChange": "0",
        "bid": "3.9601",
        "ask": "3.9603",
        "timestamp": "1565130603"
    }, {
        "high": "3.978",
        "low": "3.9746",
        "varBid": "-0.0032",
        "pctChange": "-0.08",
        "bid": "3.9745",
        "ask": "3.9747",
        "timestamp": "1565044202"
    }, {
        "high": "3.8925",
        "low": "3.8388",
        "varBid": "0.0517",
        "pctChange": "1.35",
        "bid": "3.8895",
        "ask": "3.8915",
        "timestamp": "1564779595"
    }, {
        "high": "3.8925",
        "low": "3.8388",
        "varBid": "0.0461",
        "pctChange": "1.2",
        "bid": "3.8843",
        "ask": "3.8855",
        "timestamp": "1564779510"
    }, {
        "high": "3.8407",
        "low": "3.8388",
        "varBid": "0",
        "pctChange": "0",
        "bid": "3.8387",
        "ask": "3.8389",
        "timestamp": "1564698602"
    }, {
        "high": "3.793",
        "low": "3.7647",
        "varBid": "-0.0225",
        "pctChange": "-0.59",
        "bid": "3.7661",
        "ask": "3.7681",
        "timestamp": "1564580477"
    }, {
        "high": "3.7915",
        "low": "3.7906",
        "varBid": "0.0011",
        "pctChange": "0.03",
        "bid": "3.7906",
        "ask": "3.7908",
        "timestamp": "1564525802"
    }, {
        "high": "3.7823",
        "low": "3.7814",
        "varBid": "0.0001",
        "pctChange": "0",
        "bid": "3.7813",
        "ask": "3.7815",
        "timestamp": "1564439402"
    }, {
        "high": "3.7936",
        "low": "3.7591",
        "varBid": "-0.0009",
        "pctChange": "-0.02",
        "bid": "3.7768",
        "ask": "3.778",
        "timestamp": "1564174796"
    }, {
        "high": "3.7936",
        "low": "3.7591",
        "varBid": "0.0008",
        "pctChange": "0.02",
        "bid": "3.7788",
        "ask": "3.7795",
        "timestamp": "1564174682"
    }, {
        "high": "3.7797",
        "low": "3.7785",
        "varBid": "0.0002",
        "pctChange": "0.01",
        "bid": "3.7784",
        "ask": "3.7786",
        "timestamp": "1564093802"
    }, {
        "high": "3.7756",
        "low": "3.7727",
        "varBid": "0.0001",
        "pctChange": "0",
        "bid": "3.7726",
        "ask": "3.7728",
        "timestamp": "1564007403"
    }, {
        "high": "3.7795",
        "low": "3.7407",
        "varBid": "0.0337",
        "pctChange": "0.9",
        "bid": "3.7737",
        "ask": "3.7742",
        "timestamp": "1563915485"
    }, {
        "high": "3.7413",
        "low": "3.7407",
        "varBid": "0.001",
        "pctChange": "0.03",
        "bid": "3.7412",
        "ask": "3.7414",
        "timestamp": "1563834602"
    }, {
        "high": "3.7538",
        "low": "3.7188",
        "varBid": "0.0303",
        "pctChange": "0.81",
        "bid": "3.748",
        "ask": "3.75",
        "timestamp": "1563569992"
    }, {
        "high": "3.7538",
        "low": "3.7188",
        "varBid": "0.0301",
        "pctChange": "0.81",
        "bid": "3.7475",
        "ask": "3.75",
        "timestamp": "1563569830"
    }, {
        "high": "3.7216",
        "low": "3.7188",
        "varBid": "0.0001",
        "pctChange": "0",
        "bid": "3.7187",
        "ask": "3.7189",
        "timestamp": "1563489003"
    }, {
        "high": "3.7652",
        "low": "3.7633",
        "varBid": "0.0001",
        "pctChange": "0",
        "bid": "3.7632",
        "ask": "3.7634",
        "timestamp": "1563402602"
    }, {
        "high": "3.7691",
        "low": "3.7685",
        "varBid": "0.0005",
        "pctChange": "0.01",
        "bid": "3.7684",
        "ask": "3.7686",
        "timestamp": "1563316203"
    }, {
        "high": "3.7569",
        "low": "3.7552",
        "varBid": "-0.0003",
        "pctChange": "-0.01",
        "bid": "3.7551",
        "ask": "3.7553",
        "timestamp": "1563229803"
    }, {
        "high": "3.7628",
        "low": "3.7296",
        "varBid": "0.0055",
        "pctChange": "0.15",
        "bid": "3.7402",
        "ask": "3.7423",
        "timestamp": "1563130669"
    }, {
        "high": "3.7628",
        "low": "3.7296",
        "varBid": "-0.0161",
        "pctChange": "-0.43",
        "bid": "3.737",
        "ask": "3.7388",
        "timestamp": "1562965195"
    }, {
        "high": "3.7628",
        "low": "3.7296",
        "varBid": "-0.0169",
        "pctChange": "-0.45",
        "bid": "3.7368",
        "ask": "3.7375",
        "timestamp": "1562965052"
    }]
    var peso = [{
        "code": "ARS",
        "codein": "BRL",
        "name": "Peso Argentino",
        "high": "0.0766",
        "low": "0.0679",
        "varBid": "-0.0045",
        "pctChange": "-6.08",
        "bid": "0.0695",
        "ask": "0.0695",
        "timestamp": "1565705775",
        "create_date": "2019-08-13 11:16:24"
    }, {
        "high": "0.0752",
        "low": "0.0752",
        "varBid": "0.0012",
        "pctChange": "1.62",
        "bid": "0.074",
        "ask": "0.0764",
        "timestamp": "1565649003"
    }, {
        "high": "0.0872",
        "low": "0.0865",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0871",
        "ask": "0.0871",
        "timestamp": "1565550072"
    }, {
        "high": "0.0872",
        "low": "0.0865",
        "varBid": "0.0003",
        "pctChange": "0.35",
        "bid": "0.0871",
        "ask": "0.0871",
        "timestamp": "1565384397"
    }, {
        "high": "0.0872",
        "low": "0.0865",
        "varBid": "0.0004",
        "pctChange": "0.4",
        "bid": "0.0871",
        "ask": "0.0872",
        "timestamp": "1565384368"
    }, {
        "high": "0.0868",
        "low": "0.0867",
        "varBid": "-0.0001",
        "pctChange": "-0.06",
        "bid": "0.0867",
        "ask": "0.0868",
        "timestamp": "1565303403"
    }, {
        "high": "0.0872",
        "low": "0.0872",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0872",
        "ask": "0.0872",
        "timestamp": "1565217003"
    }, {
        "high": "0.0875",
        "low": "0.0875",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0875",
        "ask": "0.0875",
        "timestamp": "1565130603"
    }, {
        "high": "0.0877",
        "low": "0.0875",
        "varBid": "-0.0001",
        "pctChange": "-0.06",
        "bid": "0.0875",
        "ask": "0.0876",
        "timestamp": "1565044202"
    }, {
        "high": "0.0874",
        "low": "0.0866",
        "varBid": "0.0006",
        "pctChange": "0.63",
        "bid": "0.0872",
        "ask": "0.0873",
        "timestamp": "1564779595"
    }, {
        "high": "0.0874",
        "low": "0.0866",
        "varBid": "0.0004",
        "pctChange": "0.46",
        "bid": "0.0871",
        "ask": "0.0871",
        "timestamp": "1564779510"
    }, {
        "high": "0.0867",
        "low": "0.0867",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0867",
        "ask": "0.0867",
        "timestamp": "1564698602"
    }, {
        "high": "0.0864",
        "low": "0.0858",
        "varBid": "-0.0005",
        "pctChange": "-0.58",
        "bid": "0.0858",
        "ask": "0.086",
        "timestamp": "1564580486"
    }, {
        "high": "0.0864",
        "low": "0.0864",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0864",
        "ask": "0.0864",
        "timestamp": "1564525802"
    }, {
        "high": "0.0864",
        "low": "0.0864",
        "varBid": "0",
        "pctChange": "0.06",
        "bid": "0.0864",
        "ask": "0.0865",
        "timestamp": "1564439402"
    }, {
        "high": "0.088",
        "low": "0.0867",
        "varBid": "0.0001",
        "pctChange": "0.11",
        "bid": "0.0873",
        "ask": "0.0873",
        "timestamp": "1564174682"
    }, {
        "high": "0.0872",
        "low": "0.0872",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0872",
        "ask": "0.0872",
        "timestamp": "1564093802"
    }, {
        "high": "0.0882",
        "low": "0.0881",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0881",
        "ask": "0.0881",
        "timestamp": "1564007403"
    }, {
        "high": "0.0886",
        "low": "0.0885",
        "varBid": "0",
        "pctChange": "0.06",
        "bid": "0.0885",
        "ask": "0.0886",
        "timestamp": "1563917140"
    }, {
        "high": "0.0881",
        "low": "0.0881",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0881",
        "ask": "0.0881",
        "timestamp": "1563834602"
    }, {
        "high": "0.0886",
        "low": "0.0878",
        "varBid": "0.0008",
        "pctChange": "0.97",
        "bid": "0.0882",
        "ask": "0.0887",
        "timestamp": "1563569992"
    }, {
        "high": "0.0886",
        "low": "0.0878",
        "varBid": "0.0009",
        "pctChange": "0.97",
        "bid": "0.0882",
        "ask": "0.0887",
        "timestamp": "1563569829"
    }, {
        "high": "0.0878",
        "low": "0.0878",
        "varBid": "0.0002",
        "pctChange": "0.23",
        "bid": "0.0876",
        "ask": "0.088",
        "timestamp": "1563489003"
    }, {
        "high": "0.0886",
        "low": "0.0886",
        "varBid": "0.0001",
        "pctChange": "0.11",
        "bid": "0.0885",
        "ask": "0.0887",
        "timestamp": "1563402602"
    }, {
        "high": "0.0883",
        "low": "0.0883",
        "varBid": "0",
        "pctChange": "0",
        "bid": "0.0883",
        "ask": "0.0883",
        "timestamp": "1563316203"
    }, {
        "high": "0.0886",
        "low": "0.0886",
        "varBid": "0.0003",
        "pctChange": "0.28",
        "bid": "0.0883",
        "ask": "0.0888",
        "timestamp": "1563229803"
    }, {
        "high": "0.0902",
        "low": "0.0896",
        "varBid": "0.0001",
        "pctChange": "0.06",
        "bid": "0.0899",
        "ask": "0.09",
        "timestamp": "1563130669"
    }, {
        "high": "0.0902",
        "low": "0.0896",
        "varBid": "-0.0001",
        "pctChange": "-0.11",
        "bid": "0.0899",
        "ask": "0.0899",
        "timestamp": "1562965195"
    }, {
        "high": "0.0902",
        "low": "0.0896",
        "varBid": "-0.0001",
        "pctChange": "-0.17",
        "bid": "0.0898",
        "ask": "0.0899",
        "timestamp": "1562965027"
    }, {
        "high": "0.0901",
        "low": "0.0901",
        "varBid": "0.0001",
        "pctChange": "0.11",
        "bid": "0.0901",
        "ask": "0.0901",
        "timestamp": "1562884222"
    }]
    var euro = [{
        "code": "EUR",
        "codein": "BRL",
        "name": "Euro",
        "high": "4.5007",
        "low": "4.4466",
        "varBid": "-0.0196",
        "pctChange": "-0.44",
        "bid": "4.4452",
        "ask": "4.448",
        "timestamp": "1565704001",
        "create_date": "2019-08-13 10:46:46"
    }, {
        "high": "4.4719",
        "low": "4.468",
        "varBid": "0.0033",
        "pctChange": "0.07",
        "bid": "4.4686",
        "ask": "4.4704",
        "timestamp": "1565654333"
    }, {
        "high": "4.4163",
        "low": "4.4126",
        "varBid": "0.0028",
        "pctChange": "0.06",
        "bid": "4.4145",
        "ask": "4.4173",
        "timestamp": "1565567983"
    }, {
        "high": "4.4314",
        "low": "4.3815",
        "varBid": "0.0339",
        "pctChange": "0.77",
        "bid": "4.4134",
        "ask": "4.4164",
        "timestamp": "1565384397"
    }, {
        "high": "4.4314",
        "low": "4.3815",
        "varBid": "0.0366",
        "pctChange": "0.84",
        "bid": "4.4163",
        "ask": "4.4189",
        "timestamp": "1565384310"
    }, {
        "high": "4.3877",
        "low": "4.3815",
        "varBid": "0.0029",
        "pctChange": "0.07",
        "bid": "4.383",
        "ask": "4.3848",
        "timestamp": "1565308652"
    }, {
        "high": "4.4486",
        "low": "4.445",
        "varBid": "0.0029",
        "pctChange": "0.07",
        "bid": "4.4458",
        "ask": "4.4464",
        "timestamp": "1565222327"
    }, {
        "high": "4.4387",
        "low": "4.4356",
        "varBid": "0.0025",
        "pctChange": "0.06",
        "bid": "4.4369",
        "ask": "4.4375",
        "timestamp": "1565135950"
    }, {
        "high": "4.4692",
        "low": "4.4525",
        "varBid": "0.0143",
        "pctChange": "0.32",
        "bid": "4.4685",
        "ask": "4.4692",
        "timestamp": "1565049465"
    }, {
        "high": "4.3178",
        "low": "4.3145",
        "varBid": "0.0007",
        "pctChange": "0.02",
        "bid": "4.3154",
        "ask": "4.316",
        "timestamp": "1564963179"
    }, {
        "high": "4.3246",
        "low": "4.2497",
        "varBid": "0.0672",
        "pctChange": "1.58",
        "bid": "4.3197",
        "ask": "4.3235",
        "timestamp": "1564779595"
    }, {
        "high": "4.3246",
        "low": "4.2497",
        "varBid": "0.0664",
        "pctChange": "1.56",
        "bid": "4.3198",
        "ask": "4.3219",
        "timestamp": "1564779571"
    }, {
        "high": "4.2574",
        "low": "4.2513",
        "varBid": "-0.0012",
        "pctChange": "-0.03",
        "bid": "4.2529",
        "ask": "4.2535",
        "timestamp": "1564703962"
    }, {
        "high": "4.2312",
        "low": "4.1978",
        "varBid": "-0.0282",
        "pctChange": "-0.67",
        "bid": "4.1978",
        "ask": "4.1989",
        "timestamp": "1564580450"
    }, {
        "high": "4.2306",
        "low": "4.2284",
        "varBid": "0.0028",
        "pctChange": "0.07",
        "bid": "4.2284",
        "ask": "4.2302",
        "timestamp": "1564531159"
    }, {
        "high": "4.2157",
        "low": "4.2133",
        "varBid": "0.0003",
        "pctChange": "0.01",
        "bid": "4.2131",
        "ask": "4.2137",
        "timestamp": "1564444637"
    }, {
        "high": "4.2027",
        "low": "4.1986",
        "varBid": "0.0018",
        "pctChange": "0.04",
        "bid": "4.2011",
        "ask": "4.2024",
        "timestamp": "1564358224"
    }, {
        "high": "4.2242",
        "low": "4.1802",
        "varBid": "-0.0095",
        "pctChange": "-0.23",
        "bid": "4.2017",
        "ask": "4.2045",
        "timestamp": "1564174796"
    }, {
        "high": "4.2242",
        "low": "4.1802",
        "varBid": "-0.0095",
        "pctChange": "-0.23",
        "bid": "4.2017",
        "ask": "4.2045",
        "timestamp": "1564174761"
    }, {
        "high": "4.2138",
        "low": "4.2113",
        "varBid": "-0.0009",
        "pctChange": "-0.02",
        "bid": "4.2114",
        "ask": "4.212",
        "timestamp": "1564099045"
    }, {
        "high": "4.2061",
        "low": "4.2028",
        "varBid": "0.0014",
        "pctChange": "0.03",
        "bid": "4.2034",
        "ask": "4.2048",
        "timestamp": "1564012737"
    }, {
        "high": "4.2099",
        "low": "4.2075",
        "varBid": "0.0008",
        "pctChange": "0.02",
        "bid": "4.2075",
        "ask": "4.209",
        "timestamp": "1563926328"
    }, {
        "high": "4.1936",
        "low": "4.1917",
        "varBid": "-0.0004",
        "pctChange": "-0.01",
        "bid": "4.1909",
        "ask": "4.1926",
        "timestamp": "1563839983"
    }, {
        "high": "4.204",
        "low": "4.2021",
        "varBid": "0.0007",
        "pctChange": "0.02",
        "bid": "4.2031",
        "ask": "4.2037",
        "timestamp": "1563753536"
    }, {
        "high": "4.2088",
        "low": "4.1764",
        "varBid": "0.014",
        "pctChange": "0.34",
        "bid": "4.2047",
        "ask": "4.209",
        "timestamp": "1563569998"
    }, {
        "high": "4.2088",
        "low": "4.1764",
        "varBid": "0.0123",
        "pctChange": "0.29",
        "bid": "4.2036",
        "ask": "4.2066",
        "timestamp": "1563569947"
    }, {
        "high": "4.1969",
        "low": "4.1801",
        "varBid": "-0.0049",
        "pctChange": "-0.12",
        "bid": "4.1876",
        "ask": "4.1882",
        "timestamp": "1563494258"
    }, {
        "high": "4.2271",
        "low": "4.2245",
        "varBid": "0.0016",
        "pctChange": "0.04",
        "bid": "4.2246",
        "ask": "4.2259",
        "timestamp": "1563407921"
    }, {
        "high": "4.2259",
        "low": "4.2243",
        "varBid": "0.0016",
        "pctChange": "0.04",
        "bid": "4.2248",
        "ask": "4.2257",
        "timestamp": "1563321570"
    }, {
        "high": "4.231",
        "low": "4.2285",
        "varBid": "0.0011",
        "pctChange": "0.03",
        "bid": "4.2279",
        "ask": "4.2296",
        "timestamp": "1563235095"
    }]
    var moeda = '';
    var that = this;

    function mostraMensagem() {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    }

    function carrega() {


        var id = $("#selecionar").val();



        if (id[0] == 1) {
            that.moeda = that.dolar;
        }

        if (id[0] == 2) {
            that.moeda = that.peso;

        }
        if (id[0] == 3) {
            that.moeda = that.euro;
        }


        armazena = moeda[0].create_date;
        compra = moeda[0].ask;
        venda = moeda[0].bid;
        alta = moeda[0].high;
        baixa = moeda[0].low;

        var aux = armazena;
        var compraaux = compra;
        var vendaaux = venda;
        var altaaux = alta;
        var baixaaux = baixa;

        var atualizado = "Valores Atualizados via JSON em";


        $("#texto").text(atualizado + " " + aux);

        $("#compra").text("R$ " + compraaux);
        $("#venda").text("R$ " + vendaaux);
        $("#alta").text("↑ R$ " + altaaux);
        $("#baixa").text("↓ R$ " + baixaaux);



        var labels = moeda.map(function (item) {
            return item.ask;
        });

        var data = {
            labels: ["10 Dias Atrás", "9 Dias Atrás", "8 Dias Atrás", "7 Dias Atrás", "6 Dias Atrás", "5 Dias Atrás", "4 Dias Atrás", "3 Dias Atrás", "2 Dias Atrás", "Ontem", "Hoje"],
            datasets: [{
                    label: "My First dataset",
                    fillColor: "rgb(0, 112, 160,0.5)",
                    strokeColor: "white",
                    highlightFill: "white",
                    highlightStroke: "white",
                    data: labels.reverse()
                },

            ]
        };

        var ctx = document.getElementById("myChart").getContext("2d");


        var myNewChart = new Chart(ctx).Line(data, {

            maintainAspectRatio: true,
            scaleFontColor: "#FFFFFF",
            responsive: true

        });

    }

    carrega();


    $("#selecionar").change(function () {
        carrega();

    });