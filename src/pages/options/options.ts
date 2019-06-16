import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})

export class OptionsPage {

  estados: Array<any>;
  cidades: Array<any>;
  
  codExibidas: number = 0;

  nome: string;
  locationId: number;
  stateId: number;

  newUser: boolean;

  ionViewDidLoad() { 

    if(this.navParams.get('newUser')){
      this.newUser = true;
    }else{
      this.newUser = false;

      this.userProvider.getUser().valueChanges().subscribe(e=>{        
        e.forEach(u=>{
          this.nome = u.name
          this.locationId = u.locationId
          this.stateId = u.stateId
        });
      });
    }    
  }

  cleanCity(){
    this.locationId = 0;
  }

  saveUser(){
    if(this.nome.trim()=="" || (this.stateId < 1 || this.stateId > 27) || (this.locationId < 1 || this.locationId > 5564)){
      this.presentToast("É necessário preencher todos os campos.", 1000)
    }else{
      if(this.newUser){
        this.userProvider.newUser(this.nome, this.locationId, this.stateId);
      }else{
        this.userProvider.updateUser(this.nome, this.locationId, this.stateId);
      }
      this.navCtrl.pop();
    }
  }

  logout(){
    this.asp.signOut()
  }

  presentToast(message: string, duration: number) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom'
    });
    toast.present();
  }

  constructor(private asp: AuthServiceProvider, private toastCtrl: ToastController, private userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public firestore: AngularFirestore) {
  
    this.estados = [{
      "ID": "1",
      "Sigla": "AC",
      "Nome": "Acre"
    },
         {
      "ID": "11",
      "Sigla": "MG",
      "Nome": "Minas Gerais"
    }];

    this.cidades = [
         {
      "ID": "79",
      "Nome": "Acrelândia",
      "Estado": "1"
    },
         {
      "ID": "80",
      "Nome": "Assis Brasil",
      "Estado": "1"
    },
         {
      "ID": "81",
      "Nome": "Brasiléia",
      "Estado": "1"
    },
         {
      "ID": "82",
      "Nome": "Bujari",
      "Estado": "1"
    },
         {
      "ID": "83",
      "Nome": "Capixaba",
      "Estado": "1"
    },
         {
      "ID": "84",
      "Nome": "Cruzeiro do Sul",
      "Estado": "1"
    },
         {
      "ID": "85",
      "Nome": "Epitaciolândia",
      "Estado": "1"
    },
         {
      "ID": "86",
      "Nome": "Feijó",
      "Estado": "1"
    },
         {
      "ID": "87",
      "Nome": "Jordão",
      "Estado": "1"
    },
         {
      "ID": "88",
      "Nome": "Mâncio Lima",
      "Estado": "1"
    },
         {
      "ID": "89",
      "Nome": "Manoel Urbano",
      "Estado": "1"
    },
         {
      "ID": "90",
      "Nome": "Marechal Thaumaturgo",
      "Estado": "1"
    },
         {
      "ID": "91",
      "Nome": "Plácido de Castro",
      "Estado": "1"
    },
         {
      "ID": "92",
      "Nome": "Porto Acre",
      "Estado": "1"
    },
         {
      "ID": "93",
      "Nome": "Porto Walter",
      "Estado": "1"
    },
         {
      "ID": "94",
      "Nome": "Rio Branco",
      "Estado": "1"
    },
         {
      "ID": "95",
      "Nome": "Rodrigues Alves",
      "Estado": "1"
    },
         {
      "ID": "96",
      "Nome": "Santa Rosa do Purus",
      "Estado": "1"
    },
         {
      "ID": "97",
      "Nome": "Sena Madureira",
      "Estado": "1"
    },
         {
      "ID": "98",
      "Nome": "Senador Guiomard",
      "Estado": "1"
    },
         {
      "ID": "99",
      "Nome": "Tarauacá",
      "Estado": "1"
    },
         {
      "ID": "100",
      "Nome": "Xapuri",
      "Estado": "1"
    },
         {
      "ID": "1565",
      "Nome": "Abadia dos Dourados",
      "Estado": "11"
    },
         {
      "ID": "1566",
      "Nome": "Abaeté",
      "Estado": "11"
    },
         {
      "ID": "1567",
      "Nome": "Abre Campo",
      "Estado": "11"
    },
         {
      "ID": "1568",
      "Nome": "Acaiaca",
      "Estado": "11"
    },
         {
      "ID": "1569",
      "Nome": "Açucena",
      "Estado": "11"
    },
         {
      "ID": "1570",
      "Nome": "Água Boa",
      "Estado": "11"
    },
         {
      "ID": "1571",
      "Nome": "Água Comprida",
      "Estado": "11"
    },
         {
      "ID": "1572",
      "Nome": "Aguanil",
      "Estado": "11"
    },
         {
      "ID": "1573",
      "Nome": "Águas Formosas",
      "Estado": "11"
    },
         {
      "ID": "1574",
      "Nome": "Águas Vermelhas",
      "Estado": "11"
    },
         {
      "ID": "1575",
      "Nome": "Aimorés",
      "Estado": "11"
    },
         {
      "ID": "1576",
      "Nome": "Aiuruoca",
      "Estado": "11"
    },
         {
      "ID": "1577",
      "Nome": "Alagoa",
      "Estado": "11"
    },
         {
      "ID": "1578",
      "Nome": "Albertina",
      "Estado": "11"
    },
         {
      "ID": "1579",
      "Nome": "Além Paraíba",
      "Estado": "11"
    },
         {
      "ID": "1580",
      "Nome": "Alfenas",
      "Estado": "11"
    },
         {
      "ID": "1581",
      "Nome": "Alfredo Vasconcelos",
      "Estado": "11"
    },
         {
      "ID": "1582",
      "Nome": "Almenara",
      "Estado": "11"
    },
         {
      "ID": "1583",
      "Nome": "Alpercata",
      "Estado": "11"
    },
         {
      "ID": "1584",
      "Nome": "Alpinópolis",
      "Estado": "11"
    },
         {
      "ID": "1585",
      "Nome": "Alterosa",
      "Estado": "11"
    },
         {
      "ID": "1586",
      "Nome": "Alto Caparaó",
      "Estado": "11"
    },
         {
      "ID": "1587",
      "Nome": "Alto Jequitibá",
      "Estado": "11"
    },
         {
      "ID": "1588",
      "Nome": "Alto Rio Doce",
      "Estado": "11"
    },
         {
      "ID": "1589",
      "Nome": "Alvarenga",
      "Estado": "11"
    },
         {
      "ID": "1590",
      "Nome": "Alvinópolis",
      "Estado": "11"
    },
         {
      "ID": "1591",
      "Nome": "Alvorada de Minas",
      "Estado": "11"
    },
         {
      "ID": "1592",
      "Nome": "Amparo do Serra",
      "Estado": "11"
    },
         {
      "ID": "1593",
      "Nome": "Andradas",
      "Estado": "11"
    },
         {
      "ID": "1594",
      "Nome": "Andrelândia",
      "Estado": "11"
    },
         {
      "ID": "1595",
      "Nome": "Angelândia",
      "Estado": "11"
    },
         {
      "ID": "1596",
      "Nome": "Antônio Carlos",
      "Estado": "11"
    },
         {
      "ID": "1597",
      "Nome": "Antônio Dias",
      "Estado": "11"
    },
         {
      "ID": "1598",
      "Nome": "Antônio Prado de Minas",
      "Estado": "11"
    },
         {
      "ID": "1599",
      "Nome": "Araçaí",
      "Estado": "11"
    },
         {
      "ID": "1600",
      "Nome": "Aracitaba",
      "Estado": "11"
    },
         {
      "ID": "1601",
      "Nome": "Araçuaí",
      "Estado": "11"
    },
         {
      "ID": "1602",
      "Nome": "Araguari",
      "Estado": "11"
    },
         {
      "ID": "1603",
      "Nome": "Arantina",
      "Estado": "11"
    },
         {
      "ID": "1604",
      "Nome": "Araponga",
      "Estado": "11"
    },
         {
      "ID": "1605",
      "Nome": "Araporã",
      "Estado": "11"
    },
         {
      "ID": "1606",
      "Nome": "Arapuá",
      "Estado": "11"
    },
         {
      "ID": "1607",
      "Nome": "Araújos",
      "Estado": "11"
    },
         {
      "ID": "1608",
      "Nome": "Araxá",
      "Estado": "11"
    },
         {
      "ID": "1609",
      "Nome": "Arceburgo",
      "Estado": "11"
    },
         {
      "ID": "1610",
      "Nome": "Arcos",
      "Estado": "11"
    },
         {
      "ID": "1611",
      "Nome": "Areado",
      "Estado": "11"
    },
         {
      "ID": "1612",
      "Nome": "Argirita",
      "Estado": "11"
    },
         {
      "ID": "1613",
      "Nome": "Aricanduva",
      "Estado": "11"
    },
         {
      "ID": "1614",
      "Nome": "Arinos",
      "Estado": "11"
    },
         {
      "ID": "1615",
      "Nome": "Astolfo Dutra",
      "Estado": "11"
    },
         {
      "ID": "1616",
      "Nome": "Ataléia",
      "Estado": "11"
    },
         {
      "ID": "1617",
      "Nome": "Augusto de Lima",
      "Estado": "11"
    },
         {
      "ID": "1618",
      "Nome": "Baependi",
      "Estado": "11"
    },
         {
      "ID": "1619",
      "Nome": "Baldim",
      "Estado": "11"
    },
         {
      "ID": "1620",
      "Nome": "Bambuí",
      "Estado": "11"
    },
         {
      "ID": "1621",
      "Nome": "Bandeira",
      "Estado": "11"
    },
         {
      "ID": "1622",
      "Nome": "Bandeira do Sul",
      "Estado": "11"
    },
         {
      "ID": "1623",
      "Nome": "Barão de Cocais",
      "Estado": "11"
    },
         {
      "ID": "1624",
      "Nome": "Barão de Monte Alto",
      "Estado": "11"
    },
         {
      "ID": "1625",
      "Nome": "Barbacena",
      "Estado": "11"
    },
         {
      "ID": "1626",
      "Nome": "Barra Longa",
      "Estado": "11"
    },
         {
      "ID": "1627",
      "Nome": "Barroso",
      "Estado": "11"
    },
         {
      "ID": "1628",
      "Nome": "Bela Vista de Minas",
      "Estado": "11"
    },
         {
      "ID": "1629",
      "Nome": "Belmiro Braga",
      "Estado": "11"
    },
         {
      "ID": "1630",
      "Nome": "Belo Horizonte",
      "Estado": "11"
    },
         {
      "ID": "1631",
      "Nome": "Belo Oriente",
      "Estado": "11"
    },
         {
      "ID": "1632",
      "Nome": "Belo Vale",
      "Estado": "11"
    },
         {
      "ID": "1633",
      "Nome": "Berilo",
      "Estado": "11"
    },
         {
      "ID": "1634",
      "Nome": "Berizal",
      "Estado": "11"
    },
         {
      "ID": "1635",
      "Nome": "Bertópolis",
      "Estado": "11"
    },
         {
      "ID": "1636",
      "Nome": "Betim",
      "Estado": "11"
    },
         {
      "ID": "1637",
      "Nome": "Bias Fortes",
      "Estado": "11"
    },
         {
      "ID": "1638",
      "Nome": "Bicas",
      "Estado": "11"
    },
         {
      "ID": "1639",
      "Nome": "Biquinhas",
      "Estado": "11"
    },
         {
      "ID": "1640",
      "Nome": "Boa Esperança",
      "Estado": "11"
    },
         {
      "ID": "1641",
      "Nome": "Bocaina de Minas",
      "Estado": "11"
    },
         {
      "ID": "1642",
      "Nome": "Bocaiúva",
      "Estado": "11"
    },
         {
      "ID": "1643",
      "Nome": "Bom Despacho",
      "Estado": "11"
    },
         {
      "ID": "1644",
      "Nome": "Bom Jardim de Minas",
      "Estado": "11"
    },
         {
      "ID": "1645",
      "Nome": "Bom Jesus da Penha",
      "Estado": "11"
    },
         {
      "ID": "1646",
      "Nome": "Bom Jesus do Amparo",
      "Estado": "11"
    },
         {
      "ID": "1647",
      "Nome": "Bom Jesus do Galho",
      "Estado": "11"
    },
         {
      "ID": "1648",
      "Nome": "Bom Repouso",
      "Estado": "11"
    },
         {
      "ID": "1649",
      "Nome": "Bom Sucesso",
      "Estado": "11"
    },
         {
      "ID": "1650",
      "Nome": "Bonfim",
      "Estado": "11"
    },
         {
      "ID": "1651",
      "Nome": "Bonfinópolis de Minas",
      "Estado": "11"
    },
         {
      "ID": "1652",
      "Nome": "Bonito de Minas",
      "Estado": "11"
    },
         {
      "ID": "1653",
      "Nome": "Borda da Mata",
      "Estado": "11"
    },
         {
      "ID": "1654",
      "Nome": "Botelhos",
      "Estado": "11"
    },
         {
      "ID": "1655",
      "Nome": "Botumirim",
      "Estado": "11"
    },
         {
      "ID": "1656",
      "Nome": "Brás Pires",
      "Estado": "11"
    },
         {
      "ID": "1657",
      "Nome": "Brasilândia de Minas",
      "Estado": "11"
    },
         {
      "ID": "1658",
      "Nome": "Brasília de Minas",
      "Estado": "11"
    },
         {
      "ID": "1659",
      "Nome": "Brasópolis",
      "Estado": "11"
    },
         {
      "ID": "1660",
      "Nome": "Braúnas",
      "Estado": "11"
    },
         {
      "ID": "1661",
      "Nome": "Brumadinho",
      "Estado": "11"
    },
         {
      "ID": "1662",
      "Nome": "Bueno Brandão",
      "Estado": "11"
    },
         {
      "ID": "1663",
      "Nome": "Buenópolis",
      "Estado": "11"
    },
         {
      "ID": "1664",
      "Nome": "Bugre",
      "Estado": "11"
    },
         {
      "ID": "1665",
      "Nome": "Buritis",
      "Estado": "11"
    },
         {
      "ID": "1666",
      "Nome": "Buritizeiro",
      "Estado": "11"
    },
         {
      "ID": "1667",
      "Nome": "Cabeceira Grande",
      "Estado": "11"
    },
         {
      "ID": "1668",
      "Nome": "Cabo Verde",
      "Estado": "11"
    },
         {
      "ID": "1669",
      "Nome": "Cachoeira da Prata",
      "Estado": "11"
    },
         {
      "ID": "1670",
      "Nome": "Cachoeira de Minas",
      "Estado": "11"
    },
         {
      "ID": "1671",
      "Nome": "Cachoeira de Pajeú",
      "Estado": "11"
    },
         {
      "ID": "1672",
      "Nome": "Cachoeira Dourada",
      "Estado": "11"
    },
         {
      "ID": "1673",
      "Nome": "Caetanópolis",
      "Estado": "11"
    },
         {
      "ID": "1674",
      "Nome": "Caeté",
      "Estado": "11"
    },
         {
      "ID": "1675",
      "Nome": "Caiana",
      "Estado": "11"
    },
         {
      "ID": "1676",
      "Nome": "Cajuri",
      "Estado": "11"
    },
         {
      "ID": "1677",
      "Nome": "Caldas",
      "Estado": "11"
    },
         {
      "ID": "1678",
      "Nome": "Camacho",
      "Estado": "11"
    },
         {
      "ID": "1679",
      "Nome": "Camanducaia",
      "Estado": "11"
    },
         {
      "ID": "1680",
      "Nome": "Cambuí",
      "Estado": "11"
    },
         {
      "ID": "1681",
      "Nome": "Cambuquira",
      "Estado": "11"
    },
         {
      "ID": "1682",
      "Nome": "Campanário",
      "Estado": "11"
    },
         {
      "ID": "1683",
      "Nome": "Campanha",
      "Estado": "11"
    },
         {
      "ID": "1684",
      "Nome": "Campestre",
      "Estado": "11"
    },
         {
      "ID": "1685",
      "Nome": "Campina Verde",
      "Estado": "11"
    },
         {
      "ID": "1686",
      "Nome": "Campo Azul",
      "Estado": "11"
    },
         {
      "ID": "1687",
      "Nome": "Campo Belo",
      "Estado": "11"
    },
         {
      "ID": "1688",
      "Nome": "Campo do Meio",
      "Estado": "11"
    },
         {
      "ID": "1689",
      "Nome": "Campo Florido",
      "Estado": "11"
    },
         {
      "ID": "1690",
      "Nome": "Campos Altos",
      "Estado": "11"
    },
         {
      "ID": "1691",
      "Nome": "Campos Gerais",
      "Estado": "11"
    },
         {
      "ID": "1692",
      "Nome": "Cana Verde",
      "Estado": "11"
    },
         {
      "ID": "1693",
      "Nome": "Canaã",
      "Estado": "11"
    },
         {
      "ID": "1694",
      "Nome": "Canápolis",
      "Estado": "11"
    },
         {
      "ID": "1695",
      "Nome": "Candeias",
      "Estado": "11"
    },
         {
      "ID": "1696",
      "Nome": "Cantagalo",
      "Estado": "11"
    },
         {
      "ID": "1697",
      "Nome": "Caparaó",
      "Estado": "11"
    },
         {
      "ID": "1698",
      "Nome": "Capela Nova",
      "Estado": "11"
    },
         {
      "ID": "1699",
      "Nome": "Capelinha",
      "Estado": "11"
    },
         {
      "ID": "1700",
      "Nome": "Capetinga",
      "Estado": "11"
    },
         {
      "ID": "1701",
      "Nome": "Capim Branco",
      "Estado": "11"
    },
         {
      "ID": "1702",
      "Nome": "Capinópolis",
      "Estado": "11"
    },
         {
      "ID": "1703",
      "Nome": "Capitão Andrade",
      "Estado": "11"
    },
         {
      "ID": "1704",
      "Nome": "Capitão Enéas",
      "Estado": "11"
    },
         {
      "ID": "1705",
      "Nome": "Capitólio",
      "Estado": "11"
    },
         {
      "ID": "1706",
      "Nome": "Caputira",
      "Estado": "11"
    },
         {
      "ID": "1707",
      "Nome": "Caraí",
      "Estado": "11"
    },
         {
      "ID": "1708",
      "Nome": "Caranaíba",
      "Estado": "11"
    },
         {
      "ID": "1709",
      "Nome": "Carandaí",
      "Estado": "11"
    },
         {
      "ID": "1710",
      "Nome": "Carangola",
      "Estado": "11"
    },
         {
      "ID": "1711",
      "Nome": "Caratinga",
      "Estado": "11"
    },
         {
      "ID": "1712",
      "Nome": "Carbonita",
      "Estado": "11"
    },
         {
      "ID": "1713",
      "Nome": "Careaçu",
      "Estado": "11"
    },
         {
      "ID": "1714",
      "Nome": "Carlos Chagas",
      "Estado": "11"
    },
         {
      "ID": "1715",
      "Nome": "Carmésia",
      "Estado": "11"
    },
         {
      "ID": "1716",
      "Nome": "Carmo da Cachoeira",
      "Estado": "11"
    },
         {
      "ID": "1717",
      "Nome": "Carmo da Mata",
      "Estado": "11"
    },
         {
      "ID": "1718",
      "Nome": "Carmo de Minas",
      "Estado": "11"
    },
         {
      "ID": "1719",
      "Nome": "Carmo do Cajuru",
      "Estado": "11"
    },
         {
      "ID": "1720",
      "Nome": "Carmo do Paranaíba",
      "Estado": "11"
    },
         {
      "ID": "1721",
      "Nome": "Carmo do Rio Claro",
      "Estado": "11"
    },
         {
      "ID": "1722",
      "Nome": "Carmópolis de Minas",
      "Estado": "11"
    },
         {
      "ID": "1723",
      "Nome": "Carneirinho",
      "Estado": "11"
    },
         {
      "ID": "1724",
      "Nome": "Carrancas",
      "Estado": "11"
    },
         {
      "ID": "1725",
      "Nome": "Carvalhópolis",
      "Estado": "11"
    },
         {
      "ID": "1726",
      "Nome": "Carvalhos",
      "Estado": "11"
    },
         {
      "ID": "1727",
      "Nome": "Casa Grande",
      "Estado": "11"
    },
         {
      "ID": "1728",
      "Nome": "Cascalho Rico",
      "Estado": "11"
    },
         {
      "ID": "1729",
      "Nome": "Cássia",
      "Estado": "11"
    },
         {
      "ID": "1730",
      "Nome": "Cataguases",
      "Estado": "11"
    },
         {
      "ID": "1731",
      "Nome": "Catas Altas",
      "Estado": "11"
    },
         {
      "ID": "1732",
      "Nome": "Catas Altas da Noruega",
      "Estado": "11"
    },
         {
      "ID": "1733",
      "Nome": "Catuji",
      "Estado": "11"
    },
         {
      "ID": "1734",
      "Nome": "Catuti",
      "Estado": "11"
    },
         {
      "ID": "1735",
      "Nome": "Caxambu",
      "Estado": "11"
    },
         {
      "ID": "1736",
      "Nome": "Cedro do Abaeté",
      "Estado": "11"
    },
         {
      "ID": "1737",
      "Nome": "Central de Minas",
      "Estado": "11"
    },
         {
      "ID": "1738",
      "Nome": "Centralina",
      "Estado": "11"
    },
         {
      "ID": "1739",
      "Nome": "Chácara",
      "Estado": "11"
    },
         {
      "ID": "1740",
      "Nome": "Chalé",
      "Estado": "11"
    },
         {
      "ID": "1741",
      "Nome": "Chapada do Norte",
      "Estado": "11"
    },
         {
      "ID": "1742",
      "Nome": "Chapada Gaúcha",
      "Estado": "11"
    },
         {
      "ID": "1743",
      "Nome": "Chiador",
      "Estado": "11"
    },
         {
      "ID": "1744",
      "Nome": "Cipotânea",
      "Estado": "11"
    },
         {
      "ID": "1745",
      "Nome": "Claraval",
      "Estado": "11"
    },
         {
      "ID": "1746",
      "Nome": "Claro dos Poções",
      "Estado": "11"
    },
         {
      "ID": "1747",
      "Nome": "Cláudio",
      "Estado": "11"
    },
         {
      "ID": "1748",
      "Nome": "Coimbra",
      "Estado": "11"
    },
         {
      "ID": "1749",
      "Nome": "Coluna",
      "Estado": "11"
    },
         {
      "ID": "1750",
      "Nome": "Comendador Gomes",
      "Estado": "11"
    },
         {
      "ID": "1751",
      "Nome": "Comercinho",
      "Estado": "11"
    },
         {
      "ID": "1752",
      "Nome": "Conceição da Aparecida",
      "Estado": "11"
    },
         {
      "ID": "1753",
      "Nome": "Conceição da Barra de Minas",
      "Estado": "11"
    },
         {
      "ID": "1754",
      "Nome": "Conceição das Alagoas",
      "Estado": "11"
    },
         {
      "ID": "1755",
      "Nome": "Conceição das Pedras",
      "Estado": "11"
    },
         {
      "ID": "1756",
      "Nome": "Conceição de Ipanema",
      "Estado": "11"
    },
         {
      "ID": "1757",
      "Nome": "Conceição do Mato Dentro",
      "Estado": "11"
    },
         {
      "ID": "1758",
      "Nome": "Conceição do Pará",
      "Estado": "11"
    },
         {
      "ID": "1759",
      "Nome": "Conceição do Rio Verde",
      "Estado": "11"
    },
         {
      "ID": "1760",
      "Nome": "Conceição dos Ouros",
      "Estado": "11"
    },
         {
      "ID": "1761",
      "Nome": "Cônego Marinho",
      "Estado": "11"
    },
         {
      "ID": "1762",
      "Nome": "Confins",
      "Estado": "11"
    },
         {
      "ID": "1763",
      "Nome": "Congonhal",
      "Estado": "11"
    },
         {
      "ID": "1764",
      "Nome": "Congonhas",
      "Estado": "11"
    },
         {
      "ID": "1765",
      "Nome": "Congonhas do Norte",
      "Estado": "11"
    },
         {
      "ID": "1766",
      "Nome": "Conquista",
      "Estado": "11"
    },
         {
      "ID": "1767",
      "Nome": "Conselheiro Lafaiete",
      "Estado": "11"
    },
         {
      "ID": "1768",
      "Nome": "Conselheiro Pena",
      "Estado": "11"
    },
         {
      "ID": "1769",
      "Nome": "Consolação",
      "Estado": "11"
    },
         {
      "ID": "1770",
      "Nome": "Contagem",
      "Estado": "11"
    },
         {
      "ID": "1771",
      "Nome": "Coqueiral",
      "Estado": "11"
    },
         {
      "ID": "1772",
      "Nome": "Coração de Jesus",
      "Estado": "11"
    },
         {
      "ID": "1773",
      "Nome": "Cordisburgo",
      "Estado": "11"
    },
         {
      "ID": "1774",
      "Nome": "Cordislândia",
      "Estado": "11"
    },
         {
      "ID": "1775",
      "Nome": "Corinto",
      "Estado": "11"
    },
         {
      "ID": "1776",
      "Nome": "Coroaci",
      "Estado": "11"
    },
         {
      "ID": "1777",
      "Nome": "Coromandel",
      "Estado": "11"
    },
         {
      "ID": "1778",
      "Nome": "Coronel Fabriciano",
      "Estado": "11"
    },
         {
      "ID": "1779",
      "Nome": "Coronel Murta",
      "Estado": "11"
    },
         {
      "ID": "1780",
      "Nome": "Coronel Pacheco",
      "Estado": "11"
    },
         {
      "ID": "1781",
      "Nome": "Coronel Xavier Chaves",
      "Estado": "11"
    },
         {
      "ID": "1782",
      "Nome": "Córrego Danta",
      "Estado": "11"
    },
         {
      "ID": "1783",
      "Nome": "Córrego do Bom Jesus",
      "Estado": "11"
    },
         {
      "ID": "1784",
      "Nome": "Córrego Fundo",
      "Estado": "11"
    },
         {
      "ID": "1785",
      "Nome": "Córrego Novo",
      "Estado": "11"
    },
         {
      "ID": "1786",
      "Nome": "Couto de Magalhães de Minas",
      "Estado": "11"
    },
         {
      "ID": "1787",
      "Nome": "Crisólita",
      "Estado": "11"
    },
         {
      "ID": "1788",
      "Nome": "Cristais",
      "Estado": "11"
    },
         {
      "ID": "1789",
      "Nome": "Cristália",
      "Estado": "11"
    },
         {
      "ID": "1790",
      "Nome": "Cristiano Otoni",
      "Estado": "11"
    },
         {
      "ID": "1791",
      "Nome": "Cristina",
      "Estado": "11"
    },
         {
      "ID": "1792",
      "Nome": "Crucilândia",
      "Estado": "11"
    },
         {
      "ID": "1793",
      "Nome": "Cruzeiro da Fortaleza",
      "Estado": "11"
    },
         {
      "ID": "1794",
      "Nome": "Cruzília",
      "Estado": "11"
    },
         {
      "ID": "1795",
      "Nome": "Cuparaque",
      "Estado": "11"
    },
         {
      "ID": "1796",
      "Nome": "Curral de Dentro",
      "Estado": "11"
    },
         {
      "ID": "1797",
      "Nome": "Curvelo",
      "Estado": "11"
    },
         {
      "ID": "1798",
      "Nome": "Datas",
      "Estado": "11"
    },
         {
      "ID": "1799",
      "Nome": "Delfim Moreira",
      "Estado": "11"
    },
         {
      "ID": "1800",
      "Nome": "Delfinópolis",
      "Estado": "11"
    },
         {
      "ID": "1801",
      "Nome": "Delta",
      "Estado": "11"
    },
         {
      "ID": "1802",
      "Nome": "Descoberto",
      "Estado": "11"
    },
         {
      "ID": "1803",
      "Nome": "Desterro de Entre Rios",
      "Estado": "11"
    },
         {
      "ID": "1804",
      "Nome": "Desterro do Melo",
      "Estado": "11"
    },
         {
      "ID": "1805",
      "Nome": "Diamantina",
      "Estado": "11"
    },
         {
      "ID": "1806",
      "Nome": "Diogo de Vasconcelos",
      "Estado": "11"
    },
         {
      "ID": "1807",
      "Nome": "Dionísio",
      "Estado": "11"
    },
         {
      "ID": "1808",
      "Nome": "Divinésia",
      "Estado": "11"
    },
         {
      "ID": "1809",
      "Nome": "Divino",
      "Estado": "11"
    },
         {
      "ID": "1810",
      "Nome": "Divino das Laranjeiras",
      "Estado": "11"
    },
         {
      "ID": "1811",
      "Nome": "Divinolândia de Minas",
      "Estado": "11"
    },
         {
      "ID": "1812",
      "Nome": "Divinópolis",
      "Estado": "11"
    },
         {
      "ID": "1813",
      "Nome": "Divisa Alegre",
      "Estado": "11"
    },
         {
      "ID": "1814",
      "Nome": "Divisa Nova",
      "Estado": "11"
    },
         {
      "ID": "1815",
      "Nome": "Divisópolis",
      "Estado": "11"
    },
         {
      "ID": "1816",
      "Nome": "Dom Bosco",
      "Estado": "11"
    },
         {
      "ID": "1817",
      "Nome": "Dom Cavati",
      "Estado": "11"
    },
         {
      "ID": "1818",
      "Nome": "Dom Joaquim",
      "Estado": "11"
    },
         {
      "ID": "1819",
      "Nome": "Dom Silvério",
      "Estado": "11"
    },
         {
      "ID": "1820",
      "Nome": "Dom Viçoso",
      "Estado": "11"
    },
         {
      "ID": "1821",
      "Nome": "Dona Eusébia",
      "Estado": "11"
    },
         {
      "ID": "1822",
      "Nome": "Dores de Campos",
      "Estado": "11"
    },
         {
      "ID": "1823",
      "Nome": "Dores de Guanhães",
      "Estado": "11"
    },
         {
      "ID": "1824",
      "Nome": "Dores do Indaiá",
      "Estado": "11"
    },
         {
      "ID": "1825",
      "Nome": "Dores do Turvo",
      "Estado": "11"
    },
         {
      "ID": "1826",
      "Nome": "Doresópolis",
      "Estado": "11"
    },
         {
      "ID": "1827",
      "Nome": "Douradoquara",
      "Estado": "11"
    },
         {
      "ID": "1828",
      "Nome": "Durandé",
      "Estado": "11"
    },
         {
      "ID": "1829",
      "Nome": "Elói Mendes",
      "Estado": "11"
    },
         {
      "ID": "1830",
      "Nome": "Engenheiro Caldas",
      "Estado": "11"
    },
         {
      "ID": "1831",
      "Nome": "Engenheiro Navarro",
      "Estado": "11"
    },
         {
      "ID": "1832",
      "Nome": "Entre Folhas",
      "Estado": "11"
    },
         {
      "ID": "1833",
      "Nome": "Entre Rios de Minas",
      "Estado": "11"
    },
         {
      "ID": "1834",
      "Nome": "Ervália",
      "Estado": "11"
    },
         {
      "ID": "1835",
      "Nome": "Esmeraldas",
      "Estado": "11"
    },
         {
      "ID": "1836",
      "Nome": "Espera Feliz",
      "Estado": "11"
    },
         {
      "ID": "1837",
      "Nome": "Espinosa",
      "Estado": "11"
    },
         {
      "ID": "1838",
      "Nome": "Espírito Santo do Dourado",
      "Estado": "11"
    },
         {
      "ID": "1839",
      "Nome": "Estiva",
      "Estado": "11"
    },
         {
      "ID": "1840",
      "Nome": "Estrela Dalva",
      "Estado": "11"
    },
         {
      "ID": "1841",
      "Nome": "Estrela do Indaiá",
      "Estado": "11"
    },
         {
      "ID": "1842",
      "Nome": "Estrela do Sul",
      "Estado": "11"
    },
         {
      "ID": "1843",
      "Nome": "Eugenópolis",
      "Estado": "11"
    },
         {
      "ID": "1844",
      "Nome": "Ewbank da Câmara",
      "Estado": "11"
    },
         {
      "ID": "1845",
      "Nome": "Extrema",
      "Estado": "11"
    },
         {
      "ID": "1846",
      "Nome": "Fama",
      "Estado": "11"
    },
         {
      "ID": "1847",
      "Nome": "Faria Lemos",
      "Estado": "11"
    },
         {
      "ID": "1848",
      "Nome": "Felício dos Santos",
      "Estado": "11"
    },
         {
      "ID": "1849",
      "Nome": "Felisburgo",
      "Estado": "11"
    },
         {
      "ID": "1850",
      "Nome": "Felixlândia",
      "Estado": "11"
    },
         {
      "ID": "1851",
      "Nome": "Fernandes Tourinho",
      "Estado": "11"
    },
         {
      "ID": "1852",
      "Nome": "Ferros",
      "Estado": "11"
    },
         {
      "ID": "1853",
      "Nome": "Fervedouro",
      "Estado": "11"
    },
         {
      "ID": "1854",
      "Nome": "Florestal",
      "Estado": "11"
    },
         {
      "ID": "1855",
      "Nome": "Formiga",
      "Estado": "11"
    },
         {
      "ID": "1856",
      "Nome": "Formoso",
      "Estado": "11"
    },
         {
      "ID": "1857",
      "Nome": "Fortaleza de Minas",
      "Estado": "11"
    },
         {
      "ID": "1858",
      "Nome": "Fortuna de Minas",
      "Estado": "11"
    },
         {
      "ID": "1859",
      "Nome": "Francisco Badaró",
      "Estado": "11"
    },
         {
      "ID": "1860",
      "Nome": "Francisco Dumont",
      "Estado": "11"
    },
         {
      "ID": "1861",
      "Nome": "Francisco Sá",
      "Estado": "11"
    },
         {
      "ID": "1862",
      "Nome": "Franciscópolis",
      "Estado": "11"
    },
         {
      "ID": "1863",
      "Nome": "Frei Gaspar",
      "Estado": "11"
    },
         {
      "ID": "1864",
      "Nome": "Frei Inocêncio",
      "Estado": "11"
    },
         {
      "ID": "1865",
      "Nome": "Frei Lagonegro",
      "Estado": "11"
    },
         {
      "ID": "1866",
      "Nome": "Fronteira",
      "Estado": "11"
    },
         {
      "ID": "1867",
      "Nome": "Fronteira dos Vales",
      "Estado": "11"
    },
         {
      "ID": "1868",
      "Nome": "Fruta de Leite",
      "Estado": "11"
    },
         {
      "ID": "1869",
      "Nome": "Frutal",
      "Estado": "11"
    },
         {
      "ID": "1870",
      "Nome": "Funilândia",
      "Estado": "11"
    },
         {
      "ID": "1871",
      "Nome": "Galiléia",
      "Estado": "11"
    },
         {
      "ID": "1872",
      "Nome": "Gameleiras",
      "Estado": "11"
    },
         {
      "ID": "1873",
      "Nome": "Glaucilândia",
      "Estado": "11"
    },
         {
      "ID": "1874",
      "Nome": "Goiabeira",
      "Estado": "11"
    },
         {
      "ID": "1875",
      "Nome": "Goianá",
      "Estado": "11"
    },
         {
      "ID": "1876",
      "Nome": "Gonçalves",
      "Estado": "11"
    },
         {
      "ID": "1877",
      "Nome": "Gonzaga",
      "Estado": "11"
    },
         {
      "ID": "1878",
      "Nome": "Gouveia",
      "Estado": "11"
    },
         {
      "ID": "1879",
      "Nome": "Governador Valadares",
      "Estado": "11"
    },
         {
      "ID": "1880",
      "Nome": "Grão Mogol",
      "Estado": "11"
    },
         {
      "ID": "1881",
      "Nome": "Grupiara",
      "Estado": "11"
    },
         {
      "ID": "1882",
      "Nome": "Guanhães",
      "Estado": "11"
    },
         {
      "ID": "1883",
      "Nome": "Guapé",
      "Estado": "11"
    },
         {
      "ID": "1884",
      "Nome": "Guaraciaba",
      "Estado": "11"
    },
         {
      "ID": "1885",
      "Nome": "Guaraciama",
      "Estado": "11"
    },
         {
      "ID": "1886",
      "Nome": "Guaranésia",
      "Estado": "11"
    },
         {
      "ID": "1887",
      "Nome": "Guarani",
      "Estado": "11"
    },
         {
      "ID": "1888",
      "Nome": "Guarará",
      "Estado": "11"
    },
         {
      "ID": "1889",
      "Nome": "Guarda-Mor",
      "Estado": "11"
    },
         {
      "ID": "1890",
      "Nome": "Guaxupé",
      "Estado": "11"
    },
         {
      "ID": "1891",
      "Nome": "Guidoval",
      "Estado": "11"
    },
         {
      "ID": "1892",
      "Nome": "Guimarânia",
      "Estado": "11"
    },
         {
      "ID": "1893",
      "Nome": "Guiricema",
      "Estado": "11"
    },
         {
      "ID": "1894",
      "Nome": "Gurinhatã",
      "Estado": "11"
    },
         {
      "ID": "1895",
      "Nome": "Heliodora",
      "Estado": "11"
    },
         {
      "ID": "1896",
      "Nome": "Iapu",
      "Estado": "11"
    },
         {
      "ID": "1897",
      "Nome": "Ibertioga",
      "Estado": "11"
    },
         {
      "ID": "1898",
      "Nome": "Ibiá",
      "Estado": "11"
    },
         {
      "ID": "1899",
      "Nome": "Ibiaí",
      "Estado": "11"
    },
         {
      "ID": "1900",
      "Nome": "Ibiracatu",
      "Estado": "11"
    },
         {
      "ID": "1901",
      "Nome": "Ibiraci",
      "Estado": "11"
    },
         {
      "ID": "1902",
      "Nome": "Ibirité",
      "Estado": "11"
    },
         {
      "ID": "1903",
      "Nome": "Ibitiúra de Minas",
      "Estado": "11"
    },
         {
      "ID": "1904",
      "Nome": "Ibituruna",
      "Estado": "11"
    },
         {
      "ID": "1905",
      "Nome": "Icaraí de Minas",
      "Estado": "11"
    },
         {
      "ID": "1906",
      "Nome": "Igarapé",
      "Estado": "11"
    },
         {
      "ID": "1907",
      "Nome": "Igaratinga",
      "Estado": "11"
    },
         {
      "ID": "1908",
      "Nome": "Iguatama",
      "Estado": "11"
    },
         {
      "ID": "1909",
      "Nome": "Ijaci",
      "Estado": "11"
    },
         {
      "ID": "1910",
      "Nome": "Ilicínea",
      "Estado": "11"
    },
         {
      "ID": "1911",
      "Nome": "Imbé de Minas",
      "Estado": "11"
    },
         {
      "ID": "1912",
      "Nome": "Inconfidentes",
      "Estado": "11"
    },
         {
      "ID": "1913",
      "Nome": "Indaiabira",
      "Estado": "11"
    },
         {
      "ID": "1914",
      "Nome": "Indianópolis",
      "Estado": "11"
    },
         {
      "ID": "1915",
      "Nome": "Ingaí",
      "Estado": "11"
    },
         {
      "ID": "1916",
      "Nome": "Inhapim",
      "Estado": "11"
    },
         {
      "ID": "1917",
      "Nome": "Inhaúma",
      "Estado": "11"
    },
         {
      "ID": "1918",
      "Nome": "Inimutaba",
      "Estado": "11"
    },
         {
      "ID": "1919",
      "Nome": "Ipaba",
      "Estado": "11"
    },
         {
      "ID": "1920",
      "Nome": "Ipanema",
      "Estado": "11"
    },
         {
      "ID": "1921",
      "Nome": "Ipatinga",
      "Estado": "11"
    },
         {
      "ID": "1922",
      "Nome": "Ipiaçu",
      "Estado": "11"
    },
         {
      "ID": "1923",
      "Nome": "Ipuiúna",
      "Estado": "11"
    },
         {
      "ID": "1924",
      "Nome": "Iraí de Minas",
      "Estado": "11"
    },
         {
      "ID": "1925",
      "Nome": "Itabira",
      "Estado": "11"
    },
         {
      "ID": "1926",
      "Nome": "Itabirinha de Mantena",
      "Estado": "11"
    },
         {
      "ID": "1927",
      "Nome": "Itabirito",
      "Estado": "11"
    },
         {
      "ID": "1928",
      "Nome": "Itacambira",
      "Estado": "11"
    },
         {
      "ID": "1929",
      "Nome": "Itacarambi",
      "Estado": "11"
    },
         {
      "ID": "1930",
      "Nome": "Itaguara",
      "Estado": "11"
    },
         {
      "ID": "1931",
      "Nome": "Itaipé",
      "Estado": "11"
    },
         {
      "ID": "1932",
      "Nome": "Itajubá",
      "Estado": "11"
    },
         {
      "ID": "1933",
      "Nome": "Itamarandiba",
      "Estado": "11"
    },
         {
      "ID": "1934",
      "Nome": "Itamarati de Minas",
      "Estado": "11"
    },
         {
      "ID": "1935",
      "Nome": "Itambacuri",
      "Estado": "11"
    },
         {
      "ID": "1936",
      "Nome": "Itambé do Mato Dentro",
      "Estado": "11"
    },
         {
      "ID": "1937",
      "Nome": "Itamogi",
      "Estado": "11"
    },
         {
      "ID": "1938",
      "Nome": "Itamonte",
      "Estado": "11"
    },
         {
      "ID": "1939",
      "Nome": "Itanhandu",
      "Estado": "11"
    },
         {
      "ID": "1940",
      "Nome": "Itanhomi",
      "Estado": "11"
    },
         {
      "ID": "1941",
      "Nome": "Itaobim",
      "Estado": "11"
    },
         {
      "ID": "1942",
      "Nome": "Itapagipe",
      "Estado": "11"
    },
         {
      "ID": "1943",
      "Nome": "Itapecerica",
      "Estado": "11"
    },
         {
      "ID": "1944",
      "Nome": "Itapeva",
      "Estado": "11"
    },
         {
      "ID": "1945",
      "Nome": "Itatiaiuçu",
      "Estado": "11"
    },
         {
      "ID": "1946",
      "Nome": "Itaú de Minas",
      "Estado": "11"
    },
         {
      "ID": "1947",
      "Nome": "Itaúna",
      "Estado": "11"
    },
         {
      "ID": "1948",
      "Nome": "Itaverava",
      "Estado": "11"
    },
         {
      "ID": "1949",
      "Nome": "Itinga",
      "Estado": "11"
    },
         {
      "ID": "1950",
      "Nome": "Itueta",
      "Estado": "11"
    },
         {
      "ID": "1951",
      "Nome": "Ituiutaba",
      "Estado": "11"
    },
         {
      "ID": "1952",
      "Nome": "Itumirim",
      "Estado": "11"
    },
         {
      "ID": "1953",
      "Nome": "Iturama",
      "Estado": "11"
    },
         {
      "ID": "1954",
      "Nome": "Itutinga",
      "Estado": "11"
    },
         {
      "ID": "1955",
      "Nome": "Jaboticatubas",
      "Estado": "11"
    },
         {
      "ID": "1956",
      "Nome": "Jacinto",
      "Estado": "11"
    },
         {
      "ID": "1957",
      "Nome": "Jacuí",
      "Estado": "11"
    },
         {
      "ID": "1958",
      "Nome": "Jacutinga",
      "Estado": "11"
    },
         {
      "ID": "1959",
      "Nome": "Jaguaraçu",
      "Estado": "11"
    },
         {
      "ID": "1960",
      "Nome": "Jaíba",
      "Estado": "11"
    },
         {
      "ID": "1961",
      "Nome": "Jampruca",
      "Estado": "11"
    },
         {
      "ID": "1962",
      "Nome": "Janaúba",
      "Estado": "11"
    },
         {
      "ID": "1963",
      "Nome": "Januária",
      "Estado": "11"
    },
         {
      "ID": "1964",
      "Nome": "Japaraíba",
      "Estado": "11"
    },
         {
      "ID": "1965",
      "Nome": "Japonvar",
      "Estado": "11"
    },
         {
      "ID": "1966",
      "Nome": "Jeceaba",
      "Estado": "11"
    },
         {
      "ID": "1967",
      "Nome": "Jenipapo de Minas",
      "Estado": "11"
    },
         {
      "ID": "1968",
      "Nome": "Jequeri",
      "Estado": "11"
    },
         {
      "ID": "1969",
      "Nome": "Jequitaí",
      "Estado": "11"
    },
         {
      "ID": "1970",
      "Nome": "Jequitibá",
      "Estado": "11"
    },
         {
      "ID": "1971",
      "Nome": "Jequitinhonha",
      "Estado": "11"
    },
         {
      "ID": "1972",
      "Nome": "Jesuânia",
      "Estado": "11"
    },
         {
      "ID": "1973",
      "Nome": "Joaíma",
      "Estado": "11"
    },
         {
      "ID": "1974",
      "Nome": "Joanésia",
      "Estado": "11"
    },
         {
      "ID": "1975",
      "Nome": "João Monlevade",
      "Estado": "11"
    },
         {
      "ID": "1976",
      "Nome": "João Pinheiro",
      "Estado": "11"
    },
         {
      "ID": "1977",
      "Nome": "Joaquim Felício",
      "Estado": "11"
    },
         {
      "ID": "1978",
      "Nome": "Jordânia",
      "Estado": "11"
    },
         {
      "ID": "1979",
      "Nome": "José Gonçalves de Minas",
      "Estado": "11"
    },
         {
      "ID": "1980",
      "Nome": "José Raydan",
      "Estado": "11"
    },
         {
      "ID": "1981",
      "Nome": "Josenópolis",
      "Estado": "11"
    },
         {
      "ID": "1982",
      "Nome": "Juatuba",
      "Estado": "11"
    },
         {
      "ID": "1983",
      "Nome": "Juiz de Fora",
      "Estado": "11"
    },
         {
      "ID": "1984",
      "Nome": "Juramento",
      "Estado": "11"
    },
         {
      "ID": "1985",
      "Nome": "Juruaia",
      "Estado": "11"
    },
         {
      "ID": "1986",
      "Nome": "Juvenília",
      "Estado": "11"
    },
         {
      "ID": "1987",
      "Nome": "Ladainha",
      "Estado": "11"
    },
         {
      "ID": "1988",
      "Nome": "Lagamar",
      "Estado": "11"
    },
         {
      "ID": "1989",
      "Nome": "Lagoa da Prata",
      "Estado": "11"
    },
         {
      "ID": "1990",
      "Nome": "Lagoa dos Patos",
      "Estado": "11"
    },
         {
      "ID": "1991",
      "Nome": "Lagoa Dourada",
      "Estado": "11"
    },
         {
      "ID": "1992",
      "Nome": "Lagoa Formosa",
      "Estado": "11"
    },
         {
      "ID": "1993",
      "Nome": "Lagoa Grande",
      "Estado": "11"
    },
         {
      "ID": "1994",
      "Nome": "Lagoa Santa",
      "Estado": "11"
    },
         {
      "ID": "1995",
      "Nome": "Lajinha",
      "Estado": "11"
    },
         {
      "ID": "1996",
      "Nome": "Lambari",
      "Estado": "11"
    },
         {
      "ID": "1997",
      "Nome": "Lamim",
      "Estado": "11"
    },
         {
      "ID": "1998",
      "Nome": "Laranjal",
      "Estado": "11"
    },
         {
      "ID": "1999",
      "Nome": "Lassance",
      "Estado": "11"
    },
         {
      "ID": "2000",
      "Nome": "Lavras",
      "Estado": "11"
    },
         {
      "ID": "2001",
      "Nome": "Leandro Ferreira",
      "Estado": "11"
    },
         {
      "ID": "2002",
      "Nome": "Leme do Prado",
      "Estado": "11"
    },
         {
      "ID": "2003",
      "Nome": "Leopoldina",
      "Estado": "11"
    },
         {
      "ID": "2004",
      "Nome": "Liberdade",
      "Estado": "11"
    },
         {
      "ID": "2005",
      "Nome": "Lima Duarte",
      "Estado": "11"
    },
         {
      "ID": "2006",
      "Nome": "Limeira do Oeste",
      "Estado": "11"
    },
         {
      "ID": "2007",
      "Nome": "Lontra",
      "Estado": "11"
    },
         {
      "ID": "2008",
      "Nome": "Luisburgo",
      "Estado": "11"
    },
         {
      "ID": "2009",
      "Nome": "Luislândia",
      "Estado": "11"
    },
         {
      "ID": "2010",
      "Nome": "Luminárias",
      "Estado": "11"
    },
         {
      "ID": "2011",
      "Nome": "Luz",
      "Estado": "11"
    },
         {
      "ID": "2012",
      "Nome": "Machacalis",
      "Estado": "11"
    },
         {
      "ID": "2013",
      "Nome": "Machado",
      "Estado": "11"
    },
         {
      "ID": "2014",
      "Nome": "Madre de Deus de Minas",
      "Estado": "11"
    },
         {
      "ID": "2015",
      "Nome": "Malacacheta",
      "Estado": "11"
    },
         {
      "ID": "2016",
      "Nome": "Mamonas",
      "Estado": "11"
    },
         {
      "ID": "2017",
      "Nome": "Manga",
      "Estado": "11"
    },
         {
      "ID": "2018",
      "Nome": "Manhuaçu",
      "Estado": "11"
    },
         {
      "ID": "2019",
      "Nome": "Manhumirim",
      "Estado": "11"
    },
         {
      "ID": "2020",
      "Nome": "Mantena",
      "Estado": "11"
    },
         {
      "ID": "2021",
      "Nome": "Mar de Espanha",
      "Estado": "11"
    },
         {
      "ID": "2022",
      "Nome": "Maravilhas",
      "Estado": "11"
    },
         {
      "ID": "2023",
      "Nome": "Maria da Fé",
      "Estado": "11"
    },
         {
      "ID": "2024",
      "Nome": "Mariana",
      "Estado": "11"
    },
         {
      "ID": "2025",
      "Nome": "Marilac",
      "Estado": "11"
    },
         {
      "ID": "2026",
      "Nome": "Mário Campos",
      "Estado": "11"
    },
         {
      "ID": "2027",
      "Nome": "Maripá de Minas",
      "Estado": "11"
    },
         {
      "ID": "2028",
      "Nome": "Marliéria",
      "Estado": "11"
    },
         {
      "ID": "2029",
      "Nome": "Marmelópolis",
      "Estado": "11"
    },
         {
      "ID": "2030",
      "Nome": "Martinho Campos",
      "Estado": "11"
    },
         {
      "ID": "2031",
      "Nome": "Martins Soares",
      "Estado": "11"
    },
         {
      "ID": "2032",
      "Nome": "Mata Verde",
      "Estado": "11"
    },
         {
      "ID": "2033",
      "Nome": "Materlândia",
      "Estado": "11"
    },
         {
      "ID": "2034",
      "Nome": "Mateus Leme",
      "Estado": "11"
    },
         {
      "ID": "2035",
      "Nome": "Mathias Lobato",
      "Estado": "11"
    },
         {
      "ID": "2036",
      "Nome": "Matias Barbosa",
      "Estado": "11"
    },
         {
      "ID": "2037",
      "Nome": "Matias Cardoso",
      "Estado": "11"
    },
         {
      "ID": "2038",
      "Nome": "Matipó",
      "Estado": "11"
    },
         {
      "ID": "2039",
      "Nome": "Mato Verde",
      "Estado": "11"
    },
         {
      "ID": "2040",
      "Nome": "Matozinhos",
      "Estado": "11"
    },
         {
      "ID": "2041",
      "Nome": "Matutina",
      "Estado": "11"
    },
         {
      "ID": "2042",
      "Nome": "Medeiros",
      "Estado": "11"
    },
         {
      "ID": "2043",
      "Nome": "Medina",
      "Estado": "11"
    },
         {
      "ID": "2044",
      "Nome": "Mendes Pimentel",
      "Estado": "11"
    },
         {
      "ID": "2045",
      "Nome": "Mercês",
      "Estado": "11"
    },
         {
      "ID": "2046",
      "Nome": "Mesquita",
      "Estado": "11"
    },
         {
      "ID": "2047",
      "Nome": "Minas Novas",
      "Estado": "11"
    },
         {
      "ID": "2048",
      "Nome": "Minduri",
      "Estado": "11"
    },
         {
      "ID": "2049",
      "Nome": "Mirabela",
      "Estado": "11"
    },
         {
      "ID": "2050",
      "Nome": "Miradouro",
      "Estado": "11"
    },
         {
      "ID": "2051",
      "Nome": "Miraí",
      "Estado": "11"
    },
         {
      "ID": "2052",
      "Nome": "Miravânia",
      "Estado": "11"
    },
         {
      "ID": "2053",
      "Nome": "Moeda",
      "Estado": "11"
    },
         {
      "ID": "2054",
      "Nome": "Moema",
      "Estado": "11"
    },
         {
      "ID": "2055",
      "Nome": "Monjolos",
      "Estado": "11"
    },
         {
      "ID": "2056",
      "Nome": "Monsenhor Paulo",
      "Estado": "11"
    },
         {
      "ID": "2057",
      "Nome": "Montalvânia",
      "Estado": "11"
    },
         {
      "ID": "2058",
      "Nome": "Monte Alegre de Minas",
      "Estado": "11"
    },
         {
      "ID": "2059",
      "Nome": "Monte Azul",
      "Estado": "11"
    },
         {
      "ID": "2060",
      "Nome": "Monte Belo",
      "Estado": "11"
    },
         {
      "ID": "2061",
      "Nome": "Monte Carmelo",
      "Estado": "11"
    },
         {
      "ID": "2062",
      "Nome": "Monte Formoso",
      "Estado": "11"
    },
         {
      "ID": "2063",
      "Nome": "Monte Santo de Minas",
      "Estado": "11"
    },
         {
      "ID": "2064",
      "Nome": "Monte Sião",
      "Estado": "11"
    },
         {
      "ID": "2065",
      "Nome": "Montes Claros",
      "Estado": "11"
    },
         {
      "ID": "2066",
      "Nome": "Montezuma",
      "Estado": "11"
    },
         {
      "ID": "2067",
      "Nome": "Morada Nova de Minas",
      "Estado": "11"
    },
         {
      "ID": "2068",
      "Nome": "Morro da Garça",
      "Estado": "11"
    },
         {
      "ID": "2069",
      "Nome": "Morro do Pilar",
      "Estado": "11"
    },
         {
      "ID": "2070",
      "Nome": "Munhoz",
      "Estado": "11"
    },
         {
      "ID": "2071",
      "Nome": "Muriaé",
      "Estado": "11"
    },
         {
      "ID": "2072",
      "Nome": "Mutum",
      "Estado": "11"
    },
         {
      "ID": "2073",
      "Nome": "Muzambinho",
      "Estado": "11"
    },
         {
      "ID": "2074",
      "Nome": "Nacip Raydan",
      "Estado": "11"
    },
         {
      "ID": "2075",
      "Nome": "Nanuque",
      "Estado": "11"
    },
         {
      "ID": "2076",
      "Nome": "Naque",
      "Estado": "11"
    },
         {
      "ID": "2077",
      "Nome": "Natalândia",
      "Estado": "11"
    },
         {
      "ID": "2078",
      "Nome": "Natércia",
      "Estado": "11"
    },
         {
      "ID": "2079",
      "Nome": "Nazareno",
      "Estado": "11"
    },
         {
      "ID": "2080",
      "Nome": "Nepomuceno",
      "Estado": "11"
    },
         {
      "ID": "2081",
      "Nome": "Ninheira",
      "Estado": "11"
    },
         {
      "ID": "2082",
      "Nome": "Nova Belém",
      "Estado": "11"
    },
         {
      "ID": "2083",
      "Nome": "Nova Era",
      "Estado": "11"
    },
         {
      "ID": "2084",
      "Nome": "Nova Lima",
      "Estado": "11"
    },
         {
      "ID": "2085",
      "Nome": "Nova Módica",
      "Estado": "11"
    },
         {
      "ID": "2086",
      "Nome": "Nova Ponte",
      "Estado": "11"
    },
         {
      "ID": "2087",
      "Nome": "Nova Porteirinha",
      "Estado": "11"
    },
         {
      "ID": "2088",
      "Nome": "Nova Resende",
      "Estado": "11"
    },
         {
      "ID": "2089",
      "Nome": "Nova Serrana",
      "Estado": "11"
    },
         {
      "ID": "2090",
      "Nome": "Nova União",
      "Estado": "11"
    },
         {
      "ID": "2091",
      "Nome": "Novo Cruzeiro",
      "Estado": "11"
    },
         {
      "ID": "2092",
      "Nome": "Novo Oriente de Minas",
      "Estado": "11"
    },
         {
      "ID": "2093",
      "Nome": "Novorizonte",
      "Estado": "11"
    },
         {
      "ID": "2094",
      "Nome": "Olaria",
      "Estado": "11"
    },
         {
      "ID": "2095",
      "Nome": "Olhos-d`Água",
      "Estado": "11"
    },
         {
      "ID": "2096",
      "Nome": "Olímpio Noronha",
      "Estado": "11"
    },
         {
      "ID": "2097",
      "Nome": "Oliveira",
      "Estado": "11"
    },
         {
      "ID": "2098",
      "Nome": "Oliveira Fortes",
      "Estado": "11"
    },
         {
      "ID": "2099",
      "Nome": "Onça de Pitangui",
      "Estado": "11"
    },
         {
      "ID": "2100",
      "Nome": "Oratórios",
      "Estado": "11"
    },
         {
      "ID": "2101",
      "Nome": "Orizânia",
      "Estado": "11"
    },
         {
      "ID": "2102",
      "Nome": "Ouro Branco",
      "Estado": "11"
    },
         {
      "ID": "2103",
      "Nome": "Ouro Fino",
      "Estado": "11"
    },
         {
      "ID": "2104",
      "Nome": "Ouro Preto",
      "Estado": "11"
    },
         {
      "ID": "2105",
      "Nome": "Ouro Verde de Minas",
      "Estado": "11"
    },
         {
      "ID": "2106",
      "Nome": "Padre Carvalho",
      "Estado": "11"
    },
         {
      "ID": "2107",
      "Nome": "Padre Paraíso",
      "Estado": "11"
    },
         {
      "ID": "2108",
      "Nome": "Pai Pedro",
      "Estado": "11"
    },
         {
      "ID": "2109",
      "Nome": "Paineiras",
      "Estado": "11"
    },
         {
      "ID": "2110",
      "Nome": "Pains",
      "Estado": "11"
    },
         {
      "ID": "2111",
      "Nome": "Paiva",
      "Estado": "11"
    },
         {
      "ID": "2112",
      "Nome": "Palma",
      "Estado": "11"
    },
         {
      "ID": "2113",
      "Nome": "Palmópolis",
      "Estado": "11"
    },
         {
      "ID": "2114",
      "Nome": "Papagaios",
      "Estado": "11"
    },
         {
      "ID": "2115",
      "Nome": "Pará de Minas",
      "Estado": "11"
    },
         {
      "ID": "2116",
      "Nome": "Paracatu",
      "Estado": "11"
    },
         {
      "ID": "2117",
      "Nome": "Paraguaçu",
      "Estado": "11"
    },
         {
      "ID": "2118",
      "Nome": "Paraisópolis",
      "Estado": "11"
    },
         {
      "ID": "2119",
      "Nome": "Paraopeba",
      "Estado": "11"
    },
         {
      "ID": "2120",
      "Nome": "Passa Quatro",
      "Estado": "11"
    },
         {
      "ID": "2121",
      "Nome": "Passa Tempo",
      "Estado": "11"
    },
         {
      "ID": "2122",
      "Nome": "Passabém",
      "Estado": "11"
    },
         {
      "ID": "2123",
      "Nome": "Passa-Vinte",
      "Estado": "11"
    },
         {
      "ID": "2124",
      "Nome": "Passos",
      "Estado": "11"
    },
         {
      "ID": "2125",
      "Nome": "Patis",
      "Estado": "11"
    },
         {
      "ID": "2126",
      "Nome": "Patos de Minas",
      "Estado": "11"
    },
         {
      "ID": "2127",
      "Nome": "Patrocínio",
      "Estado": "11"
    },
         {
      "ID": "2128",
      "Nome": "Patrocínio do Muriaé",
      "Estado": "11"
    },
         {
      "ID": "2129",
      "Nome": "Paula Cândido",
      "Estado": "11"
    },
         {
      "ID": "2130",
      "Nome": "Paulistas",
      "Estado": "11"
    },
         {
      "ID": "2131",
      "Nome": "Pavão",
      "Estado": "11"
    },
         {
      "ID": "2132",
      "Nome": "Peçanha",
      "Estado": "11"
    },
         {
      "ID": "2133",
      "Nome": "Pedra Azul",
      "Estado": "11"
    },
         {
      "ID": "2134",
      "Nome": "Pedra Bonita",
      "Estado": "11"
    },
         {
      "ID": "2135",
      "Nome": "Pedra do Anta",
      "Estado": "11"
    },
         {
      "ID": "2136",
      "Nome": "Pedra do Indaiá",
      "Estado": "11"
    },
         {
      "ID": "2137",
      "Nome": "Pedra Dourada",
      "Estado": "11"
    },
         {
      "ID": "2138",
      "Nome": "Pedralva",
      "Estado": "11"
    },
         {
      "ID": "2139",
      "Nome": "Pedras de Maria da Cruz",
      "Estado": "11"
    },
         {
      "ID": "2140",
      "Nome": "Pedrinópolis",
      "Estado": "11"
    },
         {
      "ID": "2141",
      "Nome": "Pedro Leopoldo",
      "Estado": "11"
    },
         {
      "ID": "2142",
      "Nome": "Pedro Teixeira",
      "Estado": "11"
    },
         {
      "ID": "2143",
      "Nome": "Pequeri",
      "Estado": "11"
    },
         {
      "ID": "2144",
      "Nome": "Pequi",
      "Estado": "11"
    },
         {
      "ID": "2145",
      "Nome": "Perdigão",
      "Estado": "11"
    },
         {
      "ID": "2146",
      "Nome": "Perdizes",
      "Estado": "11"
    },
         {
      "ID": "2147",
      "Nome": "Perdões",
      "Estado": "11"
    },
         {
      "ID": "2148",
      "Nome": "Periquito",
      "Estado": "11"
    },
         {
      "ID": "2149",
      "Nome": "Pescador",
      "Estado": "11"
    },
         {
      "ID": "2150",
      "Nome": "Piau",
      "Estado": "11"
    },
         {
      "ID": "2151",
      "Nome": "Piedade de Caratinga",
      "Estado": "11"
    },
         {
      "ID": "2152",
      "Nome": "Piedade de Ponte Nova",
      "Estado": "11"
    },
         {
      "ID": "2153",
      "Nome": "Piedade do Rio Grande",
      "Estado": "11"
    },
         {
      "ID": "2154",
      "Nome": "Piedade dos Gerais",
      "Estado": "11"
    },
         {
      "ID": "2155",
      "Nome": "Pimenta",
      "Estado": "11"
    },
         {
      "ID": "2156",
      "Nome": "Pingo-d`Água",
      "Estado": "11"
    },
         {
      "ID": "2157",
      "Nome": "Pintópolis",
      "Estado": "11"
    },
         {
      "ID": "2158",
      "Nome": "Piracema",
      "Estado": "11"
    },
         {
      "ID": "2159",
      "Nome": "Pirajuba",
      "Estado": "11"
    },
         {
      "ID": "2160",
      "Nome": "Piranga",
      "Estado": "11"
    },
         {
      "ID": "2161",
      "Nome": "Piranguçu",
      "Estado": "11"
    },
         {
      "ID": "2162",
      "Nome": "Piranguinho",
      "Estado": "11"
    },
         {
      "ID": "2163",
      "Nome": "Pirapetinga",
      "Estado": "11"
    },
         {
      "ID": "2164",
      "Nome": "Pirapora",
      "Estado": "11"
    },
         {
      "ID": "2165",
      "Nome": "Piraúba",
      "Estado": "11"
    },
         {
      "ID": "2166",
      "Nome": "Pitangui",
      "Estado": "11"
    },
         {
      "ID": "2167",
      "Nome": "Piumhi",
      "Estado": "11"
    },
         {
      "ID": "2168",
      "Nome": "Planura",
      "Estado": "11"
    },
         {
      "ID": "2169",
      "Nome": "Poço Fundo",
      "Estado": "11"
    },
         {
      "ID": "2170",
      "Nome": "Poços de Caldas",
      "Estado": "11"
    },
         {
      "ID": "2171",
      "Nome": "Pocrane",
      "Estado": "11"
    },
         {
      "ID": "2172",
      "Nome": "Pompéu",
      "Estado": "11"
    },
         {
      "ID": "2173",
      "Nome": "Ponte Nova",
      "Estado": "11"
    },
         {
      "ID": "2174",
      "Nome": "Ponto Chique",
      "Estado": "11"
    },
         {
      "ID": "2175",
      "Nome": "Ponto dos Volantes",
      "Estado": "11"
    },
         {
      "ID": "2176",
      "Nome": "Porteirinha",
      "Estado": "11"
    },
         {
      "ID": "2177",
      "Nome": "Porto Firme",
      "Estado": "11"
    },
         {
      "ID": "2178",
      "Nome": "Poté",
      "Estado": "11"
    },
         {
      "ID": "2179",
      "Nome": "Pouso Alegre",
      "Estado": "11"
    },
         {
      "ID": "2180",
      "Nome": "Pouso Alto",
      "Estado": "11"
    },
         {
      "ID": "2181",
      "Nome": "Prados",
      "Estado": "11"
    },
         {
      "ID": "2182",
      "Nome": "Prata",
      "Estado": "11"
    },
         {
      "ID": "2183",
      "Nome": "Pratápolis",
      "Estado": "11"
    },
         {
      "ID": "2184",
      "Nome": "Pratinha",
      "Estado": "11"
    },
         {
      "ID": "2185",
      "Nome": "Presidente Bernardes",
      "Estado": "11"
    },
         {
      "ID": "2186",
      "Nome": "Presidente Juscelino",
      "Estado": "11"
    },
         {
      "ID": "2187",
      "Nome": "Presidente Kubitschek",
      "Estado": "11"
    },
         {
      "ID": "2188",
      "Nome": "Presidente Olegário",
      "Estado": "11"
    },
         {
      "ID": "2189",
      "Nome": "Prudente de Morais",
      "Estado": "11"
    },
         {
      "ID": "2190",
      "Nome": "Quartel Geral",
      "Estado": "11"
    },
         {
      "ID": "2191",
      "Nome": "Queluzito",
      "Estado": "11"
    },
         {
      "ID": "2192",
      "Nome": "Raposos",
      "Estado": "11"
    },
         {
      "ID": "2193",
      "Nome": "Raul Soares",
      "Estado": "11"
    },
         {
      "ID": "2194",
      "Nome": "Recreio",
      "Estado": "11"
    },
         {
      "ID": "2195",
      "Nome": "Reduto",
      "Estado": "11"
    },
         {
      "ID": "2196",
      "Nome": "Resende Costa",
      "Estado": "11"
    },
         {
      "ID": "2197",
      "Nome": "Resplendor",
      "Estado": "11"
    },
         {
      "ID": "2198",
      "Nome": "Ressaquinha",
      "Estado": "11"
    },
         {
      "ID": "2199",
      "Nome": "Riachinho",
      "Estado": "11"
    },
         {
      "ID": "2200",
      "Nome": "Riacho dos Machados",
      "Estado": "11"
    },
         {
      "ID": "2201",
      "Nome": "Ribeirão das Neves",
      "Estado": "11"
    },
         {
      "ID": "2202",
      "Nome": "Ribeirão Vermelho",
      "Estado": "11"
    },
         {
      "ID": "2203",
      "Nome": "Rio Acima",
      "Estado": "11"
    },
         {
      "ID": "2204",
      "Nome": "Rio Casca",
      "Estado": "11"
    },
         {
      "ID": "2205",
      "Nome": "Rio do Prado",
      "Estado": "11"
    },
         {
      "ID": "2206",
      "Nome": "Rio Doce",
      "Estado": "11"
    },
         {
      "ID": "2207",
      "Nome": "Rio Espera",
      "Estado": "11"
    },
         {
      "ID": "2208",
      "Nome": "Rio Manso",
      "Estado": "11"
    },
         {
      "ID": "2209",
      "Nome": "Rio Novo",
      "Estado": "11"
    },
         {
      "ID": "2210",
      "Nome": "Rio Paranaíba",
      "Estado": "11"
    },
         {
      "ID": "2211",
      "Nome": "Rio Pardo de Minas",
      "Estado": "11"
    },
         {
      "ID": "2212",
      "Nome": "Rio Piracicaba",
      "Estado": "11"
    },
         {
      "ID": "2213",
      "Nome": "Rio Pomba",
      "Estado": "11"
    },
         {
      "ID": "2214",
      "Nome": "Rio Preto",
      "Estado": "11"
    },
         {
      "ID": "2215",
      "Nome": "Rio Vermelho",
      "Estado": "11"
    },
         {
      "ID": "2216",
      "Nome": "Ritápolis",
      "Estado": "11"
    },
         {
      "ID": "2217",
      "Nome": "Rochedo de Minas",
      "Estado": "11"
    },
         {
      "ID": "2218",
      "Nome": "Rodeiro",
      "Estado": "11"
    },
         {
      "ID": "2219",
      "Nome": "Romaria",
      "Estado": "11"
    },
         {
      "ID": "2220",
      "Nome": "Rosário da Limeira",
      "Estado": "11"
    },
         {
      "ID": "2221",
      "Nome": "Rubelita",
      "Estado": "11"
    },
         {
      "ID": "2222",
      "Nome": "Rubim",
      "Estado": "11"
    },
         {
      "ID": "2223",
      "Nome": "Sabará",
      "Estado": "11"
    },
         {
      "ID": "2224",
      "Nome": "Sabinópolis",
      "Estado": "11"
    },
         {
      "ID": "2225",
      "Nome": "Sacramento",
      "Estado": "11"
    },
         {
      "ID": "2226",
      "Nome": "Salinas",
      "Estado": "11"
    },
         {
      "ID": "2227",
      "Nome": "Salto da Divisa",
      "Estado": "11"
    },
         {
      "ID": "2228",
      "Nome": "Santa Bárbara",
      "Estado": "11"
    },
         {
      "ID": "2229",
      "Nome": "Santa Bárbara do Leste",
      "Estado": "11"
    },
         {
      "ID": "2230",
      "Nome": "Santa Bárbara do Monte Verde",
      "Estado": "11"
    },
         {
      "ID": "2231",
      "Nome": "Santa Bárbara do Tugúrio",
      "Estado": "11"
    },
         {
      "ID": "2232",
      "Nome": "Santa Cruz de Minas",
      "Estado": "11"
    },
         {
      "ID": "2233",
      "Nome": "Santa Cruz de Salinas",
      "Estado": "11"
    },
         {
      "ID": "2234",
      "Nome": "Santa Cruz do Escalvado",
      "Estado": "11"
    },
         {
      "ID": "2235",
      "Nome": "Santa Efigênia de Minas",
      "Estado": "11"
    },
         {
      "ID": "2236",
      "Nome": "Santa Fé de Minas",
      "Estado": "11"
    },
         {
      "ID": "2237",
      "Nome": "Santa Helena de Minas",
      "Estado": "11"
    },
         {
      "ID": "2238",
      "Nome": "Santa Juliana",
      "Estado": "11"
    },
         {
      "ID": "2239",
      "Nome": "Santa Luzia",
      "Estado": "11"
    },
         {
      "ID": "2240",
      "Nome": "Santa Margarida",
      "Estado": "11"
    },
         {
      "ID": "2241",
      "Nome": "Santa Maria de Itabira",
      "Estado": "11"
    },
         {
      "ID": "2242",
      "Nome": "Santa Maria do Salto",
      "Estado": "11"
    },
         {
      "ID": "2243",
      "Nome": "Santa Maria do Suaçuí",
      "Estado": "11"
    },
         {
      "ID": "2244",
      "Nome": "Santa Rita de Caldas",
      "Estado": "11"
    },
         {
      "ID": "2245",
      "Nome": "Santa Rita de Ibitipoca",
      "Estado": "11"
    },
         {
      "ID": "2246",
      "Nome": "Santa Rita de Jacutinga",
      "Estado": "11"
    },
         {
      "ID": "2247",
      "Nome": "Santa Rita de Minas",
      "Estado": "11"
    },
         {
      "ID": "2248",
      "Nome": "Santa Rita do Itueto",
      "Estado": "11"
    },
         {
      "ID": "2249",
      "Nome": "Santa Rita do Sapucaí",
      "Estado": "11"
    },
         {
      "ID": "2250",
      "Nome": "Santa Rosa da Serra",
      "Estado": "11"
    },
         {
      "ID": "2251",
      "Nome": "Santa Vitória",
      "Estado": "11"
    },
         {
      "ID": "2252",
      "Nome": "Santana da Vargem",
      "Estado": "11"
    },
         {
      "ID": "2253",
      "Nome": "Santana de Cataguases",
      "Estado": "11"
    },
         {
      "ID": "2254",
      "Nome": "Santana de Pirapama",
      "Estado": "11"
    },
         {
      "ID": "2255",
      "Nome": "Santana do Deserto",
      "Estado": "11"
    },
         {
      "ID": "2256",
      "Nome": "Santana do Garambéu",
      "Estado": "11"
    },
         {
      "ID": "2257",
      "Nome": "Santana do Jacaré",
      "Estado": "11"
    },
         {
      "ID": "2258",
      "Nome": "Santana do Manhuaçu",
      "Estado": "11"
    },
         {
      "ID": "2259",
      "Nome": "Santana do Paraíso",
      "Estado": "11"
    },
         {
      "ID": "2260",
      "Nome": "Santana do Riacho",
      "Estado": "11"
    },
         {
      "ID": "2261",
      "Nome": "Santana dos Montes",
      "Estado": "11"
    },
         {
      "ID": "2262",
      "Nome": "Santo Antônio do Amparo",
      "Estado": "11"
    },
         {
      "ID": "2263",
      "Nome": "Santo Antônio do Aventureiro",
      "Estado": "11"
    },
         {
      "ID": "2264",
      "Nome": "Santo Antônio do Grama",
      "Estado": "11"
    },
         {
      "ID": "2265",
      "Nome": "Santo Antônio do Itambé",
      "Estado": "11"
    },
         {
      "ID": "2266",
      "Nome": "Santo Antônio do Jacinto",
      "Estado": "11"
    },
         {
      "ID": "2267",
      "Nome": "Santo Antônio do Monte",
      "Estado": "11"
    },
         {
      "ID": "2268",
      "Nome": "Santo Antônio do Retiro",
      "Estado": "11"
    },
         {
      "ID": "2269",
      "Nome": "Santo Antônio do Rio Abaixo",
      "Estado": "11"
    },
         {
      "ID": "2270",
      "Nome": "Santo Hipólito",
      "Estado": "11"
    },
         {
      "ID": "2271",
      "Nome": "Santos Dumont",
      "Estado": "11"
    },
         {
      "ID": "2272",
      "Nome": "São Bento Abade",
      "Estado": "11"
    },
         {
      "ID": "2273",
      "Nome": "São Brás do Suaçuí",
      "Estado": "11"
    },
         {
      "ID": "2274",
      "Nome": "São Domingos das Dores",
      "Estado": "11"
    },
         {
      "ID": "2275",
      "Nome": "São Domingos do Prata",
      "Estado": "11"
    },
         {
      "ID": "2276",
      "Nome": "São Félix de Minas",
      "Estado": "11"
    },
         {
      "ID": "2277",
      "Nome": "São Francisco",
      "Estado": "11"
    },
         {
      "ID": "2278",
      "Nome": "São Francisco de Paula",
      "Estado": "11"
    },
         {
      "ID": "2279",
      "Nome": "São Francisco de Sales",
      "Estado": "11"
    },
         {
      "ID": "2280",
      "Nome": "São Francisco do Glória",
      "Estado": "11"
    },
         {
      "ID": "2281",
      "Nome": "São Geraldo",
      "Estado": "11"
    },
         {
      "ID": "2282",
      "Nome": "São Geraldo da Piedade",
      "Estado": "11"
    },
         {
      "ID": "2283",
      "Nome": "São Geraldo do Baixio",
      "Estado": "11"
    },
         {
      "ID": "2284",
      "Nome": "São Gonçalo do Abaeté",
      "Estado": "11"
    },
         {
      "ID": "2285",
      "Nome": "São Gonçalo do Pará",
      "Estado": "11"
    },
         {
      "ID": "2286",
      "Nome": "São Gonçalo do Rio Abaixo",
      "Estado": "11"
    },
         {
      "ID": "2287",
      "Nome": "São Gonçalo do Rio Preto",
      "Estado": "11"
    },
         {
      "ID": "2288",
      "Nome": "São Gonçalo do Sapucaí",
      "Estado": "11"
    },
         {
      "ID": "2289",
      "Nome": "São Gotardo",
      "Estado": "11"
    },
         {
      "ID": "2290",
      "Nome": "São João Batista do Glória",
      "Estado": "11"
    },
         {
      "ID": "2291",
      "Nome": "São João da Lagoa",
      "Estado": "11"
    },
         {
      "ID": "2292",
      "Nome": "São João da Mata",
      "Estado": "11"
    },
         {
      "ID": "2293",
      "Nome": "São João da Ponte",
      "Estado": "11"
    },
         {
      "ID": "2294",
      "Nome": "São João das Missões",
      "Estado": "11"
    },
         {
      "ID": "2295",
      "Nome": "São João del Rei",
      "Estado": "11"
    },
         {
      "ID": "2296",
      "Nome": "São João do Manhuaçu",
      "Estado": "11"
    },
         {
      "ID": "2297",
      "Nome": "São João do Manteninha",
      "Estado": "11"
    },
         {
      "ID": "2298",
      "Nome": "São João do Oriente",
      "Estado": "11"
    },
         {
      "ID": "2299",
      "Nome": "São João do Pacuí",
      "Estado": "11"
    },
         {
      "ID": "2300",
      "Nome": "São João do Paraíso",
      "Estado": "11"
    },
         {
      "ID": "2301",
      "Nome": "São João Evangelista",
      "Estado": "11"
    },
         {
      "ID": "2302",
      "Nome": "São João Nepomuceno",
      "Estado": "11"
    },
         {
      "ID": "2303",
      "Nome": "São Joaquim de Bicas",
      "Estado": "11"
    },
         {
      "ID": "2304",
      "Nome": "São José da Barra",
      "Estado": "11"
    },
         {
      "ID": "2305",
      "Nome": "São José da Lapa",
      "Estado": "11"
    },
         {
      "ID": "2306",
      "Nome": "São José da Safira",
      "Estado": "11"
    },
         {
      "ID": "2307",
      "Nome": "São José da Varginha",
      "Estado": "11"
    },
         {
      "ID": "2308",
      "Nome": "São José do Alegre",
      "Estado": "11"
    },
         {
      "ID": "2309",
      "Nome": "São José do Divino",
      "Estado": "11"
    },
         {
      "ID": "2310",
      "Nome": "São José do Goiabal",
      "Estado": "11"
    },
         {
      "ID": "2311",
      "Nome": "São José do Jacuri",
      "Estado": "11"
    },
         {
      "ID": "2312",
      "Nome": "São José do Mantimento",
      "Estado": "11"
    },
         {
      "ID": "2313",
      "Nome": "São Lourenço",
      "Estado": "11"
    },
         {
      "ID": "2314",
      "Nome": "São Miguel do Anta",
      "Estado": "11"
    },
         {
      "ID": "2315",
      "Nome": "São Pedro da União",
      "Estado": "11"
    },
         {
      "ID": "2316",
      "Nome": "São Pedro do Suaçuí",
      "Estado": "11"
    },
         {
      "ID": "2317",
      "Nome": "São Pedro dos Ferros",
      "Estado": "11"
    },
         {
      "ID": "2318",
      "Nome": "São Romão",
      "Estado": "11"
    },
         {
      "ID": "2319",
      "Nome": "São Roque de Minas",
      "Estado": "11"
    },
         {
      "ID": "2320",
      "Nome": "São Sebastião da Bela Vista",
      "Estado": "11"
    },
         {
      "ID": "2321",
      "Nome": "São Sebastião da Vargem Alegre",
      "Estado": "11"
    },
         {
      "ID": "2322",
      "Nome": "São Sebastião do Anta",
      "Estado": "11"
    },
         {
      "ID": "2323",
      "Nome": "São Sebastião do Maranhão",
      "Estado": "11"
    },
         {
      "ID": "2324",
      "Nome": "São Sebastião do Oeste",
      "Estado": "11"
    },
         {
      "ID": "2325",
      "Nome": "São Sebastião do Paraíso",
      "Estado": "11"
    },
         {
      "ID": "2326",
      "Nome": "São Sebastião do Rio Preto",
      "Estado": "11"
    },
         {
      "ID": "2327",
      "Nome": "São Sebastião do Rio Verde",
      "Estado": "11"
    },
         {
      "ID": "2328",
      "Nome": "São Thomé das Letras",
      "Estado": "11"
    },
         {
      "ID": "2329",
      "Nome": "São Tiago",
      "Estado": "11"
    },
         {
      "ID": "2330",
      "Nome": "São Tomás de Aquino",
      "Estado": "11"
    },
         {
      "ID": "2331",
      "Nome": "São Vicente de Minas",
      "Estado": "11"
    },
         {
      "ID": "2332",
      "Nome": "Sapucaí-Mirim",
      "Estado": "11"
    },
         {
      "ID": "2333",
      "Nome": "Sardoá",
      "Estado": "11"
    },
         {
      "ID": "2334",
      "Nome": "Sarzedo",
      "Estado": "11"
    },
         {
      "ID": "2335",
      "Nome": "Sem-Peixe",
      "Estado": "11"
    },
         {
      "ID": "2336",
      "Nome": "Senador Amaral",
      "Estado": "11"
    },
         {
      "ID": "2337",
      "Nome": "Senador Cortes",
      "Estado": "11"
    },
         {
      "ID": "2338",
      "Nome": "Senador Firmino",
      "Estado": "11"
    },
         {
      "ID": "2339",
      "Nome": "Senador José Bento",
      "Estado": "11"
    },
         {
      "ID": "2340",
      "Nome": "Senador Modestino Gonçalves",
      "Estado": "11"
    },
         {
      "ID": "2341",
      "Nome": "Senhora de Oliveira",
      "Estado": "11"
    },
         {
      "ID": "2342",
      "Nome": "Senhora do Porto",
      "Estado": "11"
    },
         {
      "ID": "2343",
      "Nome": "Senhora dos Remédios",
      "Estado": "11"
    },
         {
      "ID": "2344",
      "Nome": "Sericita",
      "Estado": "11"
    },
         {
      "ID": "2345",
      "Nome": "Seritinga",
      "Estado": "11"
    },
         {
      "ID": "2346",
      "Nome": "Serra Azul de Minas",
      "Estado": "11"
    },
         {
      "ID": "2347",
      "Nome": "Serra da Saudade",
      "Estado": "11"
    },
         {
      "ID": "2348",
      "Nome": "Serra do Salitre",
      "Estado": "11"
    },
         {
      "ID": "2349",
      "Nome": "Serra dos Aimorés",
      "Estado": "11"
    },
         {
      "ID": "2350",
      "Nome": "Serrania",
      "Estado": "11"
    },
         {
      "ID": "2351",
      "Nome": "Serranópolis de Minas",
      "Estado": "11"
    },
         {
      "ID": "2352",
      "Nome": "Serranos",
      "Estado": "11"
    },
         {
      "ID": "2353",
      "Nome": "Serro",
      "Estado": "11"
    },
         {
      "ID": "2354",
      "Nome": "Sete Lagoas",
      "Estado": "11"
    },
         {
      "ID": "2355",
      "Nome": "Setubinha",
      "Estado": "11"
    },
         {
      "ID": "2356",
      "Nome": "Silveirânia",
      "Estado": "11"
    },
         {
      "ID": "2357",
      "Nome": "Silvianópolis",
      "Estado": "11"
    },
         {
      "ID": "2358",
      "Nome": "Simão Pereira",
      "Estado": "11"
    },
         {
      "ID": "2359",
      "Nome": "Simonésia",
      "Estado": "11"
    },
         {
      "ID": "2360",
      "Nome": "Sobrália",
      "Estado": "11"
    },
         {
      "ID": "2361",
      "Nome": "Soledade de Minas",
      "Estado": "11"
    },
         {
      "ID": "2362",
      "Nome": "Tabuleiro",
      "Estado": "11"
    },
         {
      "ID": "2363",
      "Nome": "Taiobeiras",
      "Estado": "11"
    },
         {
      "ID": "2364",
      "Nome": "Taparuba",
      "Estado": "11"
    },
         {
      "ID": "2365",
      "Nome": "Tapira",
      "Estado": "11"
    },
         {
      "ID": "2366",
      "Nome": "Tapiraí",
      "Estado": "11"
    },
         {
      "ID": "2367",
      "Nome": "Taquaraçu de Minas",
      "Estado": "11"
    },
         {
      "ID": "2368",
      "Nome": "Tarumirim",
      "Estado": "11"
    },
         {
      "ID": "2369",
      "Nome": "Teixeiras",
      "Estado": "11"
    },
         {
      "ID": "2370",
      "Nome": "Teófilo Otoni",
      "Estado": "11"
    },
         {
      "ID": "2371",
      "Nome": "Timóteo",
      "Estado": "11"
    },
         {
      "ID": "2372",
      "Nome": "Tiradentes",
      "Estado": "11"
    },
         {
      "ID": "2373",
      "Nome": "Tiros",
      "Estado": "11"
    },
         {
      "ID": "2374",
      "Nome": "Tocantins",
      "Estado": "11"
    },
         {
      "ID": "2375",
      "Nome": "Tocos do Moji",
      "Estado": "11"
    },
         {
      "ID": "2376",
      "Nome": "Toledo",
      "Estado": "11"
    },
         {
      "ID": "2377",
      "Nome": "Tombos",
      "Estado": "11"
    },
         {
      "ID": "2378",
      "Nome": "Três Corações",
      "Estado": "11"
    },
         {
      "ID": "2379",
      "Nome": "Três Marias",
      "Estado": "11"
    },
         {
      "ID": "2380",
      "Nome": "Três Pontas",
      "Estado": "11"
    },
         {
      "ID": "2381",
      "Nome": "Tumiritinga",
      "Estado": "11"
    },
         {
      "ID": "2382",
      "Nome": "Tupaciguara",
      "Estado": "11"
    },
         {
      "ID": "2383",
      "Nome": "Turmalina",
      "Estado": "11"
    },
         {
      "ID": "2384",
      "Nome": "Turvolândia",
      "Estado": "11"
    },
         {
      "ID": "2385",
      "Nome": "Ubá",
      "Estado": "11"
    },
         {
      "ID": "2386",
      "Nome": "Ubaí",
      "Estado": "11"
    },
         {
      "ID": "2387",
      "Nome": "Ubaporanga",
      "Estado": "11"
    },
         {
      "ID": "2388",
      "Nome": "Uberaba",
      "Estado": "11"
    },
         {
      "ID": "2389",
      "Nome": "Uberlândia",
      "Estado": "11"
    },
         {
      "ID": "2390",
      "Nome": "Umburatiba",
      "Estado": "11"
    },
         {
      "ID": "2391",
      "Nome": "Unaí",
      "Estado": "11"
    },
         {
      "ID": "2392",
      "Nome": "União de Minas",
      "Estado": "11"
    },
         {
      "ID": "2393",
      "Nome": "Uruana de Minas",
      "Estado": "11"
    },
         {
      "ID": "2394",
      "Nome": "Urucânia",
      "Estado": "11"
    },
         {
      "ID": "2395",
      "Nome": "Urucuia",
      "Estado": "11"
    },
         {
      "ID": "2396",
      "Nome": "Vargem Alegre",
      "Estado": "11"
    },
         {
      "ID": "2397",
      "Nome": "Vargem Bonita",
      "Estado": "11"
    },
         {
      "ID": "2398",
      "Nome": "Vargem Grande do Rio Pardo",
      "Estado": "11"
    },
         {
      "ID": "2399",
      "Nome": "Varginha",
      "Estado": "11"
    },
         {
      "ID": "2400",
      "Nome": "Varjão de Minas",
      "Estado": "11"
    },
         {
      "ID": "2401",
      "Nome": "Várzea da Palma",
      "Estado": "11"
    },
         {
      "ID": "2402",
      "Nome": "Varzelândia",
      "Estado": "11"
    },
         {
      "ID": "2403",
      "Nome": "Vazante",
      "Estado": "11"
    },
         {
      "ID": "2404",
      "Nome": "Verdelândia",
      "Estado": "11"
    },
         {
      "ID": "2405",
      "Nome": "Veredinha",
      "Estado": "11"
    },
         {
      "ID": "2406",
      "Nome": "Veríssimo",
      "Estado": "11"
    },
         {
      "ID": "2407",
      "Nome": "Vermelho Novo",
      "Estado": "11"
    },
         {
      "ID": "2408",
      "Nome": "Vespasiano",
      "Estado": "11"
    },
         {
      "ID": "2409",
      "Nome": "Viçosa",
      "Estado": "11"
    },
         {
      "ID": "2410",
      "Nome": "Vieiras",
      "Estado": "11"
    },
         {
      "ID": "2411",
      "Nome": "Virgem da Lapa",
      "Estado": "11"
    },
         {
      "ID": "2412",
      "Nome": "Virgínia",
      "Estado": "11"
    },
         {
      "ID": "2413",
      "Nome": "Virginópolis",
      "Estado": "11"
    },
         {
      "ID": "2414",
      "Nome": "Virgolândia",
      "Estado": "11"
    },
         {
      "ID": "2415",
      "Nome": "Visconde do Rio Branco",
      "Estado": "11"
    },
         {
      "ID": "2416",
      "Nome": "Volta Grande",
      "Estado": "11"
    },
         {
      "ID": "2417",
      "Nome": "Wenceslau Braz",
      "Estado": "11"
    }
]

  }

  

}
