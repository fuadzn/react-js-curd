import React, { Component } from 'react';
import Customer from './Customer'

class CustumerList extends Component {
    onDelete = id => {
        this.props.onDelete(id)
        // console.log("customer on delete", id)
    }

    onEdit = data => {
        this.props.onEdit(data);
        // console.log("customer on edit", id)
    }
    render() {
        const customers = this.props.customers;
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{ width: '50px', textAlign: 'center' }}>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th style={{ width: '148px'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => {
                            return <Customer customer={customer} key={customer.id} onDelete={this.onDelete} onEdit={this.onEdit} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustumerList