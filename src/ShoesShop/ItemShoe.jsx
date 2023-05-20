import React, { Component } from 'react'

export default class ItemShoe extends Component {

    render() {
        const { sp, viewDetail } = this.props;
        return (

            <div className='card'>
                <img src={sp.image} alt="..." />
                <div className="card-body">

                    <h3>{sp.name}</h3>
                    <p>Price: {sp.price}$</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        viewDetail(sp)
                    }}>
                        Detail
                    </button>

                </div>
            </div>

        )
    }
}
