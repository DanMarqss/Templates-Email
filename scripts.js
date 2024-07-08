document.getElementById('financeiro-button').addEventListener('click', function() {
  showGroup('financeiro');
});

document.getElementById('suporte-button').addEventListener('click', function() {
  showGroup('suporte');
});

document.getElementById('comercial-button').addEventListener('click', function() {
  showGroup('comercial');
});

function showGroup(group) {
  document.getElementById('financeiro-group').style.display = 'none';
  document.getElementById('suporte-group').style.display = 'none';
  document.getElementById('comercial-group').style.display = 'none';
  document.getElementById(group + '-group').style.display = 'block';
}

function selectMessage(section) {
  var select = document.getElementById(section + '-mensagem-select');
  var value = select.value;
  var variableGroups = document.querySelectorAll('.variable-group');
  variableGroups.forEach(group => group.style.display = 'none');
  document.getElementById(value + '-variables').style.display = 'block';
}

function generateMessage(section) {
  var select = document.getElementById(section + '-mensagem-select');
  var value = select.value;

  var message;
  if (section === 'financeiro') {
    if (value === 'fatura-primeira') {
      var boleto = document.getElementById('boleto').value;
      var mesFatura = document.getElementById('mes-fatura').value;
      var dataVencimento = document.getElementById('data-vencimento').value;
      var valor = document.getElementById('valor').value;
      var codigoCliente = document.getElementById('codigo-cliente').value;
      message = `Prezado(a) Cliente,
Sua primeira fatura AXES no valor de R$${valor} referente ao mês de ${mesFatura} está disponível. O boleto de número ${boleto} vence em ${dataVencimento}.
Código do Cliente: ${codigoCliente}.`;
    } else if (value === 'fatura-envio-nf') {
      var nota = document.getElementById('nota').value;
      var taxaInstalacao = document.getElementById('taxa-instalacao').value;
      var dataVencimento = document.getElementById('data-vencimento-nf').value;
      var dataMensalidade = document.getElementById('data-mensalidade').value;
      var proRata = document.getElementById('pro-rata').value;
      var valor = document.getElementById('valor-nf').value;
      var vencimentoServico = document.getElementById('vencimento-servico').value;
      message = `Prezado(a) Cliente,
A nota fiscal de número ${nota} foi emitida. Valor total: R$${valor}, incluindo taxa de instalação de R$${taxaInstalacao} e pro rata de R$${proRata}.
Data de vencimento: ${dataVencimento}. Data da mensalidade: ${dataMensalidade}. Vencimento do serviço: ${vencimentoServico}.`;
    }
  } else if (section === 'suporte') {
    if (value === 'suporte-padrao') {
      var megasContratados = document.getElementById('megas-contratados').value;
      var autenticacao = document.getElementById('autenticacao').value;
      var senha = document.getElementById('senha').value;
      var codigoCliente = document.getElementById('codigo-cliente-suporte').value;
      message = `Prezado(a) Cliente,
Sua internet banda larga foi ativada com sucesso.
Megas contratados: ${megasContratados}.
Detalhes de login:
- Autenticação: ${autenticacao}
- Senha: ${senha}
Código do Cliente: ${codigoCliente}.`;
    } else if (value === 'ativacao-internet-dedicada') {
      var megasContratados = document.getElementById('megas-contratados-dedicada').value;
      var rede = document.getElementById('rede').value;
      var gateway = document.getElementById('gateway').value;
      var primeiroIp = document.getElementById('primeiro-ip').value;
      var ultimoIp = document.getElementById('ultimo-ip').value;
      var dns = document.getElementById('dns').value;
      var codigoCliente = document.getElementById('codigo-cliente-dedicada').value;
      message = `Prezado(a) Cliente,
Sua internet dedicada foi ativada com sucesso.
Megas contratados: ${megasContratados}.
Detalhes da rede:
- Rede: ${rede}
- Gateway: ${gateway}
- Primeiro IP: ${primeiroIp}
- Último IP: ${ultimoIp}
- DNS: ${dns}
Código do Cliente: ${codigoCliente}.`;
    }
  }

  document.getElementById(section + '-message-text').innerText = message;
}
