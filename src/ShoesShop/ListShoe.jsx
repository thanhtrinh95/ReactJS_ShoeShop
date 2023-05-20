import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
    state = {
        prodDetails: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"

        }
    }
    viewDetail = (prodClick) => {
        this.setState({
            prodDetails: prodClick
        })
    }
    render() {
        const { arrProduct } = this.props;
        const { id, name, alias, price, description, shortDescription, quantity, image } = this.state.prodDetails;
        return (
            <div className='container'>
                <h1 className='text-center mt-3'>Shoes Shop</h1>
                <div className="row">
                    {arrProduct.map((prod) => {
                        return <div className='col-4 mt-2' key={prod.id}>
                            <ItemShoe sp={prod} viewDetail={this.viewDetail} />
                        </div>
                    })}



                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Shoe Detail</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className='row'>
                                    <div className='col-4 text-center' key={id}>

                                        <img src={image} alt="..." className='w-100' />
                                    </div>
                                    <div className='col-8'>
                                        <h3>Product detail</h3>
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <td>Name:</td>
                                                    <td>{name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Alias:</td>
                                                    <td>{alias}</td>
                                                </tr>
                                                <tr>
                                                    <td>Description:</td>
                                                    <td>{description}</td>
                                                </tr>
                                                <tr>
                                                    <td>More: </td>
                                                    <td>{shortDescription}</td>
                                                </tr>
                                                <tr>
                                                    <td>Quantity:</td>
                                                    <td>{quantity}</td>
                                                </tr>
                                                <tr>
                                                    <td>Price</td>
                                                    <td>{price}$</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
