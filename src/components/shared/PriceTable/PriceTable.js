import React from 'react'
import "./PriceTable.css";

// PriceTable ui from 
// https://codepen.io/Creaticode/pen/pHEyJ
function Table(props) {
    return (
        <>
        {console.log('Table props: ',props)}
		<div className="pricing-table">
			<h3 className="pricing-title">{props.item.title}</h3>
			<div className="price">$60<sup>/ mes</sup>
            <div className="clear">
            <img src={props.item.thumbnailUrl} />
            </div>
            </div>
			
			<ul className="table-list">
				<li>10 GB <span>De almacenamiento</span></li>
				<li>1 Dominio <span>incluido</span></li>
				<li>25 GB <span>De transferencia mensual</span></li>
				<li>Base de datos <span className="unlimited">ilimitadas</span></li>
				<li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
				<li>CPanel <span>incluido</span></li>
			</ul>
			
			<div className="table-buy">
				<p>$60<sup>/ mes</sup></p>
				<a href="#" className="pricing-action">Comprar</a>
			</div>
		</div>
        </>
    );
  }

export default function PriceTable(props) {
    return (
        <div>
          {console.log(props.data)}
          <h1 className="pricing-table-title">Tabla de Precios </h1>

	<div className="pricing-wrapper clearfix">
		{props.data.map(item=>{
		return <Table item={item} key={item.id} />
        })}
	
	</div>

        </div>
    )
}
