import { Nav, Spinner, Button } from 'react-bootstrap';
import './styles.css';
import { Outlet } from 'react-router-dom';
import requisicao from '../../connection/index';
import { React, useState, useEffect } from 'react';

function Index() {

  const [sistemaFora, setSistemaFora] = useState(true);

  useEffect(() => {
    buscarTesteDeConexao();
  }, []);

  const buscarTesteDeConexao = async (event) => {
    try {
      const response = await requisicao.get(`/teste/teste_de_conexao`);
      setSistemaFora(false);
    } catch (error) {
      console.error('Erro:', error);
      setSistemaFora(true);
    }
  }

  return (
    <div className='tela-toda'>
      {sistemaFora === true ? 
        <div className="sistema-fora">
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Carregando...
          </Button>
        </div>
       : 
       <div>
         <div className='cabecalho'>
           FINA CONTROL - Controle Financeiro
         </div>
         <div className='linha-central'>
           <div className='menu-lateral'>
             <Nav defaultActiveKey="inicio" className="flex-column">
               <Nav.Item>
                 <Nav.Link eventKey="inicio" href="/inicio">
                     INICIO
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="inicio" href="/receitas">
                     RECEITAS
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="inicio" href="/despesas">
                     DESPESAS
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="contas" href="/contas">
                     CONTAS
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="categorias" href="/categorias">
                     CATEGORIAS
                 </Nav.Link>
               </Nav.Item>
             </Nav>
           </div>
           <div className='corpo'>
             <Outlet/>
           </div>
         </div>
      </div>
      }
    </div>
  );
}

export default Index;
