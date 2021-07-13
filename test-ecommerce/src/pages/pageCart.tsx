import React, { useState ,useContext } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import '../../../style/Cart.css';

import { CartContext } from '../Pages/Contexts/CartContext';

export default function Index({cartOpen,setcartOpen}) {
    const [cartItems, setcartItems] = useState([])
    const [cart,setcart] = useContext(CartContext);

    const increase = (row) => {
        const newCart=  cart?.map(element=>{
            if (element.id == row.id) {
                element.qte = element.qte + 1 ;
            }
            return element ;
        })
        setcart(newCart);
    }
    const decrease = (row) => {

        const newCart=  cart?.map(element=>{
            if (element.id == row.id) {
                element.qte = element.qte - 1 ;
            }
            return element ;
        })
        setcart(newCart);
        
    }
    return (<>
        <div className="cart-sidebar" style={cartOpen?{right:'0px'}:null}>
                    <div style={{backgroundColor: '#44b2bc none repeat scroll 0 0 !important'}} className="bs-canvas-header side-cart-header p-3 ">
                        <div className="d-inline-block  main-cart-title">My Cart <span>({cart?.length} Items)</span></div>
                        <button type="button" className="bs-canvas-close close" data-toggle="offcanvas"><CloseIcon onClick={()=>setcartOpen(false)}/></button>
                    </div>
                    <div className="cart-sidebar-body" style={{backgroundColor: 'rgb(108 117 125 / 27%)',padding:'10px'}}>
                        {
                            cart?.map((row, index) => (
                                <div className="cart-item" key={index}>
                                    <div className="cart-product-img">
                                        <img className="img-fluid" src={row.photo} alt="cart" style={{borderRadius: '50%'}}/>
                                        <div className="offer-badge">{row.discountPer || 10}% OFF</div>
                                    </div>
                                    <div className="cart-text">
                                        <h4 style={{fontFamily:'Lato'}}>{row.name}</h4>
                                        <div className="qty-group">
                                            <div className="quantity buttons_added">
                                                <input style={{padding: '3px'}} type="button" defaultValue="-" className="minus minus-btn" onClick={() => decrease(row)} />
                                                <input type="number" value={row.qte} className="input-text qty text" disabled style={{textAlign: 'center',fontWeight: '700',fontSize: 'larger'}} />
                                                <input style={{padding: '3px'}} type="button" defaultValue="+" className="plus plus-btn" onClick={() => increase(row)} />
                                                <button type="button" className="cart-close-btn" onClick={() => this.props.removeFromCart(row)}><i className="mdi mdi-close" /></button>
                                            </div>
                                            <div className="cart-item-price"><span>DT {row.price}</span></div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="cart-sidebar-footer" style={{ padding: '0px 18px'}}>
                        <div className="cart-store-details">
                            <p>Sub Total <strong className="float-right">
                            DT {/* {cartItems?.reduce((sum, i) => (
                                    sum += i.qty * i.netPrice
                                ), 0)} */}
                            </strong></p>
                            <p>Delivery Charges <strong className="float-right text-danger">+ DT 29.69</strong></p>
                            <h6>Your total savings <strong className="float-right text-danger">DT 55 (42.31%)</strong></h6>
                        </div>
                        <a href="/checkout"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline" /> Proceed to Checkout </span><span className="float-right"><strong>
                        {/* DT {cartItems?.reduce((sum, i) => (
                                sum += i.qty * i.netPrice
                            ), 0)} */}
                        </strong> <span className="mdi mdi-chevron-right" /></span></button></a>
                    </div>
                   <style jsx>{`
                   .cart-item{
                       display:flex;
                   }
                   .cart-product-img{
                       width:100px ;
                   }
                   `} </style>
                </div>
                </>
    )
}
