const messages = {
  '1000': 'E-mail com formato inválido',
  '1001': 'Usuário não encontrado',
  '1002': 'Usuário encontrado com sucesso',
  '1003': 'País não encontrado',
};

interface responseHttp {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
  records?: any;
}

function callbackResponseMessage(code: string): string {
  return messages[code] || 'Erro não identificado, contatar o suporte';
}

function responseHttp(
  statusCode: number,
  message: string,
  path: string,
  records?: any,
): responseHttp {
  return {
    statusCode,
    message,
    timestamp: new Date().toISOString(),
    path,
    records,
  };
}

export { callbackResponseMessage, responseHttp };
